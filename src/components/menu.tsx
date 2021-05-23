import styled from 'styled-components'

import Link from 'next/link'

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
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/about">SOBRE O PROJETO</Link>
        </li>
        <li>
          <Link href="/time-machine">
            MÁQUINA DO TEMPO
          </Link>
        </li>
        <li>
          <Link href="/categories">
            CATEGORIAS
          </Link>
        </li>
        <li>
          <Link href="/filters">
            FILTROS
          </Link>
        </li>
        <li>
          <Link href="/contact">
            CONTATO
          </Link>
        </li>
      </Ul>
    </>
  )
}
export default Menu