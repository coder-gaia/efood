import { Container } from './styles'

type CardProps = {
  children: React.ReactNode
  title: string
  totalPrice?: number
  isVisible: boolean
}

const Card = ({ children, title, isVisible }: CardProps) => {
  return (
    <>
      {isVisible && (
        <Container>
          <h2>{title}</h2>
          {children}
        </Container>
      )}
    </>
  )
}

export default Card
