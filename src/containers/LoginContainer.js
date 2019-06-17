// here will be login / logout

import React, { Component } from 'react';
// import LoginForm from '../compontents/loginForm'

class LoginContainer extends Component {

  capitalaizeName = () => {
    let name = this.props.userName
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  render() {
    const {logged, changeLogin, saveData, userName} = this.props
    // console.log(logged, changeLogin)

    return (!logged ?
          <div className="login">
            <form className="login-form">
              <input
              placeholder="Enter a username..."
              name="userName"
              onChange={(event) => saveData(event)}/>
              <input
              type="submit"
              value="Log In"
              onClick={() => changeLogin()}
              />
            </form>
          </div>
    : <div> Hey, {this.capitalaizeName()}!
        <button
        onClick={()=>changeLogin()}>
        Log out!
        </button>
      </div>)
  }

}

export default LoginContainer;
