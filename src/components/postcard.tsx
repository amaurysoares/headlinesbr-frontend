import 'react'

import styled from 'styled-components'

const PostCardWrapper = styled.div`
  margin-top: 25px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 0 15px 15px;
  a {
    color: inherit;
    &:hover {
      color: #333333;
    }
  }
`
const PostTag = styled.span`
  top: 0;
  left: 30px;
  padding: 0 5px;
  font-weight: 500;
  border: 1px solid #dddddd;
`

const PostTitle = styled.h3`
  color: #5d5a5a;
  font-size: 1.8em;
`
const PostUrl = styled.a`
  &:hover {
    color: #333333;
  }
`

const PostInfo = styled.span`
  color: #888888;
  font-size: 0.65em;
`

type Post = {
  title: string
  url: string
  created_at: string
}

type PostCardProps = {
  post: Post
}

const PostCard = (props: PostCardProps) => {
  return (
    <PostCardWrapper>
      <PostTag>globo.com</PostTag>
      <PostUrl href={props.post.url}>
        <PostTitle>{props.post.title}</PostTitle>
      </PostUrl>
      <PostInfo>{props.post.created_at}</PostInfo>
    </PostCardWrapper>
  )
}

export default PostCard
