import React, { Component } from 'react';
import CaseStudyCard from '../components/CaseStudyCard.js';
import CaseStudyCommentCard from '../components/CaseStudyCommentCard.js';
import CaseStudyButtonsContainer from './CaseStudyButtonsContainer.js';
import MoreCaseStudies from '../components/MoreCaseStudies.js';

const API = 'https://here-backend.herokuapp.com/api/v1/forms'

class AdminCaseStudyContainer extends Component {

  state = {
    allCaseStudies: [],
    chosenType: "all"
  }

  componentDidMount() {
    this.getCaseStudies()

  }
//should we put the fetch in the top app or maincontainer since both form and case studyuse the same fetch?
  getCaseStudies = () => {
    fetch("https://here-backend.herokuapp.com/api/v1/forms")
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


    deleteCaseStudyFromState = (id) => {
      let index = id-1
      let array = [...this.state.allCaseStudies]
      if (index !== -1) {
        array.splice(index, 1);
        return this.setState({allCaseStudies: array});
      }
    }

    deleteCaseStudyFromDatabase = (id) => {
      fetch(API + `/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: id})
      })
      .then(res => res.text())
    }

    deleteCaseStudy = (event, id) => {
      this.deleteCaseStudyFromState(id)
      this.deleteCaseStudyFromDatabase(id)
    }

    editCaseStudy = (id, updatedCaseStudy) => {
      fetch(API + `/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(updatedCaseStudy)
      })
      .then(res => res.json())
    }

  render() {
    const typeOfThing = this.state.allCaseStudies.map(oneThing =>{
      return oneThing.type.name})
    const types = [...new Set([...typeOfThing])]

    return(
      <div><br/><br/>
      <select  value="all" onChange={this.handleSelect}>
      <option value="all"> choose a topic youd like to see</option>
        {types.map(eachType=>{
          return <option value={eachType}>{eachType}</option>
        })}
      </select>
      <div className="casestudycards">
      {this.state.allCaseStudies.map(caseData =>{
        if (caseData.type.name === this.state.chosenType){
          return <CaseStudyCard caseData={caseData} userName={this.props.userName} deleteCaseStudy={this.deleteCaseStudy} editCaseStudy={this.editCaseStudy}/>
        }if(this.state.chosenType === "all"){
          return <CaseStudyCard caseData={caseData} userName={this.props.userName} deleteCaseStudy={this.deleteCaseStudy} editCaseStudy={this.editCaseStudy}/>
        }
      }
      )}
    </div>
      </div>
    );
  }
}

export default AdminCaseStudyContainer;

// import React, { Component } from 'react';
// import CaseStudyCard from '../components/CaseStudyCard.js';
// import CaseStudyCommentCard from '../components/CaseStudyCommentCard.js';
// import CaseStudyButtonsContainer from './CaseStudyButtonsContainer.js';
// import MoreCaseStudies from '../components/MoreCaseStudies.js';
//
// const API = 'https://here-backend.herokuapp.com/api/v1/forms'
//
// class AdminCaseStudyContainer extends Component {
//
//   state = {
//     allCaseStudies: [],
//     chosenType: "all"
//   }
//
//   componentDidMount() {
//     this.getCaseStudies()
//
//   }
// //should we put the fetch in the top app or maincontainer since both form and case studyuse the same fetch?
//   getCaseStudies = () => {
//     fetch("https://here-backend.herokuapp.com/api/v1/forms")
//     .then(res=> res.json())
//     .then(csData => {
//       this.setState({
//         allCaseStudies: csData
//       })
//     })
//
//   }
//
//   handleSelect = (event) => {
//     event.preventDefault()
//     this.setState({
//       chosenType: event.target.value
//     })
//   }
//
//
//     deleteCaseStudyFromState = (id) => {
//       let index = id-1
//       let array = [...this.state.allCaseStudies]
//       if (index !== -1) {
//         array.splice(index, 1);
//         return this.setState({allCaseStudies: array});
//       }
//     }
//
//     deleteCaseStudyFromDatabase = (id) => {
//       fetch(API + `/${id}`, {
//         method: 'DELETE',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({id: id})
//       })
//       .then(res => res.text())
//     }
//
//     deleteCaseStudy = (event, id) => {
//       this.deleteCaseStudyFromState(id)
//       this.deleteCaseStudyFromDatabase(id)
//     }
//
//     editCaseStudy = (id, updatedCaseStudy) => {
//       fetch(API + `/${id}`, {
//         method: "PATCH",
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify(updatedCaseStudy)
//       })
//       .then(res => res.json())
//     }
//
//   render() {
//     const typeOfThing = this.state.allCaseStudies.map(oneThing =>{
//       return oneThing.type.name})
//     const types = [...new Set([...typeOfThing])]
//
//     return(
//       <div><br/><br/>
//       filter:<br/>
//       <select  value="all" onChange={this.handleSelect}>
//       <option value="all"> choose a topic youd like to see</option>
//         {types.map(eachType=>{
//           return <option value={eachType}>{eachType}</option>
//         })}
//       </select>
// <div className="casestudycards">
//       {this.state.allCaseStudies.map(caseData =>{
//         if (caseData.type.name === this.state.chosenType){
//           return <CaseStudyCard caseData={caseData} userName={this.props.userName} deleteCaseStudy={this.deleteCaseStudy} editCaseStudy={this.editCaseStudy}/>
//         }if(this.state.chosenType === "all"){
//           return <CaseStudyCard caseData={caseData} userName={this.props.userName} deleteCaseStudy={this.deleteCaseStudy} editCaseStudy={this.editCaseStudy}/>
//         }
//       }
//       )}
//         </div>
//       </div>
//     );
//   }
// }
//
// export default AdminCaseStudyContainer;
