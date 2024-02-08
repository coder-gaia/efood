import Produto from '../../Models/Produto'
import Product from '../Product'
import { Container, List } from './style'

type Props = {
  produtos: Produto[]
}

const ProductList = ({ produtos }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {produtos.map((produto) => (
            <Product
              key={produto.id}
              title={produto.title}
              description={produto.description}
              image={produto.image}
              rate={produto.rate}
              tags={produto.tags}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}
export default ProductList
