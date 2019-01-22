import styled from 'styled-components'

const PostsMain = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: ${props => props.loading ? "89vh" : "auto"};
`

export default PostsMain