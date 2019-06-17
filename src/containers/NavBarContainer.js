import React, { Component } from 'react';
import AccessibilityContainer from './AccessibilityContainer.js';
import LoginContainer from './LoginContainer.js';
import NavigationButtonsContainer from './NavigationButtonsContainer.js'

class NavBarContainer extends Component {

  render() {
    return (
      <div>this is navbar here!
      <AccessibilityContainer />
      <LoginContainer />
      <NavigationButtonsContainer />
      </div>
    );
  }

}

export default NavBarContainer;
