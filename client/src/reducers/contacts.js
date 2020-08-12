const initState = {
    contacts: [],
    // page: 1,
    // pages: 0,
    // isSearch: false,
    // filterName: '',
    // filterPhone: ''
}


const contacts = (state = initState, action) => {
    console.log(action.type)
    switch (action.type) {

        case 'LOAD_CONTACT_SUCCESS':
            return {
                ...state,
                contacts: action.phones.map((item) => {
                    item.sent = true;
                    item.isEditing = false;
                    return item;
                }),
            }

        case 'POST_CONTACT':
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    {
                        id: action.id,
                        name: action.name,
                        phone: action.phone,
                        sent: true
                    }
                ]
            }

        case 'POST_CONTACT_SUCCESS':
            return {
                ...state,
                contacts: state.contacts.map(item => {
                    item.sent = true;
                    return item
                })
            }

        case 'POST_CONTACT_FAILURE':
            return {
                ...state,
                contacts: state.contacts.map(item => {
                    if (item.id === action.id) {
                        item.sent = false;
                    }
                    return item
                })
            }

        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(item => item.id !== action.id)
            }

        case 'ON_UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map((item) => {
                    if (item.id === action.id) {
                        item.isEditing = true;
                    }
                    return item
                })
            }

        case 'OFF_UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map((item) => {
                    if (item.id === action.id) {
                        item.isEditing = false;
                    }
                    return item
                })
            }












        case 'DELETE_CONTACT_SUCCESS':
        case 'DELETE_CONTACT_FAILURE':
        case 'LOAD_CONTACT_FAILURE':
        default:
            return state

    }
}

export default contacts;