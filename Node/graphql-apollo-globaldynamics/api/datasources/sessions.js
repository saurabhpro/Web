import { DataSource } from 'apollo-datasource';
import { resolve } from 'path';
import uniqueRandom from 'unique-random';

import { Low, JSONFile } from 'lowdb';
import _ from 'lodash';

// Use JSON file for storage
const file = resolve('data', 'sessions.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);
// Read data from JSON file, this will set db.data content
await db.read();

class SessionDataSource extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {
    this.db = db.data.sessions;
  }

  getSessions(args) {
    return _.filter(this.db, args);
  }

  getSessionById(id) {
    return _.filter(this.db, { id: parseInt(id) })[0];
  }

  async createSession(session) {
    const random = uniqueRandom(1, 10_000_000);
    session['id'] = random();

    const sessions = this.db.push(session);

    await db.write(sessions);

    return sessions;
  }
}

export default SessionDataSource;
