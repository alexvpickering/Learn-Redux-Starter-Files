import React from 'react'
import { Link } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const LikeHeart = ({children, ...props}) => (
  <CSSTransition
    {...props}
    timeout={500}
    classNames="like"
    >
      {children}
    </CSSTransition>
  )


  class Photo extends React.Component {
    constructor() {
      super()
      this.state = {show: false}
    }

    handleClick = (i) => {
      this.props.increment(i)
      this.setState({show: true})
    }

    resetIn = () => {
      this.setState({show: false})
    }




    render() {
      const { post, i, comments } = this.props
      return (
        <figure className="grid-figure">
          <div className="grid-photo-wrap">
            <Link to={`/view/${post.code}`}>
            <img
              src={post.display_src}
              alt={post.caption}
              className='grid-photo'
            />
          </Link>

          <LikeHeart in={this.state.show} onEntered={this.resetIn}>
              <span className="likes-heart" key={post.likes}>
                {post.likes}
              </span>
            </LikeHeart>

        </div>
        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button onClick={() => this.handleClick(i)} className="likes">&hearts; {post.likes}</button>
            <Link className="button" to={`/view/${post.code}`}>
            <span className="comment-count">
              <span className="speech-bubble"></span>
              {comments[post.code] ? comments[post.code].length : 0 }
            </span>
          </Link>
        </div>
      </figcaption>
    </figure>
  )
}
}

export default Photo
