import React, { Component } from 'react';
import '../App.css';
import NavBarContainer from './NavBarContainer.js';
import MainContainer from './MainContainer.js';

class App extends Component {

  state = {
    logged: false,
    userName: "",
    caseStudies: true,
    dark: false,
    sizeUp: false,
    fontReadable: false,
  }

  changeLogin = () => {
    return this.setState(prevState => {
      return {logged: !prevState.logged}
    })
  }

  changeSetting = (event) => {
    const data = event.target.id
    this.setState(prevState => {
      return {
        [data]: !prevState[data]
      }
    })
  }

  saveData = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
      <NavBarContainer
        logged={this.state.logged}
        changeLogin={this.changeLogin}
        saveData={this.saveData}
        userName={this.state.userName}
        caseStudies={this.state.caseStudies}
        changeSetting={this.changeSetting}
        dark={this.state.dark}
        sizeUp={this.state.sizeUp}
        fontReadable={this.state.fontReadable}/>
      <MainContainer logged={this.state.logged}/>
      </div>
    )
  }
}

export default App;
