const firebase = require("firebase");

const getContact = () => {
    const phoneReference = firebase.database().ref("/Phones/");
    return (new Promise((resolve, reject) => {
        phoneReference.on("value", function (snapshot) {
            const folders = snapshot.val();
            if (folders === null) {
                resolve([])
            } else {
                const data = Object.keys(folders).map(o => Object.assign({ id: o }, folders[o]))
                resolve(data)
            }
            phoneReference.off("value")
        }, (errorObject) => {
            console.log("The read failed: " + errorObject.code)
            reject("The read failed: " + errorObject.code)
        })
    }))
}

const createContact = (contact) => {
    const referencePath = `/Phones/${contact.id}`;
    const phoneReference = firebase.database().ref(referencePath);
    return new Promise((resolve, reject) => {
        phoneReference.set({ name: contact.name, phone: contact.phone }, function (error) {
            if (error) {
                reject("Data could not be saved." + error)
            } else {
                resolve(contact)
            }
        })
    })
}

const updateContact = (contact) => {
    const referencePath = `/Phones/${contact.id}`;
    const phoneReference = firebase.database().ref(referencePath);
    return new Promise((resolve, reject) => {
        phoneReference.update({ name: contact.name, phone: contact.phone }, function (error) {
            if (error) {
                reject("Data could not be updated." + error)
            } else {
                resolve(contact)
            }
        })
    })
}

const deleteContact = (contact) => {
    const referencePath = `/Phones/${contact.id}`;
    const phoneReference = firebase.database().ref(referencePath);
    return new Promise((resolve, reject) => {
        phoneReference.remove( function (error) {
            if(error){
                reject("Data could not be deleted." + error)
            }else{
                resolve(contact)
            }
        })
    })
}

module.exports = {getContact, createContact, updateContact, deleteContact}