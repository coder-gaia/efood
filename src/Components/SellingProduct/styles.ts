import styled from 'styled-components'
import { colors } from '../../styles'

export const ProductCard = styled.div`
  width: 100%;
  background-color: ${colors.lightRed};
  color: ${colors.white};
  border-radius: 4px;
  position: relative;
  padding: 4px;

  img {
    width: 100%;
    border-radius: 8px;
    padding: 4px;
  }
`
export const CaptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`
export const RateWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    max-width: 24px;
  }
`
export const Rate = styled.div`
  margin-right: 4px;
  font-weight: bold;
  font-size: 18px;
`
export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`
export const Description = styled.p`
  display: block;
  margin-top: 4px;
  font-weight: 600px;
  font-size: 14px;
  line-height: 22px;
  padding: 8px;
`
export const Button = styled.button`
  width: 95%;
  height: 32px;
  font-size: 14px;
  background-color: ${colors.salmon};
  color: ${colors.darkRed};
  margin-left: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-weight: bold;

  &: hover {
    background-color: ${colors.white};
    color: ${colors.grey};
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
