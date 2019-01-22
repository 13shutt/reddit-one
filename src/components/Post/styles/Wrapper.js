import styled, { css } from 'styled-components'

const Wrapper = styled.div`

  ${({ container }) => 
    container && css`
      width: 600px;
      padding: 10px 0px;
      border: 1px solid rgba(0,0,0,0.2);
      margin: 10px;
      border-radius: 5px;
      cursor: pointer;
    `
  }

  ${({ posts }) => 
    posts && css`
      display: flex;
      flex-direction: row;
      padding: 5px 10px;
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

export default Wrapper