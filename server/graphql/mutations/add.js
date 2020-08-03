const { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');
const phoneType = require('../types/phone').phoneType;
const services = require('../../services');


exports.add = {
    type: phoneType,
    args: {
        id: {
            type: GraphQLID
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        phone: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params) {
        return services.createContact(params)
    }
}
