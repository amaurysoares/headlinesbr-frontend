import styled from 'styled-components'

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 1250px;
  margin: 40px auto 0;
  overflow: hidden;

  @media (max-width: 800px) {
    width: 86%;
    position: relative;
    h1 {
      font-size: 2em;
    }
  }
`
export default Container
