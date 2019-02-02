import React from 'react'
import numeral from 'numeral'

import { Ups, PostHeader, PostTitle, PostFooterIcon, Wrapper } from './styles'

const Post = ({data: {ups, subreddit_name_prefixed, author, secure_media, thumbnail, is_video, title, num_comments}}) => (
  <Wrapper container>
    <Wrapper posts>
      <Ups>{numeral(ups).format('0a')}</Ups>
      <Wrapper content>
        <PostHeader subreddit={subreddit_name_prefixed} author={author} />
        <PostTitle title={title} />
        <Wrapper footer>
          <PostFooterIcon faClass={"fa-comments"} children={numeral(num_comments).format('0a')} text={"Comments"}/>
          <PostFooterIcon faClass={"fa-share"} text={"Share"}/>
          <PostFooterIcon faClass={"fa-bookmark"} text={"Save"}/>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  </Wrapper>
)
 
export default Post