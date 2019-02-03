import React from 'react'
import numeral from 'numeral'

import { Ups, PostHeader, PostTitle, PostFooterIcon, Wrapper, Image, UrlLink, Video, HostedVideo } from './styles'

const Post = ({data: {
    ups, 
    subreddit_name_prefixed, 
    author, 
    url, 
    post_hint,
    media,
    preview, 
    title, 
    num_comments
  }}) => (
  <Wrapper container>
    <Wrapper posts>
      <Ups>{numeral(ups).format('0a')}</Ups>
      <Wrapper content>
        <PostHeader subreddit={subreddit_name_prefixed} author={author} />
        <PostTitle title={title} />

        {console.log(post_hint)}

        {post_hint === "rich:video" ? (<Video preview={preview} />) : null}
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
  </Wrapper>
)
 
export default Post