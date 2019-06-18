// here will be two buttons: Case Studies and Message Board

import React, { Component } from 'react';

class NavigationButtonsContainer extends Component {

  render() {
    const {logged, caseStudies, changeSetting} = this.props
    // console.log(logged)

    return (logged ?
        caseStudies ?
        <button id="caseStudies" onClick={changeSetting}> See Message Board  </button>
        : <button id="caseStudies" onClick={changeSetting}> See Case Studies</button>
    : null)
  }

}

export default NavigationButtonsContainer;
