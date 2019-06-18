// here will be a single message printed
import React, { Component } from 'react';

class Message extends Component {

  render() {
    let {content} = this.props.message
      return (
        <div>
            <p>{content}</p>
        </div>
      )
  }

}

export default Message;
