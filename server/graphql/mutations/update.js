const { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');
const phoneType = require('../types/phone').phoneType;
const services = require('../../services');


exports.update = {
    type: phoneType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        phone: {
            type: GraphQLString
        }
    },
    resolve(root, params) {
        return services.updateContact(params)
    }
}