import { Container } from './styles'

type CardProps = {
  children: React.ReactNode
  title: string
  totalPrice?: number
  isVisible: boolean
  orderId?: string | null
}

const Card = ({ children, title, isVisible, orderId }: CardProps) => {
  return (
    <>
      {isVisible && (
        <Container>
          <h2>
            {title}
            {orderId && (
              <span style={{ marginLeft: '10px' }}>- order ID: {orderId}</span>
            )}
          </h2>
          {children}
        </Container>
      )}
    </>
  )
}

export default Card
