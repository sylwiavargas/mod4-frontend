import React, { Component } from 'react';
import '../App.css';
import NavBarContainer from './NavBarContainer.js';
import MainContainer from './MainContainer.js';

class App extends Component {

  state = {
    logged: true
  }

  render() {
    // console.log(this.state)
    return (
      <div>
      <NavBarContainer logged={this.state.logged}/>
      <MainContainer/>
      </div>
    )
  }
}

export default App;
