import React, {useState} from 'react'
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import EditModal from './components/EditModal/EditModal';

function App() {

  let [contacts, setContacts] = useState([])
  let [modal, setModal] = useState(false);
  let [editContact, setEditContact] = useState({})


  function handleContact(contact){
    let newContacts = [...contacts]
    newContacts.push(contact)
    setContacts(newContacts)
  }

  function handleDeleteContact(id){
    let newContacts = contacts.filter(item => {
      return item.id !== id
    })
    setContacts(newContacts)
  }

  function handleEditContact(index){
    setModal(true)
    setEditContact(contacts[index])
  }

  function handleSaveContact(newContact){
    let newContacts = contacts.map(item => {
      if(item.id === newContact.id){
        return newContact
      }
      return item
    })
    setContacts(newContacts)
    handleCloseModal()
  }

  function handleCloseModal(){
    setModal(false)
  }

  return (
    <div className="App">
      <AddContact
        handleContact={handleContact}
      />
      <ContactList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        handleEditContact={handleEditContact}
      />
      {
        modal ? 
        <EditModal 
          editContact={editContact}
          handleSaveContact={handleSaveContact}
          handleCloseModal={handleCloseModal}
        /> 
        : null
      }
    </div>
  );
}

export default App;
