import styled from 'styled-components'
import Menu from '../components/menu'

const Div = styled.div`
  text-align: center;
  background-color: #fff;
  width: 100%;
  max-width: 1250px;
  margin: 40px auto 0;
  overflow: hidden;
`
const Text = styled.p`
  font-size: 1.1em;
`
const MainLogo = styled.h1`
  font-size: 2.8em;
  span {
    color: green;
  }
`

function Header() {
  return (
    <>
      <Menu />
      <Div>
        <MainLogo>
          HEADLINES<span>BRASIL</span>
        </MainLogo>
        <Text>
          Aqui você encontra as principais manchetes dos portais de notícias do
          país
        </Text>
      </Div>
    </>
  )
}
export default Header
