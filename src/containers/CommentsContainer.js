import React, { Component } from 'react';
import Comment from '../components/Comment.js'
import NewCommentForm from '../components/NewCommentForm.js'

const API = 'http://localhost:3000/api/v1/comments'

class CommentsContainer extends Component {

  state = {
    comments: this.props.comments,
    content: ""
  }

  postNewComment = (event, messageid) => {
    event.preventDefault()
    fetch(API, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment: {
        content: this.state.content,
        user_id: 1,
        message_id: messageid
      }})
    })
    .then(res => res.json())
    .then(newComment => this.setState ({
      comments: [newComment, ...this.state.comments]
    }))
  }

  formInput = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }


  render() {
    let {messageid} = this.props
    return (
      <div >
          responses below
        <div className="usercomments">
        {
        this.state.comments.map(comment =>
        {return <>
          <Comment comment={comment} key={comment.id}/>
        </>
        })}
        </div>
        <NewCommentForm formInput={this.formInput} postNewComment={this.postNewComment} messageid={messageid}/>
      </div>
    )
  }

}

export default CommentsContainer;
