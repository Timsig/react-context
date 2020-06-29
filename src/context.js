import React, { useContext } from 'react';

const initialState = {
  contacts: [
    { id: 1,
      name: "Tommy Bobbins",
      tel: "07590 324567",
      friend: true
    },
    {
      id: 2,
      name: "Fran Chesker",
      tel: "07545 1234567",
      friend: true
    },
    {
      id: 3,
      name: "Billy Bagpuss",
      tel: "03500 098765",
      friend: false
    }
  ]
};



export const ContactContext = React.createContext();

class ContactProvider extends React.Component {

constructor(props) {
  super(props)
  this.addContact = this.addContact.bind(this);

  this.state = initialState;
}

addContact( name, number ) {
  
  const newContact = [{}];
  newContact.id = this.state.length + 1;
  newContact.name = name;
  newContact.tel = number;
  newContact.freind = true;
  this.setState({ contacts:[newContact, ...this.state.contacts]});  
}

  render() {
    const {contacts} = this.state;
    console.log("Context render contacts: " + contacts)
    const {addContact} = this;
    const value = { contacts, addContact }
    return (
      <ContactContext.Provider value={value}>
        {this.props.children}
      </ContactContext.Provider>
    );
  }

}

export default ContactProvider;
