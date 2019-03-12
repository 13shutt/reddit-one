import React from 'react'
import styled from 'styled-components'
import { PostFooterIcon } from './styles'

const StyledBody =  styled.div`
  display: flex;
  flex-direction: column;
  background: white;
`

const Comment = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: border 0.07s ease-out;
  margin: 10px;

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
    div {
      display: block;
      height: 100%;
      width: 50%;
      padding: 0 5px;
      :hover {
        span {
          border-right: 2px solid rgb(68, 78, 89);
        }
      }
      span {
        margin-right: 12px;
        display: block;
        height: 100%;
        width: 50%;
        border-right: 2px solid #bfb9b9;
        transition: border-right 0.07s ease-out;
      }
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
          <div><span></span></div>
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