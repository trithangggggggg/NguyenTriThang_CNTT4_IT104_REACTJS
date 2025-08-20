import React from 'react'
import Exercises01 from './assets/components/PTIT_CNTT4_IT104_Session13_Bai01/Exercises01'
import Exercises02 from './assets/components/PTIT_CNTT4_IT104_Session13_Bai02/Exercises02'
import Parent from './assets/components/PTIT_CNTT4_IT104_Session13_Bai05/Parent'
import ListPost from './assets/components/PTIT_CNTT4_IT104_Session13_Bai06/ListPost'
import ThemeApp from './assets/components/PTIT_CNTT4_IT104_Session13_Bai07/ThemeApp'
// import Exercises03 from './assets/components/PTIT_CNTT4_IT104_Session13_Bai03/Exercises03'
// import Event from './assets/components/Lythuyet/Event'

export default function App() {
  return (
    <div>
      {/* <Event/>   */}
      <Exercises01/>
      <Exercises02/>
      {/* <Exercises03/> */}
      <Parent/>
      <ListPost/>
      <ThemeApp/>
    </div>
  )
}
