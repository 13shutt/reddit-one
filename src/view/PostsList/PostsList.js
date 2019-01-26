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
          data={item.data}
        />
      ))}
    </StyledSection>
  );
}
 
export default PostsList;