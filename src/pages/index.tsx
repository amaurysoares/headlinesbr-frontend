import React from 'react'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import { getPosts } from '../services/headlines'

import PostCard, { Post } from '../components/postcard'

type HomeProps = {
  posts: [Post]
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>HeadlinesBrasil</title>
      </Head>
      <Header />
      <Container>
        {posts.map(post => (
          <PostCard key={post.id} post={post}></PostCard>
        ))}
      </Container>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getPosts()
    },
    revalidate: 60
  }
}

export default Home
