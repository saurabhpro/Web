import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
} from 'graphql';

// custom imports
import { books, authors } from './datastore.js';
import BookType from './types/BookType.js';
import AuthorType from './types/AuthorType.js';

const app = express();

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
        authors: {
            type: new GraphQLList(AuthorType),
            description: 'List of All Authors',
            resolve: () => authors,
        },
        author: {
            type: AuthorType,
            description: 'A Single Author',
            args: {
                id: { type: GraphQLInt },
            },
            resolve: (parent, args) =>
                authors.find((author) => author.id === args.id),
        },
    }),
});

// for actions
const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
        addBook: {
            type: BookType,
            description: 'Add a book',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                authorId: { type: GraphQLNonNull(GraphQLInt) },
            },
            resolve: (parent, args) => {
                const book = {
                    id: books.length + 1,
                    name: args.name,
                    authorId: args.authorId,
                };
                books.push(book);
                return book;
            },
        },
        addAuthor: {
            type: AuthorType,
            description: 'Add an author',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: (parent, args) => {
                const author = { id: authors.length + 1, name: args.name };
                authors.push(author);
                return author;
            },
        },
    }),
});

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType,
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
