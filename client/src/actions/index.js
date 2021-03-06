import ApoloClient from 'apollo-boost';
import gql from 'graphql-tag'
import Swal from 'sweetalert2';

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
                // console.log(response.data.phones)
                dispath(loadContactsSuccess(response.data.phones))
            })
            .catch(function (error) {
                console.log(error)
                dispath(loadContactsFailure())
            })
    }
}
//end load data

//start post data
const postContactSuccess = (contact) => ({
    type: 'POST_CONTACT_SUCCESS',
    contact
})

const postContactFailure = (id) => ({
    type: 'POST_CONTACT_FAILURE',
    id,
})

const postContactRedux = (id, name, phone) => ({
    type: 'POST_CONTACT',
    id,
    name,
    phone
})

export const postContact = (name, phone) => {
    console.log(name, phone)
    const id = new Date().getTime();
    const addQuery = gql`
    mutation addContact($id: ID!, $name: String!, $phone: String!) {
        addContact(id: $id, name: $name, phone: $phone) {
            id
            name
            phone
        }
    }`;

    return dispath => {
        dispath(postContactRedux(id, name, phone));

        return client.mutate({
            mutation: addQuery,
            variables: {
                id,
                name,
                phone
            }
        })
            .then(function (response) {
                Swal.fire(
                    'Success!',
                    'Contact added successfully!',
                    'success'
                )
                dispath(postContactSuccess(response.data.addContact));
            })
            .catch(function (error) {
                Swal.fire(
                    'Error!',
                    'connection problem try again later',
                    'error'
                )
                dispath(postContactFailure(id));
            })
    }
}
//end post



export const deleteContactSuccess = (id) => ({
    type: 'DELETE_CONTACT_SUCCESS', id
})

export const deleteContactFailure = () => ({
    type: 'DELETE_CONTACT_FAILURE'
})

export const deleteContactRedux = (id) => ({
    type: 'DELETE_CONTACT', id
})

export const deleteContact = (id) => {
    console.log(id)
    const deleteQuery = gql`
       mutation deleteContact($id: ID!){
          deleteContact(id: $id){
             id
          }
       }`;
    return dispatch => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                dispatch(deleteContactRedux(id))
                return client.mutate({
                    mutation: deleteQuery,
                    variables: {
                        id
                    }
                })
                    .then(function (response) {
                        Swal.fire(
                            'Success!',
                            'Contact deleted successfully!',
                            'success'
                        )
                        dispatch(deleteContactSuccess(id))
                    })
                    .catch(function (error) {
                        Swal.fire(
                            'Error!',
                            'connection problem try again later',
                            'error'
                        )
                        dispatch(deleteContactFailure())
                    })
            }
        })
    }

}


export const resendContact = (id, name, phone) => {
    console.log(id, name, phone)
    const addQuery = gql`
    mutation addContact($id: ID!, $name: String!, $phone: String!) {
        addContact(id: $id, name: $name, phone: $phone) {
            id
            name
            phone
        }
    }`;

    return dispath => {
        dispath(postContactRedux(id, name, phone));

        return client.mutate({
            mutation: addQuery,
            variables: {
                id,
                name,
                phone
            }
        })
            .then(function (response) {
                Swal.fire(
                    'Success!',
                    'Contact added successfully!',
                    'success'
                )
                dispath(postContactSuccess(response.data.addContact));
            })
            .catch(function (error) {
                Swal.fire(
                    'Error!',
                    'connection problem try again later',
                    'error'
                )
                dispath(postContactFailure(id));
            })
    }
}


export const onUpdateContact = (id) => ({
    type: 'ON_UPDATE_CONTACT',
    id
})

export const offUpdateContact = (id) => ({
    type: 'OFF_UPDATE_CONTACT',
    id
})

const updateContactSuccess = (contact) => ({
    type: 'UPDATE_CONTACT_SUCCESS',
    contact
})

const updateContactFailure = (id) => ({
    type: 'UPDATE_CONTACT_FAILURE',
    id
})

const updateContactRedux = (id, name, phone) => ({
    type: 'UPDATE_CONTACT',
    id,
    name,
    phone
})


export const updateContact = (id, name, phone) => {

    return dispatch => {
        // console.log(id, name, phone)
        dispatch(updateContactRedux(id, name, phone))

        const updateQuery = gql`
    mutation updateContact($id: ID!, $name: String!, $phone: String!) {
        updateContact(id: $id, name: $name, phone: $phone ) {
        id
        name
        phone
        }
    }`;

        return client.mutate({
            mutation: updateQuery,
            variables: {
                id,
                name,
                phone
            }
        })
            .then(function (response) {
                Swal.fire(
                    'Success!',
                    'Contact updated successfully!',
                    'success'
                )
                dispatch(updateContactSuccess(response.data.updateContact))
            })
            .catch(function (error) {
                Swal.fire(
                    'Error!',
                    'connection problem try again later',
                    'error'
                )
                dispatch(updateContactFailure(id))
            })





    }
}

export const searchContacts = (name, phone) => {
    const searchQuery = gql`
    query
        phones(
            $name : String!, 
            $phone: String!
        ){
            phones(
                name : $name,
                phone: $phone,
            )
        }`
    return dispatch => {
        return client.query({
            query: searchQuery,
            variables: {
                name,
                phone
            }
        })
            .then(function (response) {
                dispatch(console.log(response))
            })
            .catch(function (error) {
                dispatch(console.log(error))
            })
    }

}