// here will be a new comment form
import React, { Component } from 'react';

class NewCommentForm extends Component {

  render() {
    let {formInput, postNewComment, commentid} = this.props

    return (
      <div>
      <br />
      <form  style={{fontFamily:"Arial", fontSize:10}}onSubmit={(event) => {postNewComment(event)}} className="reportform">
        Do you have any tips to offer here?
        <br />
        <input onChange={formInput} type="text" name="content"  placeholder="do you have any tips?"  />
        <input  type="submit" value="Submit" />
      </form>

      </div>
    );
  }

}

export default NewCommentForm;
