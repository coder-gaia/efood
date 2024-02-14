import styled from 'styled-components'
import { colors } from '../../styles'

export const ProductCard = styled.div`
  width: 350px;
  height: 250px;
  background-color: ${colors.lightRed};
  color: ${colors.white};
  border-radius: 4px;
  padding: 4px;

  img.plate-image {
    width: 100%;
    height: 80px;
    object-fit: cover;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.lightRed};
  color: ${colors.white};
  border-radius: 4px;
  padding: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${colors.black};
  font-weight: bold;
`

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  object-fit: cover;
`

export const ModalTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 8px;
`

export const ModalDescription = styled.div`
  padding: 8px;
  font-size: 16px;
  margin-bottom: 20px;
`
export const Portion = styled.div`
  padding: 8px;
  font-size: 16px;
  margin-bottom: 14px;
`

export const ModalButton = styled.button`
  width: 100%;
  padding: 10px 0;
  background-color: ${colors.salmon};
  color: ${colors.darkRed};
  font-size: 16px;
  border: 2px solid ${colors.grey};
  border-radius: 12px;
  cursor: pointer;
  margin-bottom: 8px;
  font-weight: bold;

  &: hover {
    background-color: ${colors.white};
    color: ${colors.grey};
    transition: ease .4s;
`
