// here will be MessageBoardContainer

import React, { Component } from 'react';
import NewMessageForm from '../components/NewMessageForm.js'
import MessageCard from './MessageCard.js'

const API = 'http://localhost:3000/api/v1/messages'

class MessageBoardContainer extends Component {

  state = {
    content: "",
    messages: []
  }

  fetchMessages = () => {
    return fetch(API)
    .then(res => res.json())
    .then(messages =>
    this.setState({
      messages: messages
    }))
  }

  componentDidMount() {
    this.fetchMessages()
  }

  postNewMessage = (event) => {
    event.preventDefault()
    fetch(API, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: this.state.content,
        user_id: 1
      })
    })
    .then(res => res.json())
    .then(newMessage => this.setState ({
      messages: [...this.state.messages, newMessage]
    }))
  }

  formInput = (event) => {
    // console.log(event.target.value)
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  render() {
    // console.log(this.state.messages)
    return (
      <div><br/>Message Board here <br/>
      <NewMessageForm formInput={this.formInput} postNewMessage={this.postNewMessage}/>
      <br />
      <MessageCard messages={this.state.messages}/>
      </div>
    );
  }

}

export default MessageBoardContainer;
