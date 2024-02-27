import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  border-radius: 8px;
  background-color: ${colors.lightRed};
  padding: 0;

  p {
    line-height: 22px;
    font-size: 14px;
  }

  h2,
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.salmon};
    margin-bottom: 24px;
  }
`
