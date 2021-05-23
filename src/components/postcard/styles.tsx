import styled from 'styled-components'

const Container = styled.a`
  border: 0.063rem solid #dddddd;
  border-radius: 0.5rem;
  color: inherit;
  display: block;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  &:hover {
    color: #333333;
  }
`

const Title = styled.h3`

`

export {
    Container,
    Title
}