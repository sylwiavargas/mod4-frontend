// here will be login / logout

import React, { Component } from 'react';
// import LoginForm from '../compontents/loginForm'

class LoginContainer extends Component {

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
    : <div> Hey, {userName}!
        <button
        onClick={()=>changeLogin()}>
        Log out!
        </button>
      </div>)
  }

}

export default LoginContainer;
