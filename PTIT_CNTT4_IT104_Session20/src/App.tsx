import React from 'react'
import ValidateInput from './assets/Components/PTIT_CNTT4_IT104_Session20_Bai01/ValidateInput'
import UserProfile from './assets/Components/PTIT_CNTT4_IT104_Session20_Bai02/UserProfile'
import Welcome from './assets/Components/PTIT_CNTT4_IT104_Session20_Bai03/Welcome'
import PageTitle from './assets/Components/PTIT_CNTT4_IT104_Session20_Bai04/PageTitle'
import FocusInput from './assets/Components/PTIT_CNTT4_IT104_Session20_Bai06/FocusInput'
import Counter from './assets/Components/PTIT_CNTT4_IT104_Session20_Bai07/Counter'
import UserForm from './assets/Components/PTIT_CNTT4_IT104_Session20_Bai08/UserForm'

export default function App() {
  return (
    <div>
        <h1>Bai 1</h1>
        <ValidateInput/>
        <hr />
        <h1>Bai 2</h1>
        <UserProfile/>
        <hr />
        <h1>Bai 3</h1>
        <Welcome/>
        <hr />
        <h1>bai 4</h1>
        <PageTitle/>
        <hr />
        <h1>bai 6</h1>
        <FocusInput/>
        <hr />
        <h1>Bai 7</h1>
        <Counter/>
        <hr />
        <h1>Bai 8</h1>
        <UserForm/>
        <hr />
    </div>
  )
}
