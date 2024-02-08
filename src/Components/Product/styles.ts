import styled from 'styled-components'
import { colors } from '../../styles'

export const ProductCard = styled.div`
  width: 100%;
  border: 1px solid ${colors.darkRed};
  border-radius: 4px;
  position: relative;

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
  margin-top: 10px;
  font-weight: 600px;
  font-size: 14px;
  line-height: 22px;
  padding: 8px;
`
export const Button = styled.button`
  width: 82px;
  height: 24px;
  background-color: ${colors.lightRed};
  color: ${colors.white};
  margin-left: 8px;
  margin-top: 14px;
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
