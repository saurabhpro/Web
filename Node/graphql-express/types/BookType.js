import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
} from 'graphql';

import AuthorType from './AuthorType.js';
import { authors } from '../datastore.js';

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'This represents a book written by an author',
    // feilds is a function as we depend on AuthorType to be complied
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) }, // means we decorate the String type as non-null
        authorId: { type: GraphQLNonNull(GraphQLInt) },
        author: {
            type: AuthorType,
            resolve: (book) =>
                authors.find((author) => author.id === book.authorId),
        },
    }),
});

export default BookType;
