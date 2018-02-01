import React from 'react'
import { Link } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Photo = ({ post, i, comments }) => {
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

        <TransitionGroup>
          <CSSTransition
            classNames="like"
            timeout={{ enter: 500, exit: 500 }}
            >
            <span
              key={post.likes}
              className='likes-heart'>
                {post.likes}
              </span>
          </CSSTransition>

        </TransitionGroup>
      </div>
      <figcap>
        <p>{post.caption}</p>
        <div className="control-buttons">
          <button className="likes">&hearts; {post.likes}</button>
          <Link className="button" to={`/view/${post.code}`}>
            <span className="comment-count">
              <span className="speech-bubble"></span>
              {comments[post.code] ? comments[post.code].length : 0 }
            </span>
          </Link>
        </div>
      </figcap>
    </figure>
  )
}

export default Photo
