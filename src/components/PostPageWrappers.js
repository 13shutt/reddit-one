import styled from 'styled-components'

const StyledDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 15vw 0 15vw;
  padding: 70px 15px;
  border-left: 1px solid rgba(0,0,0,0.4);
  border-right: 1px solid rgba(0,0,0,0.4);
  background: #eeeeee;
`

const StyledBody = styled.body`
  background: #2e2f30;
`

export { StyledBody, StyledDiv }