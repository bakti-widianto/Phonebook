const initState = {
    contacts: [],
    // page: 1,
    // pages: 0,
    // isSearch: false,
    // filterName: '',
    // filterPhone: ''
}


const contacts = (state = initState, action) => {

    switch (action.type) {
        case 'LOAD_CONTACT_SUCCESS':
            console.log(action)
            return {
                ...state,
                contacts: action.phones.map((item) => {
                    item.sent = true;
                    return item;
                }),
            }


        case 'LOAD_CONTACT_FAILURE':
        default:
            return state

    }
}

export default contacts;