var GraphQlSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var queryType = require('./queries/phone').queryType;
const mutation = require('./mutations/index');

exports.phoneSchema = new GraphQlSchema({
    query: queryType,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutation
    })
})