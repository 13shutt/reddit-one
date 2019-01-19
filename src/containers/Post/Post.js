import React from 'react'

import './Post.css'

const Post = (props) => (
  <div className="post-container">
    <div className="post">
      <div className="ups">
        {props.ups}
      </div>
      <div className="post-content">
        <div className="post-header">
          <h5>{props.subreddit}</h5>
          <p>Posted by <span>{props.author}</span></p>
        </div>
        <div className="post-title">
          <h2>{props.title}</h2> 
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