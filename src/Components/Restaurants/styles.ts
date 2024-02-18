import styled from 'styled-components'
import { colors } from '../../styles'

export const ProductCard = styled.div`
  max-width: 472px;
  height: 400px;
  border: 1px solid ${colors.darkRed};
  border-radius: 4px;
  position: relative;
  margin-bottom: 56px;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    height: auto;
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
    max-width: 21px;
    max-height: 21px;
  }
`
export const Rate = styled.div`
  margin-right: 4px;
  font-weight: bold;
  font-size: 21px;
`
export const Title = styled.h3`
  font-size: 18px;
  margin-top: 8px;
  font-weight: bold;
`
export const Description = styled.p`
  width: 456px;
  display: block;
  font-weight: 600px;
  margin-top: 8px;
  margin-right: 8px;
  margin-left: 8px;
  font-size: 14px;
`
export const Button = styled.button`
  width: 82px;
  height: 24px;
  background-color: ${colors.lightRed};
  color: ${colors.white};
  margin-left: 8px;
  margin-top: 24px;
  margin-bottom: 8px;
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
