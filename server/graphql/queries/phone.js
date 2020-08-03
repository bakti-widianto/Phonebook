const { GraphQLObjectType, GraphQLList } = require('graphql');
var services = require('../../services');
var phoneType = require('../types/phone').phoneType;

//Query
exports.queryType = new GraphQLObjectType({
    name: 'Query',
    fields: function () {
        return{
            phones: {
                type: new GraphQLList(phoneType),
                resolve: services.getContact
            }
        }
    }
});