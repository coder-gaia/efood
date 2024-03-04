import styled from 'styled-components'
import { colors } from '../../styles'
import trashCan from '../../assets/images/lixeira-de-reciclagem 1.png'
import { Button } from '../Plates/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  color: ${colors.white};

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${colors.lightRed};
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;
  height: 100vh;
  z-index: 1;
  overflow-y: auto;

  .empty-text {
    text-align: center;
    color: ${colors.white};
    font-size: 20px;
    font-weight: bold;
    line-height: 22px;
  }

  @media screen and (max-width: 640px) {
    width: 80%;
  }
`
export const Prices = styled.p`
  margin-top: 40px;
  display: flex;
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin-bottom: 24px;

  span {
    margin-left: 245px;

    @media screen and (max-width: 640px) {
      margin-left: 170px;
    }
  }
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.salmon};
  border-bottom: 1px solid ${colors.lightRed};
  padding: 8px 0;
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 16px;
    margin-left: 8px;
  }

  h3 {
    color: ${colors.darkRed};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    font-size: 14px;
    color: ${colors.darkRed};
  }

  button {
    background-image: url(${trashCan});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 72px;
    bottom: 8px;
    right: 8px;
  }
`

export const ProceedBtn = styled(Button)`
  width: 100%;
  margin-left: 0;
`
