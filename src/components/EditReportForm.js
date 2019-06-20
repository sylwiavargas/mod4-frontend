import React, { Component } from 'react';

class EditReportForm extends Component {

  state = {
    description: this.props.caseData.description,
    what_made_you_feel: this.props.caseData.what_made_you_feel,
    what_you_wish_done: this.props.caseData.how_do_you_want_resolved,
    how_do_you_want_resolved: this.props.caseData.questions,
    comment: this.props.caseData.comment,
    questions: this.props.caseData.questions,
    resources: this.props.caseData.resources,
  }

  formInput = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  submitEvent = event => {
    event.preventDefault()
  this.setState({
      description: "",
      what_made_you_feel: "",
      what_you_wish_done: "",
      how_do_you_want_resolved: "",
      your_name: "",
      persons_name: "",
      your_email: "",
      comment: "",
      questions: "",
      resources: "",
      id: null})
  this.clickEdit()
  this.props.editCaseStudy(this.props.caseData.id, this.state)
}

  clickEdit = (event) => {
    this.props.clickEdit(this.props.caseData)}


  render() {
    console.log(this.props.caseData.id, this.state)
    const { caseData } = this.props
    // console.log(this.state, "state in ReportForm")
    return (
    caseData ?
      <div className="edit-form">
        <br />  <br />  <br />  <br />  <br />
      <form  style={{fontFamily:"Helvetica", fontSize:20}}onSubmit= {this.submitEvent} className="editform">
        Case Study description:
        <br />
        <input onChange={this.formInput} type="text" name="description"  value={this.state.description} />
        <br />
        <br />
        How this made them feel and why:
        <br />
        <input onChange={this.formInput} type="text" name="what_made_you_feel" value={this.state.what_made_you_feel}/>
        <br />
        <br />
         Is there anything they wish they had done differently?
        <br />
        <input onChange={this.formInput} type="text" name="what_you_wish_done" value={this.state.what_you_wish_done}  />
        <br />
        <br />
        What would they like to see done to resolve this?
        <br />
        <input onChange={this.formInput} type="text" value={this.state.how_do_you_want_resolved}/>
        <br />
        <br />
        Specialist's comment:
        <input onChange={this.formInput} type="text" name="comment"  alue={this.state.comment}/>
        <br />
        <br />
        How you could approach it
        <input onChange={this.formInput} type="text" name="questions"  value={this.state.questions} />
        <br />
        <br />
        Suggested resources:
        <input onChange={this.formInput} type="text" name="resources"  value={this.state.resources} />
            <button onClick={this.props.clickEdit}> Cancel </button>
        <input  type="submit" value="Submit" />

      </form>
      </div>
    :
      null
  )}
}
export default EditReportForm;
