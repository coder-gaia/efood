import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderContainer = styled.div`
  display: block;
  width: 100%;
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .link: visited {
    color: ${colors.lightRed};
  }
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const LogoWrapper = styled.div`
  align-items: center;
  margin-top: 40px;
`
export const Title = styled.h3`
  margin-top: 32px;
  font-weight: bold;
  font-size: 18px;
`
export const Status = styled.p`
  margin-top: 32px;
  font-weight: bold;
  font-size: 18px;
`
export const PlaceholderImg = styled.div<{ backgroundImage: string }>`
  position: relative;
  color: ${colors.white};
  width: 100%;
  height: 280px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  margin-bottom: 64px;
  z-index: 1;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    content: '';
  }
`

export const Caption = styled.p`
  font-weight: 100;
  font-size: 32px;
  position: absolute;
  top: 32px;
  color: color: ${colors.white};
  z-index: 1;
`
export const UnderCaption = styled.p`
  color: ${colors.white};
  max-width: 450px;
  font-size: 32px;
  font-weight: bold;
  position: absolute;
  bottom: 10px;
  left: 27%;
  transform: translateX(-50%);
  z-index: 1;
`
