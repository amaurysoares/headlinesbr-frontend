import styled from 'styled-components'

const Ul = styled.ul`
  text-align: center;
  padding: 0px;
  margin: 0px;
  background-color: inherit;
  list-style: none;
  li {
    font-size: 18px;
    color: #5d5a5a;
    font-weight: bold;
    display: inline;
    a {
      padding: 2px 10px;
      display: inline-block;
      color: #333;
      text-decoration: none;
    }
  }
`

function Menu() {
  return (
    <>
      <Ul>
        <li>
          <a href="">HOME</a>
        </li>
        <li>
          <a href="">SOBRE O PROJETO</a>
        </li>
        <li>
          <a href="">MÁQUINA DO TEMPO</a>
        </li>
        <li>
          <a href="">CATEGORIAS</a>
        </li>
        <li>
          <a href="">FILTROS</a>
        </li>
        <li>
          <a href="">CONTATO</a>
        </li>
      </Ul>
    </>
  )
}
export default Menu
