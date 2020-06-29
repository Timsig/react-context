import React, { useContext } from 'react';
import './App.css';
import ContactProvider from './context';
import Contacts from './contacts'
import NewContact from './newContact';

function App() {
   
  return (
    <ContactProvider>
      <NewContact />
      <Contacts />
    </ContactProvider>
  );
}

export default App;
