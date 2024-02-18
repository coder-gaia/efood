import { Container, List } from './styles'
import Plate from '../Plates'
import { Prato } from '../../Models/Produto'

interface PlatesOnSell {
  plates: Prato[]
}

const PlatesList = ({ plates }: PlatesOnSell) => {
  return (
    <>
      <Container className="container">
        <div>
          <List>
            {plates.map((prato) => (
              <Plate
                key={prato.id}
                title={prato.nome}
                description={prato.descricao}
                image={prato.foto}
                price={prato.preco}
                porcao={prato.porcao}
                plate={prato}
              />
            ))}
          </List>
        </div>
      </Container>
    </>
  )
}

export default PlatesList
