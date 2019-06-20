


import React from 'react';

class LoginForm extends React.Component {

  render(){
    // console.log(this.props)
    const {saveData, logged, loginUser} = this.props
    // console.log(saveUserName, logged, loginUser)
    if (logged === false) {
      return (
        <>
        <form className="login-form" onSubmit={() => loginUser()}>
        <input placeholder="Enter a username..." name="userName" onChange={(event) => saveUserName(event)}/>
         <label htmlFor="email">Password</label>
         <input
           name="password"
           type="password"
           placeholder="Enter your password"
         />
         <button type="submit" onClick={() => loginUser()} >
           Login
         </button>
       </form>
       </>
      )
    } else {
      return null
    }
  }
}

export default LoginForm;




// import React from 'react';
//
// class LoginForm extends React.Component {
//
//   render(){
//     // console.log(this.props)
//     const {saveData, logged, loginUser} = this.props
//     // console.log(saveUserName, logged, loginUser)
//     if (logged === false) {
//       return (
//         <div className="login">
//           <form className="login-form">
//             <input placeholder="Enter a username..." name="userName" onChange={(event) => saveUserName(event)}/>
//             <input type="submit" value="Log In" onClick={() => loginUser()}/>
//           </form>
//         </div>
//       )
//     } else {
//       return null
//     }
//   }
// }
//
// export default LoginForm;
