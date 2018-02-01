import React from 'react'

class Comments extends React.Component {
  renderComment = (comment, i) => {
    const { postId } = this.props.match.params
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={() => this.props.removeComment(postId, i)}>
              &times;
            </button>
        </p>
      </div>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { postId } = this.props.match.params
    const author = this.author.value
    const comment = this.comment.value

    this.props.addComment(postId, author, comment)
    this.commentForm.reset()

  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form
          ref={(input) => { this.commentForm = input }}
          className="comment-form"
          onSubmit={this.handleSubmit}
          >
          <input type="text" ref={(input) => { this.author = input }} placeholder="author"/>
          <input type="text" ref={(input) => { this.comment = input }} placeholder="comment"/>
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }
}

export default Comments
