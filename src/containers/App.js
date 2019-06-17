import React, { Component } from 'react';
import '../App.css';
import NavBarContainer from './NavBarContainer.js';
import MainContainer from './MainContainer.js';

class App extends Component {

  state = {
    logged: true
  }

  changeLogin = () => {
    return this.setState(prevState => {
      return {logged: !prevState}
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div>
      <NavBarContainer logged={this.state.logged} changeLogin={this.changeLogin}/>
      <MainContainer logged={this.state.logged}/>
      </div>
    )
  }
}

export default App;
