// here will be printed all comments to a given message
import React, { Component } from 'react';

class Comment extends Component {

  render() {
    let {content} = this.props.comment
      return (
        <div>
            <p>{content}</p>
        </div>
      )
  }

}

export default Comment;
