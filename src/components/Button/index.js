import styled from 'styled-components'

export const Button = styled.button`
  background: ${props => props.primary ? "#504b4c" : "#fff"};
  color: ${props => props.primary ? "#fff" : "#504b4c"};

  width: 130px;
  height: 35px;
  backface-visibility: hidden;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  border-radius: 5px;
  border-width: 2px 2px 2px 2px;
  font-size: initial;
  font-family: Helvetica Neue;
  font-weight: 500;
  font-style: normal;
  word-spacing: 4px;
  border: 2px solid #353031;
`