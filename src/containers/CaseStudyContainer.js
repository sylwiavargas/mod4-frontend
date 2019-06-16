import React from 'react';
import CaseStudyCard from '../components/CaseStudyCard.js';
import CaseStudyCommentCard from '../components/CaseStudyCommentCard.js';
import CaseStudyButtonsContainer from './CaseStudyButtonsContainer.js';
import MoreCaseStudies from '../components/MoreCaseStudies.js';

function App() {
  return (
    <div>
    <CaseStudyCard/>
    <CaseStudyCommentCard/>
    <CaseStudyButtonsContainer/>
    <MoreCaseStudies/>
    </div>
  );
}

export default App;
