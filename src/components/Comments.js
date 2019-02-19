import React from 'react'
import styled from 'styled-components'
import { PostFooterIcon } from './Post/styles'

const StyledBody =  styled.div`
  display: flex;
  flex-direction: column;
`

const Comment = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 5px;
  cursor: pointer;
  transition: border 0.07s ease-out;
  margin: 10px;
  :hover {
    border: 1px solid rgba(0,0,0,0.4);
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-right: 10px;
    min-width: 25px;
    i {
      font-size: 16px;
      color: #6e6e6e;
      padding: 3px 3px;
    }
    .fa-caret-up:hover {
      color: red;
    }
    .fa-caret-down:hover {
      color: blue;
    }
  }

  div {
    section {
      display: flex;
      flex-direction: row;
      margin-bottom: 8px;
      align-items: baseline;
      h3 {
        font-size: 14px;
        :hover {
          text-decoration: underline;
        }
      }
    }
    div {
      display: flex;
      flex-direction: row;
      margin-top: 5px;
    }
  }
`

const Comments = ({ data }) => (
  <StyledBody>
    {data.map(item => (
      <Comment key={item.data.id}>
        <section>
          <i className="fa fa-caret-up" aria-hidden="true"></i>
          <i className="fa fa-caret-down" aria-hidden="true"></i>
        </section>
        <div>
          <section>
            <h3>{item.data.author}</h3>
          </section>
          <p>{item.data.body}</p>
          <div>
            <PostFooterIcon faClass={"fa-share"} text={"Share"}/>
            <PostFooterIcon faClass={"fa-bookmark"} text={"Save"}/>
          </div>
        </div>
      </Comment>
    ))}
  </StyledBody>
)

export default Comments