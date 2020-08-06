import ApoloClient from 'apollo-boost';
import gql from 'graphql-tag'


const API_URL = 'http://localhost:3001/graphql';
const client = new ApoloClient({
    uri: API_URL
});

//Start load Data

