import sessions from '../data/sessions.js';

import { DataSource } from 'apollo-datasource';
import _ from 'lodash';

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessions(args) {
    return _.filter(sessions, args);
  }

  getSessionById(id) {
    return _.filter(sessions, { id: parseInt(id) })[0];
  }
}

export default SessionAPI;
