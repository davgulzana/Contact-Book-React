import React, { useState } from 'react';

const AddContact = (props) => {

    let [name, setName] = useState('');
    let [lastName, setLastName] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');

    function handleClick(){
        let newObj = {
            name: name,
            lastName: lastName,
            phoneNumber: phoneNumber,
            id: Date.now()
        }
        props.handleContact(newObj);
        setName('');
        setLastName('');
        setPhoneNumber('');
    }

    function handleName(e){
        setName(e.target.value)
    }

    function handleLastName(e){
        setLastName(e.target.value)
    }

    function handlePhoneNumber(e){
        setPhoneNumber(e.target.value)
    }

    return (
        <div>
            <input value={name} onChange={handleName} type="text" placeholder="Имя" />
            <input value={lastName} onChange={handleLastName} type="text" placeholder="Фамилия" />
            <input value={phoneNumber} onChange={handlePhoneNumber} type="number" placeholder="Номер телефона" />
            <button onClick={handleClick}>Добавить</button>
        </div>
    );
};

export default AddContact;