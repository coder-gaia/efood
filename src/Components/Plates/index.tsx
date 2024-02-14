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
  Portion,
  ProductCard,
  Title
} from './styles'

interface PlateProps {
  title: string
  description: string
  image: string
  porcao: string
  price: number
}

const Plate = ({ title, description, image, price, porcao }: PlateProps) => {
  const [isModalOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const getDescription = (description: string) => {
    if (description.length > 90) {
      return description.slice(0, 87).concat('...')
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
            <ModalTitle>{title}</ModalTitle>
            <ModalDescription>{description}</ModalDescription>
            <Portion>Serve {porcao}</Portion>
            <ModalButton>Add to Cart - ${price}</ModalButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </ProductCard>
  )
}

export default Plate
