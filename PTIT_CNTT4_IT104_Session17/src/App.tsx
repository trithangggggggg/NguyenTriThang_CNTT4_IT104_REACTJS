import React, { Component } from 'react'
import ResetName from './Components/PTIT_CNTT4_IT104_Session17_Bai01/Resetname'
import ProductInfo from './Components/PTIT_CNTT4_IT104_Session17_Bai02/ProductInfo'
import ChangeColor from './Components/PTIT_CNTT4_IT104_Session17_Bai03/ChangeColor'
import HideShow from './Components/PTIT_CNTT4_IT104_Session17_Bai04/HideShow'
import Form from './Components/PTIT_CNTT4_IT104_Session17_Bai05/Form'
import CounText from './Components/PTIT_CNTT4_IT104_Session17_Bai06/CounText '
import Select from './Components/PTIT_CNTT4_IT104_Session17_Bai07/Select'
import Checkbox from './Components/PTIT_CNTT4_IT104_Session17_Bai08/Checkbox '
import Todolist from './Components/PTIT_CNTT4_IT104_Session17_Bai09/Todolist'

export default class App extends Component {
  render() {
    return (
      <div>
          <h1>Bai 1</h1>
          <ResetName/>
          <hr />
          <h1>Bai 2</h1>
          <ProductInfo/>
          <hr />
          <h1>Bai 3</h1>
          <ChangeColor/>
          <hr />
          <h1>Bai 4</h1>
          <HideShow/>
          <hr />
          <h1>Bai 5</h1>
          <Form/>
          <hr />
          <h1>bai 6</h1>
          <CounText/>
          <hr />
          <h1>Bai 7</h1>
          <Select/>
          <hr />
          <h1>Bai 8</h1>
          <Checkbox/>
          <hr />
          <h1>Bai 9</h1>
          <Todolist/>
          <hr />
      </div>
    )
  }
}
