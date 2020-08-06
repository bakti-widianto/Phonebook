import ApoloClient from 'apollo-boost';
import gql from 'graphql-tag'


const API_URL = 'http://localhost:3001/graphql';
const client = new ApoloClient({
    uri: API_URL
});

//Start load Data
export const loadContactsSuccess = (phones) => ({
    type: 'LOAD_CONTACT_SUCCESS',
    phones
})

export const loadContactsFailure = () => ({
    type: 'LOAD_CONTACT_FAILURE'
})


export const loadContacts = () => {
    const phonesQuery = gql`
    query{
        phones{
          id,
          name,
          phone
        }
    }`;
    return dispath => {
        return client.query({
            query: phonesQuery
        })
            .then(function (response) {
                console.log(response.data.phones)
                dispath(loadContactsSuccess(response.data.phones))
            })
            .catch(function (error) {
                console.log(error)
                dispath(loadContactsFailure())
            })
    }
}