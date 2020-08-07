import React from 'react';
import HeaderCard from './HeaderCard'
import ListContacts from '../containers/ListContacts';
import AddForm from '../containers/AddForm';
import SearchForm from '../containers/SearchForm'


function PhoneBox() {

    return (
        <div className="card bg-light">
            <HeaderCard />
            <div className="card-body">
                <SearchForm />
                <AddForm />
                <ListContacts />
            </div>
        </div>

    )


}

export default PhoneBox;