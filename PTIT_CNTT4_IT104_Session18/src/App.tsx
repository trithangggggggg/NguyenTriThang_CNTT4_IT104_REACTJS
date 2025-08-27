import React from "react";
import UseReducer from "./assets/Components/DemoHook/UseReducer";
import Todoo from "./assets/Components/DemoHook/Todoo";
import Increase from "./assets/Components/PTIT_CNTT4_IT104_Session18_Bai01/Increase";
import UserList from "./assets/Components/PTIT_CNTT4_IT104_Session18_Bai02/UserList";
import LoginForm from "./assets/Components/PTIT_CNTT4_IT104_Session18_Bai03/LoginForm";
import ColorPicker from "./assets/Components/PTIT_CNTT4_IT104_Session18_Bai04/ColorPicker";
import InputText from "./assets/Components/PTIT_CNTT4_IT104_Session18_Bai05/InputText";
import InputRadio from "./assets/Components/PTIT_CNTT4_IT104_Session18_Bai06/InputRadio";
import TarkManager from "./assets/Components/PTIT_CNTT4_IT104_Session18_Bai07/TarkManager";

export default function App() {
  return (
    <div>
      <UseReducer />
      <hr />
      <Todoo/>
      <hr />
      <h1>Bai 1</h1>
      <Increase/>
      <hr />
      <h1>Bai 2</h1>
      <UserList/>
      <hr />
      <h1>Bai 3</h1>
      <LoginForm/>
      <hr />
      <h1>Bai 4</h1>
      <ColorPicker/>
      <hr />
      <h1>Bai 5</h1>
      <InputText/>
      <hr />
      <h1>Bai 6</h1>
      <InputRadio/>
      <hr />
      <h1>Bai 7, 8</h1>
      <TarkManager/>
    </div>
  );
}
