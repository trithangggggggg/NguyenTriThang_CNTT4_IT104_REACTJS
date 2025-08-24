import React, { Component } from 'react'
import Form from './assets/Components/PTIT_CNTT4_IT104_Session15_Bai01/Form'
import BirdDay from './assets/Components/PTIT_CNTT4_IT104_Session15_Bai03/BirdDay'
import FornRange from './assets/Components/PTIT_CNTT4_IT104_Session15_Bai04/FornRange'
import Todolist from './assets/Components/PTIT_CNTT4_IT104_Session15_Bai09/Todolist'
import Count from './assets/Components/PTIT_CNTT4_IT104_Session15_Bai08/Count'
import StudentManager from './assets/Components/PTIT_CNTT4_IT104_Session15_Bai10/StudentManager'
import Clock from './assets/Components/PTIT_CNTT4_IT104_Session15_Bai07/Clock'

export default class App extends Component {
  render() {
    return (
      <div>
          <Form/>
          <BirdDay/>
          <FornRange/>
          <h1>Bai7</h1>
          <Clock/>
          <h1>Bai8</h1>
          <Count/>
          <h1>Bai9</h1>
          <Todolist/>
          <h1>Bai 10</h1>
          <StudentManager/>
      </div>
    )
  }
}
