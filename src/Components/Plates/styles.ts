import styled from 'styled-components'
import { colors } from '../../styles'

export const ProductCard = styled.div`
  width: 384px;
  width: 100%;
  height: 350px;
  background-color: ${colors.lightRed};
  color: ${colors.white};
  border-radius: 4px;
  padding: 4px;

  img.plate-image {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`
export const CaptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`
export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`
export const Description = styled.p`
  display: block;
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
  margin-left: 12px;
  margib-bottom: 8px;
  margin-top: 6px;
  border: none;
  font-weight: bold;

  &: hover {
    background-color: ${colors.white};
    color: ${colors.grey};
    transition: ease 0.4s;
  }
`
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

export const ModalContent = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.lightRed};
  color: ${colors.white};
  border-radius: 4px;
  padding: 8px;
  max-width: 1024px;
  height: 344px;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    display: block;
    height: auto;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${colors.white};
`

export const ModalImage = styled.img`
  display: flex;
  width: 280px;
  height: 280px;
  margin: 24px 24px 32px 32px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`
export const ModalWrapper = styled.div`
  display: block;
  padding: 8px;
`
export const ModalTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 8px;
`

export const ModalDescription = styled.div`
  width: 656px;
  height: 176px;
  padding: 8px;
  font-size: 16px;
  margin-bottom: -40px;

  @media screen and (max-width: 768px) {
    width: 400px;
  }
`
export const Portion = styled.div`
  font-size: 16px;
  margin-left: 8px;
  margin-bottom: 16px;
`

export const ModalButton = styled.button`
  width: 218px;
  height: 24px;
  background-color: ${colors.salmon};
  color: ${colors.darkRed};
  font-size: 14px;
  line-height: 14px;
  border: 2px solid ${colors.grey};
  cursor: pointer;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 8px;

  &: hover {
    background-color: ${colors.white};
    color: ${colors.grey};
    transition: ease .4s;
`
