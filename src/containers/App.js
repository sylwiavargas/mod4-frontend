import React, { Component } from 'react';
import '../App.css';
import NavBarContainer from './NavBarContainer.js';
import MainContainer from './MainContainer.js';

class App extends Component {

  state = {
    logged: false,
    userName: "",
    caseStudies: true,
  }

  changeLogin = () => {
    return this.setState(prevState => {
      return {logged: !prevState.logged}
    })
  }

  changePage = () => {
    return this.setState(prevState => {
      return {caseStudies: !prevState.caseStudies}
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
        changePage={this.changePage}/>
      <MainContainer logged={this.state.logged}/>
      </div>
    )
  }
}

export default App;
