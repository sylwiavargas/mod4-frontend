import React, { Component } from 'react';
import Message from '../components/Message.js'
import CommentsContainer from '../containers/CommentsContainer.js'

class MessageCard extends Component {

  render() {
    let {messages} = this.props
    return (
      <div>
      {
       messages.map(message =>
         {if (message) {
           return <>      <br/> **************** HERE IS A MESSAGE ****************
           <Message message={message}/>
           <CommentsContainer comments={message.comments} messageid={message.id}/>
          </>
         } else {
           return null
         }}
        )
      }</div>
    );
  }

}

export default MessageCard;
