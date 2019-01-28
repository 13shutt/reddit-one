import React from 'react';
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

import Post from '../../components/Post'

const StyledSection = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 89vh;
`

const Posts = (props) => {
  return (
    <StyledDiv>
      {props.loading === true 
        ? <Loader type="Oval" color="orange" height={120} width={120} /> 
        :<StyledSection>
          {props.posts.map(item => (
            <Post 
              key={item.data.id}
              data={item.data}
            />
          ))}
        </StyledSection>}
    </StyledDiv>
  );
}
 
export default Posts;