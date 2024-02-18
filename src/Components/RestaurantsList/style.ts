import styled from 'styled-components'

export const Container = styled.section`
  margin-left: 32px;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 24px;
  gap: 32px;

  @media (max-width: 768px) {
    display: block;
    margin-right: 24px;
  }
`
