import React from 'react';

const Contact = (props) => {
   return (
      <tr>
         <td >{props.index}</td>
         <td >{props.name}</td>
         <td >{props.phone}</td>
      </tr>

   )
}

export default Contact;