import React, { Component } from 'react';
import '../App.css';
import NavBarContainer from './NavBarContainer.js';
import MainContainer from './MainContainer.js';

class App extends Component {

  state = {
    logged: false,
    userName: "",
    caseStudies: false,
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

  createStyles = () => {
    let classNames = "thing "
    classNames += this.state.dark ? "dark" : "light"
    classNames += this.state.sizeUp ? " bigText" : " smallText"
    classNames += this.state.fontReadable ? " readableFont" : " fancyFont"
    return classNames
  }

  render() {
    // console.log(this.state)
    return (
      <div className={this.createStyles()}>

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
        <MainContainer
          logged={this.state.logged}
          caseStudies={this.state.caseStudies}
          userName={this.state.userName}/>

      </div>
    )
  }
}

export default App;

// import React, { Component } from 'react';
// import '../App.css';
// import NavBarContainer from './NavBarContainer.js';
// import MainContainer from './MainContainer.js';
//
// class App extends Component {
//
//   state = {
//     logged: false,
//     userName: "",
//     caseStudies: false,
//     dark: false,
//     sizeUp: false,
//     fontReadable: false,
//   }
//
//   changeLogin = () => {
//     return this.setState(prevState => {
//       return {logged: !prevState.logged}
//     })
//   }
//
//   changeSetting = (event) => {
//     const data = event.target.id
//     this.setState(prevState => {
//       return {
//         [data]: !prevState[data]
//       }
//     })
//   }
//
//   saveData = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }
//
//   createStyles = () => {
//     let classNames = "thing "
//     classNames += this.state.dark ? "dark" : "light"
//     classNames += this.state.sizeUp ? " bigText" : " smallText"
//     classNames += this.state.fontReadable ? " readableFont" : " fancyFont"
//     return classNames
//   }
//
//   render() {
//     // console.log(this.state)
//     return (
//       <div className={this.createStyles()}>
//
//         <NavBarContainer
//           logged={this.state.logged}
//           changeLogin={this.changeLogin}
//           saveData={this.saveData}
//           userName={this.state.userName}
//           caseStudies={this.state.caseStudies}
//           changeSetting={this.changeSetting}
//           dark={this.state.dark}
//           sizeUp={this.state.sizeUp}
//           fontReadable={this.state.fontReadable}/>
//         <MainContainer
//           logged={this.state.logged}
//           caseStudies={this.state.caseStudies}/>
//
//       </div>
//     )
//   }
// }
//
// export default App;
