var GraphQlSchema = require('graphql').GraphQLSchema;
var queryType = require('./queries/phone').queryType;

exports.phoneSchema = new GraphQlSchema({
    query: queryType
})