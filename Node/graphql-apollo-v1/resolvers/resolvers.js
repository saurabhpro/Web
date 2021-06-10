import Query from './query.js';
import Session from './session.js';
import Mutation from './mutation.js';

// to fetch the data
const resolvers = {
  Query,
  Session,
  Mutation,
  Room: {
    EUROPA: 'Europa',
    SOL: 'Sol',
    SATURN: 'Saturn',
  },
};

export default resolvers;
