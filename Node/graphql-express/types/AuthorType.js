import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
} from 'graphql';

import BookType from './BookType.js';
import { books } from '../datastore.js';

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'This represents a author of a book',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) }, // means we decorate the String type as non-null
        books: {
            type: new GraphQLList(BookType),
            resolve: (author) =>
                books.filter((book) => book.authorId === author.id),
        },
    }),
});

export default AuthorType;
