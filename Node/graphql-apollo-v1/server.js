import { ApolloServer } from 'apollo-server';
import SessionAPI from './datasources/sessions.js';
import SpeakerAPI from './datasources/speakers.js';
import typeDefs from './schema/schema.js';
import resolvers from './resolvers/resolvers.js';

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
  speakerAPI: new SpeakerAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  // introspection: false,
  // playground: false,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`GraphQL running at ${url}`);
});
