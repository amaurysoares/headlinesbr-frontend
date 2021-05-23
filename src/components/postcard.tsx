import 'react'

import styled from 'styled-components'

const Container = styled.a`
  border: 0.063rem solid #dddddd;
  border-radius: 0.5rem;
  color: inherit;
  display: block;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  &:hover {
    color: #333333;
  }
`

const Title = styled.h3`

`

type Post = {
    title: string,
    url: string,
}

type PostCardProps = {
    post: Post,
}

const PostCard = (props: PostCardProps) => {
    return (
        <Container href={props.post.url} target="_blank">
            <Title>{props.post.title}</Title>
        </Container>
    )
}

export default PostCard