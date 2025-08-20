import React, { Component } from 'react'


type StateTheme = {
    theme: "light" | "dark",
    language: "vietnamese" | "english",
};






export default class ThemeApp extends Component <{}, StateTheme>{
    constructor(props: {}){
        super(props);
        this.state = {
            theme: "light",
            language: "english"
        }
    }
    editTheme = ()=>{
        this.setState({
            theme: this.state.theme === "light"? "dark": "light"
        })
    }
    editLanguage = ()=>{
        this.setState({
            language: this.state.language === "english"? "vietnamese":"english"
        })
    }
  render() {
    let {theme, language} = this.state  ;
    let nen = theme === "light" ? "Sáng" : "Tối";
    let ngonngu = language === "english" ? "English" : "Tiếng Việt";
    return (
      <div style={{backgroundColor: theme === "light" ? "white": "black",color: theme === "light" ? "black" : "white", padding: "50px", width: "300px"}}>
        <h4>Nền: {nen}</h4>
        <h4>Ngôn ngữ: {ngonngu}</h4>
        <button onClick={this.editTheme}>Đổi Nền </button>
        <button onClick={this.editLanguage}>Đổi Ngôn Ngữ </button>
      </div>
    )
  }
}
