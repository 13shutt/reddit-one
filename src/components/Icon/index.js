import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  cursor: pointer;
  i {
    padding: 8px;
    border-radius: 3px;
    ::hover {
      background-color: #dddcdc;
    }
  } 
`

const Icon = ({classname}) => (
  <StyledDiv>
    <i className={`fa ${classname}`} aria-hidden="true"></i>   
  </StyledDiv>
)

export default Icon