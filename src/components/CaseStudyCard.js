import React, { Component } from 'react';

class CaseStudyCard extends Component {

  state = {
    clicked: false
  }

  render() {
    // console.log(this.props.caseData, "in case card")
    return(

    <div className="casecard">
    <h4>{this.props.caseData.description}</h4>


    made them feel {this.props.caseData.what_made_you_feel}
    and feels {this.props.caseData.how_do_you_want_resolved}
    <br/>
    questions
    <br/>
    {this.props.caseData.queston}
    <br/>
    <strong> how about a professional opion </strong>
    <br/>
    {this.props.caseData.comment}
  <br/>
  <strong> read more:</strong>
  <br/>
  {this.props.caseData.resources}

    <br/>
    </div>
  );
  }
}

export default CaseStudyCard;
