import React from 'react';

const Contact = ({contact}) => {
 console.log(contact.name);
  return (
    <div className="oneContact">
      <h3>{contact.name}</h3>
      <h4>{contact.tel}</h4>
      {contact.friend ? <p>Friend</p> : <p>Not friend</p>}
    </div>

  )
}

export default Contact