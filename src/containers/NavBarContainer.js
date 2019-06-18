import React, { Component } from 'react';
import AccessibilityContainer from './AccessibilityContainer.js';
import LoginContainer from './LoginContainer.js';
import NavigationButtonsContainer from './NavigationButtonsContainer.js'

class NavBarContainer extends Component {

  render() {
    const {logged, changeLogin, saveData, userName, caseStudies, changeSetting, dark, sizeUp, fontReadable} = this.props
    // console.log(this.props)

    return (

      <div>
      <AccessibilityContainer
        dark={dark}
        sizeUp={sizeUp}
        fontReadable={fontReadable}
        changeSetting={changeSetting}
      /><br/>
      <LoginContainer
        logged={logged}
        changeLogin={changeLogin}
        saveData={saveData}
        userName={userName}
      /><br/>
      <NavigationButtonsContainer
        logged={logged}
        caseStudies={caseStudies}
        changeSetting={changeSetting}
      />
      </div>

    );

  }

}

export default NavBarContainer;
