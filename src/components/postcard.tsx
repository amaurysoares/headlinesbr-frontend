import styled from 'styled-components'

export const PostCardWrapper = styled.div`
  margin-top: 25px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 0 15px 15px;
  a {
    color: inherit;
    &:hover {
      color: #333333;
    }
  }
`
export const PostTag = styled.span`
  top: 0;
  left: 30px;
  padding: 0 5px;
  font-weight: 500;
  border: 1px solid #dddddd;
`

export const PostTitle = styled.h3`
  color: #5d5a5a;
  font-size: 1.8em;
`

export const PostInfo = styled.span`
  color: #888888;
  font-size: 0.65em;
`
