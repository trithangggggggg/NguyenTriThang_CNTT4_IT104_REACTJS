import React, { Component } from "react";
import Uncontroll from "./assets/components/Lythuyet/Uncontroll";
import Form from "./assets/components/PTIT_CNTT4_IT104_Session14_Bai05/Form";
import FormSubmit from "./assets/components/PTIT_CNTT4_IT104_Session14_Bai06/FormSubmit";
import Register from "./assets/components/PTIT_CNTT4_IT104_Session14_Bai07/Regiter";
import LoginForm from "./assets/components/PTIT_CNTT4_IT104_Session14_Bai08/LoginForm";
import TodoApp from "./assets/components/PTIT_CNTT4_IT104_Session14_Bai09/TodoApp";

type InitialState = {
  fullName: string;
};

export default class App extends Component<{}, InitialState> {
  /*
    LifeCycle: class component
    1. mount
    2. update
    3.unmount
  */

  constructor(props: {}) {
    super(props);
    this.state = {
      fullName: "tri thang",
    };
  }

  render() {
    return (
      <div>
        classs components
        <p>Ten sinh vien: {this.state.fullName}</p>
        <hr />
        <Form />
        <FormSubmit/>
        <Register/>
        <LoginForm/>
        <TodoApp/>
      </div>
    );
  }
}
