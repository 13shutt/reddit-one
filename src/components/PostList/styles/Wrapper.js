import styled, { css } from 'styled-components'

export const Wrapper = styled.div`

  ${({ container }) => 
    container && css`
      width: 600px;
      padding: 10px 0px;
      border: 1px solid rgba(0,0,0,0.2);
      margin: 10px;
      border-radius: 5px;
      cursor: pointer;
      transition: border 0.07s ease-out;
      background: white;
      :hover {
        border: 1px solid rgba(0,0,0,0.4);
      }
    `
  }

  ${({ posts }) => 
    posts && css`
      display: flex;
      flex-direction: row;
      padding: 5px 10px;
    `
  }

  ${({ single }) => 
    single && css`
      display: flex;
      flex-direction: row;
      padding: 5px 10px;
      padding-top: 40px;
      background: white;
    `
  }

  ${({ content }) => 
    content && css`
      display: flex;
      flex-direction: column;
    `
  }

  ${({ footer }) => 
    footer && css`
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      align-items: baseline;
    `
  }
  
`