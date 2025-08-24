import React, { Component } from 'react'

type State = {
    progress:string;
    progressed:string;
};



export default class FornRange extends Component <{}, State> {

    constructor (props: {}){
        super(props);
        this.state = {
            progress: "0",
            progressed: "",
        };
    }

    handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState ({
            progress: e.target.value,
        });
    };

    handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        this.setState({
            progressed: this.state.progress
        });
    }
  render() {

    return (
      <div>
            <form onSubmit={this.handleSubmit}>
                <h1>Bai 4</h1>
                <label htmlFor="">Tiến độ hoàn thành: 
                    <b>{this.state.progressed ? this.state.progressed : 0}% </b></label><br />
                <input type="range" 
                min="0"
                max="100"
                value={this.state.progress}
                onChange={this.handleChange} />
                <button type='submit'>Submit</button>
            </form>
            <hr />
      </div>
    )
  }
}
