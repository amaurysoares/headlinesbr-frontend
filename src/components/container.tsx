import styled from 'styled-components'

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  padding-bottom: 0.75rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  max-width: 1250px;
  margin: 40px auto 40px;
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
