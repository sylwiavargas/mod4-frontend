import React, { Component } from 'react';
import CaseStudyCard from '../components/CaseStudyCard.js';
import CaseStudyCommentCard from '../components/CaseStudyCommentCard.js';
import CaseStudyButtonsContainer from './CaseStudyButtonsContainer.js';
import MoreCaseStudies from '../components/MoreCaseStudies.js';

class CaseStudyContainer extends Component {

  state = {
    allCaseStudies: [],
    chosenType: "all"
  }

  componentDidMount() {
    this.getCaseStudies()

  }
//should we put the fetch in the top app or maincontainer since both form and case studyuse the same fetch?
  getCaseStudies = () => {
    fetch("http://localhost:3000/api/v1/forms")
    .then(res=> res.json())
    .then(csData => {
      this.setState({
        allCaseStudies: csData
      })
    })

  }

  handleSelect = (event) => {
    event.preventDefault()
    this.setState({
      chosenType: event.target.value
    })
  }
  render() {
    // console.log(this.state, "State in case studies container")
    const typeOfThing = this.state.allCaseStudies.map(oneThing =>{
      return oneThing.type.name
    })
    const types = [...new Set([...typeOfThing])]

    console.log(this.state.chosenType, "STATE BABAY!")
    return(
    <div>
    <select  value="all" onChange={this.handleSelect}>
      <option value="all"> choose a topic youd like to see</option>
      {types.map(eachType=>{
        return <option value={eachType}>{eachType}</option>
      })}
    </select>
    {this.state.allCaseStudies.map(caseData =>{
      if (caseData.type.name === this.state.chosenType){
    return <CaseStudyCard caseData={caseData}/>
  }if(this.state.chosenType === "all"){
    return <CaseStudyCard caseData={caseData}/>
  }
    }
    )}
    <CaseStudyCommentCard/>
    <CaseStudyButtonsContainer/>
    <MoreCaseStudies/>
    </div>
  );
  }
}

export default CaseStudyContainer;
