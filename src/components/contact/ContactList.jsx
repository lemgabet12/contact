import React from 'react'
import Contactcard from './Contactcard'

export default function ContactList() {
  const contacts = [{id:'0' , fullname:'Aymen elghoul' , phone:'54814842' , adress:'tunisie'}]
  return (
    <div className="col-3 list">
      <h1>Contact List</h1>
      <p>List Vide contact list !</p>
      <Contactcard/>
    </div>
  )
}
