import React, { Component } from 'react';
import Comment from '../components/Comment.js'
import NewCommentForm from '../components/NewCommentForm.js'

const API = 'http://localhost:3000/api/v1/comments'

class CommentsContainer extends Component {

  state = {
    comments: this.props.comments,
    content: ""
  }

  postNewComment = (event) => {
    event.preventDefault()
    fetch(API, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: this.state.content,
        user_id: 1,
        message_id: this.props.messageid
      })
    })
    .then(res => res.json())
    .then(newComment => this.setState (prevState => {
      return {comments: [...prevState.comments, newComment]
    }}))
  }

  formInput = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  render() {
    let {comments} = this.props
    return (
      <div>{
        comments.map(comment =>
        {return <> <Comment comment={comment} key={comment.id}/>
        <NewCommentForm key={comment.id} commentid={comment.id} formInput={this.formInput} postNewComment={this.postNewComment}/>
        </>
      })}
      </div>
    )
  }

}

export default CommentsContainer;
