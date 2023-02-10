import React from 'react'
import ContactList from './contact/ContactList'
import Contactform from './contact/Contactform'
export default function Contact() {
  return (
    <div class ="row">
        <Contactform/>
      <ContactList/>
    </div>
  )
}
