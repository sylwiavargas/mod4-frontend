import React, { Component } from 'react';
import CaseStudyCard from '../components/CaseStudyCard.js';
import CaseStudyCommentCard from '../components/CaseStudyCommentCard.js';
import CaseStudyButtonsContainer from './CaseStudyButtonsContainer.js';
import MoreCaseStudies from '../components/MoreCaseStudies.js';

class CaseStudyContainer extends Component {

  render() {
    return(
    <div>
    case study here
    <CaseStudyCard/>
    <CaseStudyCommentCard/>
    <CaseStudyButtonsContainer/>
    <MoreCaseStudies/>
    </div>
  );
  }
}

export default CaseStudyContainer;
