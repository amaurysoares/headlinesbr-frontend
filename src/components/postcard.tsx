import 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
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
  border: 1px solid #dddddd;
  color: ${({ color }) => (color ? color : 'inherit')};
  font-weight: 600;
  left: 30px;
  padding: 0 5px;
  top: 0;
`

const PostTitle = styled.h3`
  color: #535050;
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

type Portal = {
  id: string,
  name: string,
  color?: string,
}

type Post = {
  title: string
  url: string
  created_at: string,
  portal: Portal,
}

type PostCardProps = {
  post: Post
}

const PostCard = (props: PostCardProps) => {
  const { portal, url, title, created_at } = props.post

  return (
    <Wrapper>
      <PostTag color={portal.color}>{portal.name}</PostTag>
      <PostUrl href={url}>
        <PostTitle>{title}</PostTitle>
      </PostUrl>
      <PostInfo>{created_at}</PostInfo>
    </Wrapper>
  )
}

export default PostCard
