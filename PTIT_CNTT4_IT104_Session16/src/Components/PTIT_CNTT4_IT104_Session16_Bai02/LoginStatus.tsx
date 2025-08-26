import React, { Component } from 'react'

type Login = {
    isLonggined:boolean,
}

export default class LoginStatus extends Component <{}, Login> {
    constructor(props:[]){
        super(props);
        this.state = {
            isLonggined:false,  
        }
    }
    handleInOut = ()=>{
        this.setState({
            isLonggined: !this.state.isLonggined
        })
    }

  render() {
    return (
      <div className='bai2'>
            < >
                <h3>{this.state.isLonggined ? "Xin chào, User"!: "Vui lòng đăng nhập để tiếp tục."}</h3>
                <button onClick={this.handleInOut}>{this.state.isLonggined ? "Đăng xuất" : "Đâng nhập"}</button>
            </>
      </div>
    )
  }
}
