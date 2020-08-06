import React from 'react';
import HeaderCard from './HeaderCard'
import ListContacts from '../containers/ListContacts';
import AddForm from '../containers/AddForm';


function PhoneBox() {

    return (
        <div className="card bg-light">
            <HeaderCard />
            <div className="card-body">
                <h2>Search</h2>
                <AddForm />
                <ListContacts />
            </div>
        </div>

    )


}

export default PhoneBox;