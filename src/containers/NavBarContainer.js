import React, { Component } from 'react';
import AccessibilityContainer from './AccessibilityContainer.js';
import LoginContainer from './LoginContainer.js';
import NavigationButtonsContainer from './NavigationButtonsContainer.js'

class NavBarContainer extends Component {

  render() {
    const {logged, changeLogin, saveData, userName, caseStudies, changePage} = this.props
    // console.log(this.props)

    return (
      <div>this is navbar here!
      <AccessibilityContainer />
      <LoginContainer
        logged={logged}
        changeLogin={changeLogin}
        saveData={saveData}
        userName={userName}
      />
      <NavigationButtonsContainer
        logged={logged}
        caseStudies={caseStudies}
        changePage={changePage}
      />
      </div>
    );

  }

}

export default NavBarContainer;
