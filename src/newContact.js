import React, { useState, useContext } from 'react';
import { ContactContext } from './context';

const NewContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { addContact } = useContext(ContactContext);

  const handleChange = event => {
    
    event.preventDefault();
    addContact( name, number );
  };

  return (
    <form className="NewContact" onSubmit={handleChange}>
      <input
        className="NewContact-input"
        placeholder="Name"
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <input
        className="NewNumber-input"
        placeholder="Number"
        type="text"
        value={number}
        onChange={event => setNumber(event.target.value)}
      />
      <input className="NewContact-submit button" type="submit" />
    </form>
  );
};

export default NewContact;