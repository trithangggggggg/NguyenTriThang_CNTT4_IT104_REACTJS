import React, { Component } from "react";
import SubjectList from "./Components/PTIT_CNTT4_IT104_Session16_Bai01/SubjectList";
import LoginStatus from "./Components/PTIT_CNTT4_IT104_Session16_Bai02/LoginStatus";
import ButtonColor from "./Components/PTIT_CNTT4_IT104_Session16_Bai03/ButtonColor";
import ClickCounter from "./Components/PTIT_CNTT4_IT104_Session16_Bai04/ClickCounter";
import UserForm from "./Components/PTIT_CNTT4_IT104_Session16_Bai05/UserForm";
import ThemeSwitcher from "./Components/PTIT_CNTT4_IT104_Session16_Bai06/ThemeSwitcher";
import Main from "./Components/PTIT_CNTT4_IT104_Session16_Bai07_Ba08/Main";


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Bai 1</h1>
        <SubjectList />
        <hr />
        <h1>Bai 2</h1>
        <LoginStatus />
        <hr />
        <h1>Bai 3</h1>
        <ButtonColor />
        <hr />
        <h1>Bai 4</h1>
        <ClickCounter />
        <hr />
        <h1>Bai 5</h1>
        <UserForm />
        <hr />
        <h1>Bai 6</h1>
        <ThemeSwitcher/>
        <hr />
        <h1>Bai 7, 8</h1>
        <Main/>
        <hr />
      </div>
    );
  }
}
