import { DataSource } from 'apollo-datasource';

import { join } from 'path';
import { Low, JSONFile } from 'lowdb';
import _ from 'lodash';

// Use JSON file for storage
const file = join('data', 'users.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

// Read data from JSON file, this will set db.data content
await db.read();

class UserDataSource extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {
    this.db = db.data.users;
  }

  getUsers(args) {
    return _.filter(this.db, args);
  }

  getUserById(id) {
    return this.db.find((user) => user.id === id);
  }

  createUser(user) {
    return this.db.push(user).write();
  }

  getUserByEmail(email) {
    return this.db.find((user) => user.email === email);
  }

  toggleFavoriteSession(sessionId, userId) {
    const favorites = this.db.getById(userId).get('favorites').value() || [];

    let set = [];
    if (favorites.includes(sessionId)) {
      // remove it
      set = [...favorites.filter((fav) => fav !== sessionId)];
    } else {
      // add it
      set = [...favorites, sessionId];
    }

    return this.db.getById(userId).assign({ favorites: set }).write();
  }
}

export default UserDataSource;
