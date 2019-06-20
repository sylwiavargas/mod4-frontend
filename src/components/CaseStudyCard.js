import React, { Component } from 'react';
import EditReportForm from './EditReportForm.js'

class CaseStudyCard extends Component {

  state = {
    clicked: false,
    editing: false
  }

  clickEdit = event => this.setState({ editing: !this.state.editing })

  render() {
    const user = "sylwia"
    let {description, what_made_you_feel, how_do_you_want_resolved, questions, comment, resources, id} = this.props.caseData

    return(
      this.state.editing
        ? <EditReportForm
            caseData={this.props.caseData}
            clickEdit={this.clickEdit}
            editCaseStudy={this.props.editCaseStudy}
          />
        : <div className="casecard">
        <p className="questionstwo"> Case Description</p>
        <h4>{description}</h4>
        <p className="questionstwo"> How the situation affected the person</p>
        made them feel {what_made_you_feel}
        and feels {how_do_you_want_resolved}
        <br/>
      <p className="questionstwo"> How you could approach it</p>
        <br/>
        {questions}
        <br/>
        <br />
        <p className="questionstwo"> Specialist’s comment </p>
        <br/>

        {comment}
        <br/>
        <br/>
        <p className="questionstwo"> Read more on the subject:</p>
        <br/>
        {resources}
        <br/>
        <br/>

        {this.props.userName === user ?
          null
        :
        <>
          <button  className="editbut"className="admin" onClick={(event) => {this.clickEdit(event)}}> Edit Case Study </button>
          <button className="editbut" className="admin" onClick={(event) => {this.props.deleteCaseStudy(event, id)}}> Delete Case Study </button>
        </>
        }
        </div>

  );
  }
}

export default CaseStudyCard;
//
// import React, { Component } from 'react';
//
// class CaseStudyCard extends Component {
//
//   state = {
//     clicked: false
//   }
//
//   render() {
//     // console.log(this.props.caseData, "in case card")
//     return(
//
//     <div className="casecard">
//     <h4>{this.props.caseData.description}</h4>
//     made them feel {this.props.caseData.what_made_you_feel}
//     and feels {this.props.caseData.how_do_you_want_resolved}
//     <br/>
//     questions
//     <br/>
//     {this.props.caseData.queston}
//     <br/>
//     <strong> how about a professional opion </strong>
//     <br/>
//     {this.props.caseData.comment}
//   <br/>
//   <strong> read more:</strong> {this.props.caseData.resources}
//
//
//
//     <br/>
//     </div>
//   );
//   }
// }
//
// export default CaseStudyCard;
