import React from 'react'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import PostCard from '../components/postcard'

const posts = [
  {
    "id": "60aab62a7fc5682cf9aed102",
    "portal_id": 11,
    "title": "Toque de recolher é prorrogado na Bahia; aulas seguem semipresenciais e bares funcionam até 19h",
    "url": "https://www.bnews.com.br/noticias/principal/coronavirus/308585,toque-de-recolher-e-prorrogado-na-bahia-aulas-seguem-semipresenciais-e-bares-funcionam-ate-19h.html",
    "created_at": "2021-05-23T20:08:10.464Z"
  },
  {
    "id": "60aab0b67fc5682cf9aed0d2",
    "portal_id": 7,
    "title": "Vacinação da 1º dose será apenas por hora marcada nesta segunda-feira, em Salvador",
    "url": "https://www.metro1.com.br/noticias/cidade/107368,vacinacao-da-1o-dose-sera-apenas-por-hora-marcada-nesta-segunda-feira-em-salvador",
    "created_at": "2021-05-23T19:44:54.401Z"
  },
  {
    "id": "60aab0797fc5682cf9aed0cf",
    "portal_id": 9,
    "title": "Governo prorroga toque de recolher até 1º de junho em toda a Bahia",
    "url": "https://www.correio24horas.com.br/noticia/nid/governo-prorroga-toque-de-recolher-ate-1o-de-junho-em-toda-a-bahia/",
    "created_at": "2021-05-23T19:43:53.615Z"
  },
  {
    "id": "60aaa57a7fc5682cf9aed071",
    "portal_id": 7,
    "title": "Bolsonaro faz passeio de moto no Rio e volta a provocar aglomeração",
    "url": "https://www.metro1.com.br/noticias/brasil/107369,bolsonaro-faz-passeio-de-moto-no-rio-e-volta-a-provocar-aglomeracao",
    "created_at": "2021-05-23T18:56:58.14Z"
  },
  {
    "id": "60aaa2547fc5682cf9aed056",
    "portal_id": 8,
    "title": "Economia sacode a poeira, mas volta por cima ainda é incerta",
    "url": "https://exame.com/exame-in/economia-sacode-a-poeira-mas-volta-por-cima-ainda-e-incerta/",
    "created_at": "2021-05-23T18:43:30.96Z"
  }
]

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>HeadlinesBrasil</title>
      </Head>
      <Container>
        <Header />
        {posts.map((post) => <PostCard key={post.id} post={post}></PostCard>)}
      </Container>
    </div>
  )
}

export default Home
