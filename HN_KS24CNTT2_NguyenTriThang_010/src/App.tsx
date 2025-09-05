import React from 'react'
import Header from './Components/Header'
import AddNewContact from './Components/AddNewContact'
import ContactList from './Components/ContactList'

export default function App() {
  return (
    <div>
        <div className='bg-gray-200'>
          <Header/>
          <AddNewContact/>
          <br />
          <ContactList/>
        </div>
    </div>
  )
}
