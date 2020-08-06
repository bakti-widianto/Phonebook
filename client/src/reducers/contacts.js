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

        case 'LOAD_CONTACT_FAILURE':
        default:
            return state

    }
}

export default contacts;