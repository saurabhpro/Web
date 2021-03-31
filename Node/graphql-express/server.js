import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { books } from './datastore.js';

import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull,
} from 'graphql';

const app = express();

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'This represents a book written by an author',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) }, // means we decorate the String type as non-null
        authorId: { type: GraphQLNonNull(GraphQLInt) },
    }),
});

// we can create a RootQueryType to store all our typs and query feilds
const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        book: {
            type: BookType,
            description: 'A Single Book',
            args: {
                id: { type: GraphQLInt },
            },
            resolve: (parent, args) =>
                books.find((book) => book.id === args.id),
        },
        books: {
            type: new GraphQLList(BookType),
            description: 'List of All Books',
            resolve: () => books,
        },
    }),
});

const schema = new GraphQLSchema({
    query: RootQueryType,
});

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
);

app.listen(5000, () => {
    console.log('Server Started on port 5000');
});
