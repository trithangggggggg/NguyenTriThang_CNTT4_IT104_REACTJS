import { useEffect, useMemo, useState } from 'react'
import Header from './Components/Header'
import AddNewContact from './Components/AddNewContact'
import ContactList from './Components/ContactList'
import type { Contact } from './types'

export default function App() {
  const [contacts, setContacts] = useState<Contact[]>([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem('contacts')
      if (raw) {
        const parsed = JSON.parse(raw) as Contact[]
        if (Array.isArray(parsed)) setContacts(parsed)
      }
    } catch {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    } catch {}
  }, [contacts])

  
  const [editingContactId, setEditingContactId] = useState<number | null>(null)

  const editingContact = useMemo(
    () => contacts.find(c => c.id === editingContactId) || null,
    [contacts, editingContactId]
  )

  const handleSave = (draft: { id?: number; name: string; phone: string }) => {
    const trimmedName = draft.name.trim()
    const trimmedPhone = draft.phone.trim()

    if (!trimmedName || !trimmedPhone) return

    const isDuplicatePhone = contacts.some(
      c => c.phone === trimmedPhone && (draft.id == null || c.id !== draft.id)
    )
    if (isDuplicatePhone) return

    if (draft.id != null) {
      setContacts(prev => prev.map(c => (c.id === draft.id ? { ...c, name: trimmedName, phone: trimmedPhone } : c)))
      setEditingContactId(null)
    } else {
      setContacts(prev => [...prev, { id: Date.now(), name: trimmedName, phone: trimmedPhone }])
    }
  }

  const handleEdit = (id: number) => {
    setEditingContactId(id)
  }

  const cancelEdit = () => setEditingContactId(null)

  return (
    <div>
      <div className='bg-gray-200'>
        <Header/>
        <AddNewContact
          contacts={contacts}
          editingContact={editingContact}
          onSave={handleSave}
          onCancelEdit={cancelEdit}
        />
        <br />
        <ContactList
          contacts={contacts}
          onEdit={handleEdit}
        />
      </div>
    </div>
  )
}
