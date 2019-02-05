import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${({ header }) => 
    header && css`
      padding: 5px 10px;
      border-bottom: 1px solid rgba(0,0,0,0.2);
      position: fixed;
      top: 0;
      width: 99%;
      background-color: white;
    `
  }
  ${({ icons }) => 
    icons && css`
      width: 120px;
      font-size: 16px;
      margin: 0px 22px;      
    `
  }
  ${({ btns }) => 
    btns && css`
      width: 300px;
    `
  }
`