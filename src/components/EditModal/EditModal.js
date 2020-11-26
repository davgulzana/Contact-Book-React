import React, {useState} from 'react';
import './EditModal.css'

const EditContact = (props) => {
    let [name, setName] = useState(props.editContact.name)
    let [lastName, setLastName] = useState(props.editContact.lastName)
    let [phoneNumber, setPhoneNumber] = useState(props.editContact.phoneNumber)


    function handleEditNameInput(e){
        setName(e.target.value)
    }

    function handleEditLastNameInput(e){
        setLastName(e.target.value)
    }

    function handleEditPhoneNumberInput(e){
        setPhoneNumber(e.target.value)
    }

    function handleSave(){
        let contact = {...props.editContact}
        contact.name = name;
        contact.lastName = lastName;
        contact.phoneNumber = phoneNumber;
    
        props.handleSaveContact(contact)
    }

    return (
        <div className="main-modal">
            <div className="inner-modal">
                <div className="close">
                    <button onClick={props.handleCloseModal}>&times;</button>
                </div>
                <input 
                    onChange={handleEditNameInput}
                    value={name} 
                    type="text" 
                />
                <input 
                    onChange={handleEditLastNameInput}
                    value={lastName} 
                    type="text" 
                />
                <input 
                    onChange={handleEditPhoneNumberInput}
                    value={phoneNumber} 
                    type="number" 
                />
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default EditContact;