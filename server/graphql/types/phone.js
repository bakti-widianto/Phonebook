var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;

exports.phoneType = new GraphQLObjectType({
    name: 'phone',
    fields: function () {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            name: {
                type: GraphQLString
            },
            phone: {
                type: GraphQLString
            }
        }
    }
})