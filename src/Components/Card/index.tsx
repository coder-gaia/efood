import { Container } from './styles'

type Props = {
  children: JSX.Element
  title: string
  totalPrice?: string
}

const Card = ({ children, title, totalPrice }: Props) => {
  return (
    <>
      <Container>
        <h2>
          {title} {totalPrice}
        </h2>
        {children}
      </Container>
    </>
  )
}

export default Card
