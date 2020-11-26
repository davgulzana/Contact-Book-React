import React from 'react';

const ContactList = (props) => {

    return (
        <ul>
            {props.contacts.map((item, index) => (
                <li key={item.id}>
                    {item.name} <br/>
                    {item.lastName} <br/>
                    {item.phoneNumber} <br/>
                    <button onClick={() => props.handleEditContact(index)}>Edit</button>
                    <button onClick={() => props.handleDeleteContact(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;