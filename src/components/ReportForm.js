import React, { Component } from 'react';

class ReportForm extends Component {

  state = {
    description: "description",
    what_made_you_feel: "bad",
    what_you_wish_done: "more",
    how_do_you_want_resolved: "resolve",
    your_name: "anon",
    persons_name: "anon persons",
    your_email:"email here"
  }

  postNewForm = (event) => {
    event.preventDefault()
    event.target.reset()
    fetch("https://here-backend.herokuapp.com/api/v1/forms",{
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
    description: this.state.description,
    what_made_you_feel: this.state.what_made_you_feel,
    what_you_wish_done: this.state.what_you_wish_done,
    how_do_you_want_resolved: this.state.how_do_you_want_resolved,
    your_name: this.state.your_name,
    persons_name: this.state.persons_name,
    your_email: this.state.your_email,
    type_id: 1,
    // comment: "",
    // questions: "",
    // resources: "",
    // publish: ""
      })
    }).then(res => res.json())
  }

  formInput = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]:event.target.value
    })
  }


  render() {
    // console.log(this.state, "state in ReportForm")
    return (
      <div className="report-form">
      <form  onSubmit={(event) => {this.postNewForm(event)}} className="reportform">
        <h3 className="questions"> Please describe the event: </h3>

        <input onChange={this.formInput} type="text" name="description"  placeholder="describe the event"  />
        <br />

        <h3 className="questions">   Describe how this made you feel and why: </h3>

        <input onChange={this.formInput} type="text" name="what_made_you_feel" placeholder="description of the issue at hand" placeholder="how did this make you feel?" />
        <br />

          <h3 className="questions">Is there anything you wish you had done differently?</h3>


        <input onChange={this.formInput} type="text" name="what_you_wish_done" placeholder="How could have this gone better?"  />
        <br />

        <h3 className="questions"> What would you like to see done to resolve this?</h3>

        <input onChange={this.formInput} type="text" name="how_do_you_want_resolved" placeholder="How can this be resolved"  />
        <br />

          <h3 className="questions">Your name (optional):</h3>

        <input onChange={this.formInput} type="text" name="your_name" placeholder="YOUR NAME (optional)"  />
        <br />
        <br />
          <h3 className="questions">The name of the other person involved (optional):</h3>

        <input onChange={this.formInput} type="text" name="persons_name" placeholder="name of other person(optional)"  />

        <br />

          <h3 className="questions">Your email (optional):</h3>

        <input onChange={this.formInput} type="text" placeholder="E-MAIL (optional)"  />
        <input  type="submit" value="Submit" />
      </form>
      </div>
    );
  }

}

export default ReportForm;// here will be main form
