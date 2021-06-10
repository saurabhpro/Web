import sessions from '../data/sessions.js';

import { DataSource } from 'apollo-datasource';
import _ from 'lodash';

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  getSessions(args) {
    return _.filter(sessions, args);
  }

  getSessionById(id) {
    return _.filter(sessions, { id: parseInt(id) })[0];
  }

  toggleFavoriteSession(id) {
    const session = _.filter(sessions, { id: parseInt(id) })[0];

    session.favorite = !session.favorite;
    return session;
  }
}

export default SessionAPI;
