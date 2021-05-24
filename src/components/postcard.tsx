import 'react'
import moment from 'moment'
import 'moment-timezone'

moment.locale('pt-BR')
moment.tz.setDefault('America/Bahia')

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

const PortalTag = styled.span`
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

export type Portal = {
  id: number,
  name: string,
  color?: string,
}

export type Post = {
  id: string,
  title: string
  url: string
  created_at: string,
  portal: Portal,
}

export type PostCardProps = {
  post: Post
}

const PostCard = (props: PostCardProps) => {
  const post = props.post

  const now = moment()
  const createdAt = moment(post.created_at)
  const createdAtDiff = createdAt.from(now)
  const createdAtTitle = createdAt.format("DD/MM/YYYY [às] HH:mm")

  return (
    <Wrapper>
      <PortalTag color={post.portal.color}>{post.portal.name}</PortalTag>
      <PostUrl href={post.url} target="_blank">
        <PostTitle>{post.title}</PostTitle>
      </PostUrl>
      <PostInfo title={createdAtTitle}>{createdAtDiff}</PostInfo>
    </Wrapper>
  )
}

export default PostCard
