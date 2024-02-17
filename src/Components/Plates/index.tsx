import { useState } from 'react'
import {
  Button,
  CaptionWrapper,
  CloseButton,
  Description,
  ModalButton,
  ModalContent,
  ModalDescription,
  ModalImage,
  ModalOverlay,
  ModalTitle,
  ModalWrapper,
  Portion,
  ProductCard,
  Title
} from './styles'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import Prato from '../../Models/Prato'

interface PlateProps {
  plate: Prato
  title: string
  description: string
  image: string
  porcao: string
  price: number
}

const Plate = ({
  title,
  description,
  image,
  price,
  porcao,
  plate
}: PlateProps) => {
  const [isModalOpen, setModalIsOpen] = useState(false)

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(plate))
    dispatch(open())
    setModalIsOpen(false)
  }

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const getDescription = (description: string) => {
    if (description.length > 150) {
      return description.slice(0, 147).concat('...')
    }
    return description
  }
  return (
    <ProductCard>
      <img className="plate-image" src={image} alt={title} />
      <CaptionWrapper>
        <Title>{title}</Title>
      </CaptionWrapper>
      <Description>{getDescription(description)}</Description>
      <Button onClick={openModal}>View Details</Button>
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <ModalImage src={image} alt={title} />
            <ModalWrapper>
              <ModalTitle>{title}</ModalTitle>
              <ModalDescription>{description}</ModalDescription>
              <Portion>Serves {porcao}</Portion>
              <ModalButton onClick={addToCart}>
                Add to Cart - ${price}
              </ModalButton>
            </ModalWrapper>
          </ModalContent>
        </ModalOverlay>
      )}
    </ProductCard>
  )
}

export default Plate
