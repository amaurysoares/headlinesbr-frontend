import styled from 'styled-components'
import Menu from '../components/menu'

const Div = styled.div`
  text-align: center;
  background-color: #ffffff;
  width: 100%;
  margin: auto;
  overflow: hidden;
  padding: 30px 0;
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
      <Div>
        <Menu />
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
