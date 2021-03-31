const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const app = express();

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'FirstMessage',
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => 'Hello World',
            },
        }),
    }),
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
