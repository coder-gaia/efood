import { Container, List } from './styles'
import Produto from '../../Models/Produto'
import SellingProduct from '../SellingProduct'

interface SellingProductListProps {
  produtos: Produto[]
}

const SellingProductList = ({ produtos }: SellingProductListProps) => {
  return (
    <Container>
      <div className="container">
        <List>
          {produtos.map((produto) => (
            <SellingProduct
              key={produto.id}
              title={produto.title}
              description={produto.description}
              image={produto.image}
              rate={produto.rate}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default SellingProductList
