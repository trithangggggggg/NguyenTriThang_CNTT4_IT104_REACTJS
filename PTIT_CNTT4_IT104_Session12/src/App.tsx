import React from 'react'
import ListCourse from './components/PTIT_CNTT4_IT104_Session12_Bai01/ListCourse'
import Calculation from './components/PTIT_CNTT4_IT104_Session12_Bai02/Calculation'
import UserInfo from './components/PTIT_CNTT4_IT104_Session12_Bai03/UserInfo'
import ColorBox from './components/PTIT_CNTT4_IT104_Session12_Bai04/ColorBox'
import FormatName from './components/PTIT_CNTT4_IT104_Session12_Bai05/FormatName'
import AdminIndex from './components/PTIT_CNTT4_IT104_Session12_Bai06/AdminIndex'
import UserLayout from './components/PTIT_CNTT4_IT104_Session12_Bai07/UserLayout'
import BuildingUI from './components/PTIT_CNTT4_IT104_Session12_Bai08/BuildingUI'
import Todolist from './components/PTIT_CNTT4_IT104_Session12_Bai09/Todolist'
import SudentManager from './components/PTIT_CNTT4_IT104_Session12_Bai10/SudentManager'

export default function App() {
  return (
    <div>
     <ListCourse/> 
     <Calculation/>
     <UserInfo/>
     <ColorBox/>
     <FormatName/>
     <AdminIndex/>
     <UserLayout/>
     <BuildingUI/>
     <Todolist/>
     <SudentManager/>
    </div>
    
  )
}
