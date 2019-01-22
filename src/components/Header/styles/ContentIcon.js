import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  align-items: center;
  width: 165px;
  i {
    font-size: 20px;
    color: blue;
    margin-right: 6px;
  }
`

const ContentIcon = ({ classname, postType }) => (
  <StyledDiv>
    <i className={`fa ${classname}`} aria-hidden="true"></i>
    <p>{postType}</p>
  </StyledDiv>
)

export default ContentIcon