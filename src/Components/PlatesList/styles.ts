import styled from 'styled-components'

export const Container = styled.section``

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  gap: 32px;
  margin-left: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 0px;
  }
`
