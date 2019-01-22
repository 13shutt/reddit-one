import React from 'react';
import styled from 'styled-components'

import Post from '../../components/Post'

const StyledSection = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PostsList = (props) => {
  return (
    <StyledSection>
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
    </StyledSection>
  );
}
 
export default PostsList;