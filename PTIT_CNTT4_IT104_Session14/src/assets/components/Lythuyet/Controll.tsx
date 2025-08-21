// import React, { Component } from "react";


// InitialState={
//     name:""
// }


// export default class Controll extends Component <{}, InitialState> {
  

//    hanldeSubmit =(e:React.FormEvent<HTMLInputElement>)=>{
//         e.preventDefault();
//         console.log("gia tri khi nhap", this.state.user);
//         this.setState({
//             user:{
//                 email:"",
//                 password:""
//             }
//         })
//    };
//    hanldeChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
//         console.log("gia tri name: ", e.target.name);
//         const {name, value} = e.target;
//         this.setState({
//             user:{...this.state.user, [name]:value}
//         })
//    }; 



//   render() {
//     return (
//       <div>
//         form dung kii thuat controll
//         <form action="" onSubmit={this.handleSubmit}>
//           <label htmlFor="">Email</label>
//           <input type="text" />
//           <br />
//           <label htmlFor="">PassWord</label>
//           <input type="text" />
//           <br />
//           <button>Login</button>
//         </form>
//       </div>
//     );
//   }
// }
