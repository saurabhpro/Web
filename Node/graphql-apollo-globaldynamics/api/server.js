import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-express';
import SessionDataSource from './datasources/sessions.js';
import SpeakerDataSource from './datasources/speakers.js';
import UserDataSource from './datasources/users.js';

import typeDefs from './schema.js';
import resolvers from './resolvers/index.js';
import cookieParser from 'cookie-parser';
import express from 'express';

dotenv.config();

const app = express();

const dataSources = () => ({
  sessionDataSource: new SessionDataSource(),
  speakerDataSource: new SpeakerDataSource(),
  userDataSource: new UserDataSource(),
});

app.use(cookieParser());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.applyMiddleware({ app });

app.listen(process.env.PORT || 4000, () => {
  console.log(`graphQL running at port 4000`);
});
