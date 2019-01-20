import React from 'react'
import numeral from 'numeral'

import './Post.css'

const Post = (props) => (
  <div className="post-container">
    <div className="post">
      <div className="ups">
        <i className="fa fa-caret-up" aria-hidden="true"></i>
        <p>{numeral(props.ups).format('0a')}</p>
        <i className="fa fa-caret-down" aria-hidden="true"></i>
      </div>
      <div className="post-content">
        <div className="post-header">
          <h5 className="post-subreddit">{props.subreddit}</h5>
          <p className="post-info">- Posted by <span className="post-author">{props.author}</span></p>
        </div>
        <div className="post-title">
          <h2>{props.title}</h2> 
        </div>
        <div className="post-footer">
          <div className="post-commetns">
            <i className="fa fa-comments" aria-hidden="true"></i>
            <p>{numeral(props.num_comments).format('0a')}</p>
            <span>Comments</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)
 
export default Post;

//     {props.title}
//     {props.subreddit}
//     {props.author}
//     {props.subreddit_subscribers}
//     {props.ups}
//     {props.num_comments}