import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-express';
import SessionDataSource from './datasources/sessions.js';
import SpeakerDataSource from './datasources/speakers.js';
import UserDataSource from './datasources/users.js';

import typeDefs from './schema.js';

import { verifyToken } from './utils/auth.js';
import resolvers from './resolvers/index.js';
import cookieParser from 'cookie-parser';
import express from 'express';

import { generateUserModel } from './models/user.js';
import AuthDirective from './directives/AuthDirective.js';

import {
  createRateLimitTypeDef,
  createRateLimitDirective,
  defaultKeyGenerator,
} from 'graphql-rate-limit-directive';

import depthLimit from 'graphql-depth-limit';

import validationComplexity from 'graphql-validation-complexity';
const { createComplexityLimitRule } = validationComplexity;

dotenv.config();

const app = express();

const dataSources = () => ({
  sessionDataSource: new SessionDataSource(),
  speakerDataSource: new SpeakerDataSource(),
  userDataSource: new UserDataSource(),
});

app.use(cookieParser());

const keyGenerator = (directiveArgs, obj, args, context, info) =>
  context.user
    ? `${context.user.sub}:${defaultKeyGenerator(
        directiveArgs,
        obj,
        args,
        context,
        info
      )}`
    : defaultKeyGenerator(directiveArgs, obj, args, context, info);

const server = new ApolloServer({
  typeDefs: [createRateLimitTypeDef(), typeDefs],
  resolvers,
  dataSources,
  schemaDirectives: {
    requiresAdmin: AuthDirective,
    rateLimit: createRateLimitDirective({
      keyGenerator,
    }),
  },
  validationRules: [
    // this means only 3 level of nesting is allowed
    depthLimit(3),
    // this means only the queries with cost 1500 will be allowed
    createComplexityLimitRule(1500, {
      onCost: (cost) => {
        console.log('query cost:', cost);
      },
    }),
  ],
  // https://stackoverflow.com/questions/59021384/how-to-pass-cookie-from-apollo-server-to-apollo-clenet
  context: ({ req, res }) => {
    let user = null;

    if (req.cookies.token) {
      const payload = verifyToken(req.cookies.token);
      user = payload;
    }
    return {
      user,
      res,
      models: {
        User: generateUserModel({ user }),
      },
    };
  },
  debug: true,
});

server.applyMiddleware({ app });

app.listen(process.env.PORT || 4000, () => {
  console.log(`graphQL running at port 4000`);
});
