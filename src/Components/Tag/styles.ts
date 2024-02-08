import styled from 'styled-components'
import { colors } from '../../styles'

export type TagProps = {
  type?: string
  children?: string
}

export const TagContainer = styled.div<TagProps>`
  display: inline-block;
  padding: 4px;
  width: 90px;
  font-size: 12px;
  background-color: ${colors.lightRed};
  color: ${colors.white};
  font-weight: bold;
  border-radius: 2px;
  text-align: center;
  margin-left: 4px;
`
