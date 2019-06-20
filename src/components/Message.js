// here will be a single message printed
import React, { Component } from 'react';

class Message extends Component {

  render() {
    let {content, id} = this.props.message
    const user = "sylwia"

    return (
      this.props.userName === user ?
          <div className="usermessage">
              <p>{content}</p>
          </div>
      :
        <div className="admin" className="usermessage">
            <p>{content}</p>
            <button className="caseclosed" className="admin" onClick={(event) => {this.props.deleteMessage(event, id)}}> case closed </button>
        </div>
    )
  }

}

export default Message;





// import React, { Component } from 'react';
//
// class Message extends Component {
//
//   render() {
//     let {content} = this.props.message
//       return (
//         <div className="usermessage">
//             <p>{content}</p>
//         </div>
//       )
//   }
//
// }
//
// export default Message;
