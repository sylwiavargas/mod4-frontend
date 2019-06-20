import React, { Component } from 'react';
import Message from '../components/Message.js'
import CommentsContainer from '../containers/CommentsContainer.js'

class MessageCard extends Component {

  render() {
    let {messages} = this.props
    return (
      <div className="messagecard">
      {
       messages.map(message =>
         {if (message) {
           return <div className="messagecontain" >      <br/>
           <div className="justmessage"><Message message={message}/></div>
           <CommentsContainer comments={message.comments} messageid={message.id}/>
           <br/>
          </div>
         } else {
           return null
         }}
        )
      }</div>
    );
  }

}

export default MessageCard;
