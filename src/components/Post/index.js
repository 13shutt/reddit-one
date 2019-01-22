import React from 'react'
import numeral from 'numeral'

import { Ups, PostHeader, PostTitle, PostFooterIcon, Wrapper } from './styles'


const Post = (props) => (
  <Wrapper container>
    <Wrapper posts>
      <Ups>{numeral(props.ups).format('0a')}</Ups>
      <Wrapper content>
        <PostHeader subreddit={props.subreddit} author={props.author} />
        <PostTitle title={props.title} />
        <Wrapper footer>
          <PostFooterIcon faClass={"fa-comments"} children={numeral(props.num_comments).format('0a')} text={"Comments"}/>
          <PostFooterIcon faClass={"fa-share"} text={"Share"}/>
          <PostFooterIcon faClass={"fa-bookmark"} text={"Save"}/>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  </Wrapper>
)
 
export default Post;