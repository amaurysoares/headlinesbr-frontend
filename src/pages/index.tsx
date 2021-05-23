import React from 'react'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import PostCardWrapper from '../components/postcard'
import Title from '../components/postcard'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>HeadlinesBrasil</title>
      </Head>
      <Container>
        <Header />
        <PostCardWrapper>
          <h3>
            Lula procura velhos caciques do MDB de olho em palanques para 2022
          </h3>
        </PostCardWrapper>
      </Container>
    </div>
  )
}

export default Home
