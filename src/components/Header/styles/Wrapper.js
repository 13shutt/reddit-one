import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  //header
  padding: ${props => props.header ? "5px 10px" : null};
  border-bottom: ${props => props.header ? "1px solid rgba(0,0,0,0.2)" : null};

  //icons
  width: ${props => props.icons ? "120px" : null};
  font-size: ${props => props.icons ? "16px" : null};
  margin: ${props => props.icons ? "0px 22px" : null};

  //btns
  width: ${props => props.btns ? "300px" : null};
`