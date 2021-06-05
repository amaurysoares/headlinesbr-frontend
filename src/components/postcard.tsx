import 'react'
import moment from 'moment'
import 'moment-timezone'

moment.locale('pt-BR')
moment.tz.setDefault('America/Bahia')

import styled from 'styled-components'

const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 3px 8px -3px rgb(0 0 0 / 20%);
  margin-top: 25px;
  padding: 0 20px 20px;
`

const PortalTag = styled.span`
  border: 1px solid #eeeeee;
  color: ${({ color }) => (color ? color : 'inherit')};
  font-weight: 700;
  padding: 0 15px;
  top: 0;
`

const PostTitle = styled.h3`
  color: #5d5a5a;
  font-size: 1.6em;
  &:hover {
    color: #8888888;
  }
`

const PostUrl = styled.a`
  &:hover {
    color: red;
  }
`

const PostInfo = styled.span`
  color: #888888;
  font-size: 0.65em;
`

export type Portal = {
  id: number
  name: string
  color?: string
}

export type Post = {
  id: string
  title: string
  url: string
  created_at: string
  portal: Portal
}

export type PostCardProps = {
  post: Post
}

const PostCard = (props: PostCardProps) => {
  const post = props.post

  const now = moment()
  const createdAt = moment(post.created_at)
  const createdAtDiff = createdAt.from(now)
  const createdAtTitle = createdAt.format('DD/MM/YYYY [às] HH:mm')

  return (
    <Wrapper color={post.portal.color}>
      <PortalTag color={post.portal.color}>{post.portal.name}</PortalTag>
      <PostUrl href={post.url} target="_blank">
        <PostTitle>{post.title}</PostTitle>
      </PostUrl>
      <PostInfo title={createdAtTitle}>{createdAtDiff}</PostInfo>
    </Wrapper>
  )
}

export default PostCard
