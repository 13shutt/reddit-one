import React from 'react';

import './PostsList.css'

import Post from '../../components/Post'

const PostsList = (props) => {
  return (
    <section className="posts-section">
      {props.posts.map(item => (
        <Post 
          key={item.data.id}
          subreddit={item.data.subreddit_name_prefixed}
          subreddit_subscribers={item.data.subreddit_subscribers}
          author={item.data.author}
          title={item.data.title}
          is_video={item.data.is_video}
          media={item.data.media}
          ups={item.data.ups}
          num_comments={item.data.num_comments}
        />
      ))}
    </section>
  );
}
 
export default PostsList;