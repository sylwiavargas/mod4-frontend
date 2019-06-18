// here will be new message form

import React, { Component } from 'react';

class NewMessageForm extends Component {

  render() {
    let {formInput, postNewMessage} = this.props

    return (
      <div>
      <br />
      <form  style={{fontFamily:"Arial", fontSize:20}}onSubmit={(event) => {postNewMessage(event)}} className="reportform">
        Tell us how we can support you:
        <br />
        <input onChange={formInput} type="text" name="content"  placeholder="what do you want to learn?"  />
        <input  type="submit" value="> share your worry with us <" />
      </form>

      </div>
    );
  }

}

export default NewMessageForm;
