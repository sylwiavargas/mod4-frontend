import React, { Component } from 'react';
import Message from '../components/Message.js'
import CommentsContainer from '../containers/CommentsContainer.js'

class MessageCard extends Component {

  render() {
    let {messages} = this.props

    return (
      <div>{
       messages.map(message =>
         {return <>
           <Message message={message} key={message.id}/>
           <CommentsContainer comments={message.comments} key={message.id} messageid={message.id}/>
          </>
          }
        )
      }</div>
    );
  }

}

export default MessageCard;
