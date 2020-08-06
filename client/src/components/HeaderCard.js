import React from 'react';
import Clock from 'react-live-clock';

function HeaderCard() {

    return (

        <div className="card-header">
            <h1>Phonebook</h1>
            <Clock format={'MMMM Mo YYYY, HH:mm:ss'} ticking={true} timezone={'Asia/Jakarta'}
                style={{ fontSize: '30px' }} />
        </div>


    )


}

export default HeaderCard;