import { DataSource } from 'apollo-datasource';
import { v4 as uuidv4 } from 'uuid';

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

  async createUser(user) {
    user['id'] = uuidv4();

    this.db.push(user);

    await db.write();

    return user;
  }

  getUserByEmail(email) {
    return this.db.find((user) => user.email === email);
  }

  async toggleFavoriteSession(sessionId, userId) {
    const favorites = this.getUserById(userId)['favorites'] ?? [];

    let set = [];
    if (_.includes(favorites, sessionId)) {
      // remove it
      set = [...favorites.filter((fav) => fav !== sessionId)];
    } else {
      // add it
      set = [...favorites, sessionId];
    }

    const user = this.getUserById(userId).assign({ favorites: set });
    await db.write(user);

    return user;
  }
}

export default UserDataSource;
