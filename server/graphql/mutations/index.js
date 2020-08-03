const addContact = require('./add').add
const updateContact = require('./update').update
const deleteContact = require('./delete').delete

module.exports = {
    addContact,
    updateContact,
    deleteContact
}