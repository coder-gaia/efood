import Establishment from '../Restaurants'
import { Container, List } from './style'

type Establishment = {
  id: number
  titulo: string
  avaliacao: number
  descricao: string
  capa: string
}

type Props = {
  establishments: Establishment[]
}

const EstablishmentList = ({ establishments }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {establishments.map((restaurant) => (
            <Establishment
              key={restaurant.id}
              title={restaurant.titulo}
              description={restaurant.descricao}
              image={restaurant.capa}
              id={restaurant.id}
              rate={restaurant.avaliacao}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}
export default EstablishmentList
