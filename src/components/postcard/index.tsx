import 'react'

import { Container, Title } from './styles'

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