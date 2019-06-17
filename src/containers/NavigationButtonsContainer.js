// here will be two buttons: Case Studies and Message Board

import React, { Component } from 'react';

class NavigationButtonsContainer extends Component {

  render() {
    const {logged, caseStudies, changePage} = this.props
    // console.log(logged)

    return (logged ?
        caseStudies ?
        <button onClick={()=>{changePage()}}> See Case Studies </button>
        : <button onClick={()=>{changePage()}}> See Message Board</button>
    : null)
  }

}

export default NavigationButtonsContainer;
