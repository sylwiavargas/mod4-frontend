import React, { Component } from 'react';
import ReportForm from '../components/ReportForm.js';
import CaseStudyContainer from './CaseStudyContainer.js';
import MessageBoardContainer from './MessageBoardContainer.js';


class MainContainer extends Component {

  render() {
    const {logged, userName, caseStudies} = this.props
    // console.log(this.props)
    return(
      !logged ?
      <ReportForm />
      :
        caseStudies ?
        <CaseStudyContainer />
        : <MessageBoardContainer />
    )
  }

}

export default MainContainer;
