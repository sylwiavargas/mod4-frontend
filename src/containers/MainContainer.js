
import React, { Component } from 'react';
import ReportForm from '../components/ReportForm.js';
import CaseStudyContainer from './CaseStudyContainer.js';
import MessageBoardContainer from './MessageBoardContainer.js';
import AdminCaseStudyContainer from './AdminCaseStudyContainer.js';
import AdminMessageBoardContainer from './AdminMessageBoardContainer.js';

class MainContainer extends Component {

  render() {
    const {logged, caseStudies, userName} = this.props
    // console.log(this.props)
    return(
      !logged ?
      <ReportForm />
      :
        userName === "sylwia" ?
          caseStudies ?
          <CaseStudyContainer userName={userName}/>
          : <MessageBoardContainer userName={userName}/>
        : caseStudies ?
          <AdminCaseStudyContainer userName={userName}/>
          : <AdminMessageBoardContainer userName={userName}/>
    )
  }

}

export default MainContainer;
