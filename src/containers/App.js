import React, { Component } from 'react';
import '../App.css';
import NavBarContainer from './NavBarContainer.js';
import MainContainer from './MainContainer.js';
import ReportForm from '../components/ReportForm'


class App extends Component {

  render() {
    return (
      <div>
      <NavBarContainer/>
      <MainContainer/>
      </div>
    )
  }
}

export default App;
