import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  align-items: center;
  position: relative;
  color: #aaa;
  font-size: 16px;
  span {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  form input {
    width: 400px;
    height: 32px;
    background: #fcfcfc;
    border: 1px solid #aaa;
    border-radius: 5px;
    text-indent: 32px;
  }
`


const Input = ({ placeholder }) => (
  <StyledDiv>
    <span className="fa fa-search"></span>
    <form>
      <input type="text" placeholder={placeholder}/>
    </form>
  </StyledDiv>
)

export default Input