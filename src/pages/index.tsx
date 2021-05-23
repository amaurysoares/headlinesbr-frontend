import React from 'react'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import {
  PostCardWrapper,
  PostTag,
  PostTitle,
  PostInfo
} from '../components/postcard'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>HeadlinesBrasil</title>
      </Head>
      <Container>
        <Header />
        <PostCardWrapper>
          <PostTag>globo.com</PostTag>
          <PostTitle>
            Lula procura velhos caciques do MDB de olho em palanques para 2022
          </PostTitle>
          <PostInfo>Atualizado em 23/05/2021 às 18:02</PostInfo>
        </PostCardWrapper>

        <PostCardWrapper>
          <PostTag>globo.com</PostTag>
          <PostTitle>
            Lula procura velhos caciques do MDB de olho em palanques para 2022
          </PostTitle>
          <PostInfo>Atualizado em 23/05/2021 às 18:02</PostInfo>
        </PostCardWrapper>

        <PostCardWrapper>
          <PostTag>globo.com</PostTag>
          <PostTitle>
            Lula procura velhos caciques do MDB de olho em palanques para 2022
          </PostTitle>
          <PostInfo>Atualizado em 23/05/2021 às 18:02</PostInfo>
        </PostCardWrapper>

        <PostCardWrapper>
          <PostTag>globo.com</PostTag>
          <PostTitle>
            Lula procura velhos caciques do MDB de olho em palanques para 2022
          </PostTitle>
          <PostInfo>Atualizado em 23/05/2021 às 18:02</PostInfo>
        </PostCardWrapper>

        <PostCardWrapper>
          <PostTag>globo.com</PostTag>
          <PostTitle>
            Lula procura velhos caciques do MDB de olho em palanques para 2022
          </PostTitle>
          <PostInfo>Atualizado em 23/05/2021 às 18:02</PostInfo>
        </PostCardWrapper>

        <PostCardWrapper>
          <PostTag>globo.com</PostTag>
          <PostTitle>
            Lula procura velhos caciques do MDB de olho em palanques para 2022
          </PostTitle>
          <PostInfo>Atualizado em 23/05/2021 às 18:02</PostInfo>
        </PostCardWrapper>
      </Container>
    </div>
  )
}

export default Home
