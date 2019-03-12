import React from 'react'
import numeral from 'numeral'

import { PostHeader, PostTitle, PostFooterIcon, Wrapper, Image, UrlLink, Video, HostedVideo } from './styles'

const PostSingle = ({data: {
    subreddit_name_prefixed, 
    author, 
    url, 
    post_hint,
    media,
    preview, 
    title, 
    num_comments,
    permalink
  }}) => (
  <Wrapper single>
    <Wrapper content>
      <PostHeader subreddit={subreddit_name_prefixed} author={author} />
      <PostTitle title={title} permalink={permalink} />

      {post_hint === "rich:video" ? (<Video url={url} />) : null}
      {post_hint === "hosted:video" ? (<HostedVideo media={media} />) : null}
      <UrlLink post_hint={post_hint} url={url} preview={preview} />
      {post_hint === "link" && preview.reddit_video_preview !== undefined ? (<Video preview={preview} />) : null}
      <Image post_hint={post_hint} url={url} />
      
      <Wrapper footer>
        <PostFooterIcon faClass={"fa-comments"} children={numeral(num_comments).format('0a')} text={"Comments"}/>
        <PostFooterIcon faClass={"fa-share"} text={"Share"}/>
        <PostFooterIcon faClass={"fa-bookmark"} text={"Save"}/>
      </Wrapper>
    </Wrapper>
  </Wrapper>
)
 
export default PostSingle