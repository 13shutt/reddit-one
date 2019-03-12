import React from 'react'
import styled from 'styled-components'
import numeral from 'numeral'

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: black;
  color: gray;
  justify-content: space-between;
  padding: 15px 20px;
  align-items: baseline;
  
  section {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 10px;
      i {
        font-size: 22px;
        color: #6e6e6e;
        padding: 0px 6px;
      }
      p {
        font-size: 18px;
      }
      .fa-caret-up:hover {
        color: red;
      }
      .fa-caret-down:hover {
        color: blue;
      }
    }
  }

  span {
    width: 70%;
  }

  
  button  {
    color: #fff;
    text-transform: uppercase;
    background: black;
    padding: 10px 15px;
    display: inline-block;
    border: none;
    cursor: pointer;

    :hover {
      text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
      transition: all 0.4s ease 0s;
    }
  }
`

const PostHeader = ({ ups, title, goBack }) => (
  <StyledHeader>
    <section>
      <div>
        <i className="fa fa-caret-up" aria-hidden="true"></i>
          <p>{numeral(ups).format('0a')}</p>
        <i className="fa fa-caret-down" aria-hidden="true"></i>
      </div>
      <span>{title}</span>
    </section>
    <button onClick={goBack}>CLOSE <i className="fa fa-times" aria-hidden="true"></i></button>
  </StyledHeader>
)

export default PostHeader