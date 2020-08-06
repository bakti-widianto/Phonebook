import React from 'react';
import HeaderCard from './HeaderCard'
import ListContacts from '../containers/ListContacts';


function PhoneBox() {

    return (
        <div className="card bg-light">
            <HeaderCard />
            <div className="card-body">
                <h2>button add</h2>
                <h2>Search</h2>
                <ListContacts />
            </div>
        </div>

    )


}

export default PhoneBox;