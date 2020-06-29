import React, { useContext } from 'react';
import { ContactContext } from './context';
import Contact from './contact';


const Contacts = () => {
  const  {contacts}  = useContext(ContactContext);
  console.log(`Contacts ${contacts}`)
  return (
    <section className="contacts">
    <h1> Here {contacts.length}</h1>
    { contacts.map(contact => (
      <Contact key={contact.id} contact={contact} />
    )) }
    </section>
  )
}

export default Contacts;
