import React, { Component } from 'react'

type State = {
    count:number,
}


export default class ClickCounter extends Component <{}, State>{

    constructor(props:{}){
        super(props);
        this.state = {
            count:0,
        }
    }


    handleClick = ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
  render() {
    return (
      <div className='bai4'>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}
