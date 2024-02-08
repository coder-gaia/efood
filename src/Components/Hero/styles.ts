import styled from 'styled-components'
import { colors } from '../../styles'

export const ImageContainer = styled.div`
  display: block;
  width: 100%;
  height: 460px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  margin-bottom: 72px;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const LogoContainer = styled.div`
  margin-top: 30px;
`

export const TitleWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 400px;
  width: 100%;
  margin-top: 91px;
`
export const Title = styled.h1`
  font-weight: 900;
  font-size: 36px;
  line-height: 40px;
`

export const BtnWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`
export const Button = styled.button`
  width: 90px;
  height: 36px;
  background-color: ${colors.lightRed};
  color: ${colors.white};
  margin-top: 70px;
  margin-bottom: 8px;
  border: none;
  border-bottom: 2px solid ${colors.grey};
  border-radius: 4px;
  font-weight: bold;

  &: hover {
    background-color: ${colors.white};
    color: ${colors.grey};
    transition: all ease 0.3s;
  }
`
