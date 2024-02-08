import ProductsHeader from '../../Components/SellingHeader'
import Produto from '../../Models/Produto'
import pizza from '../../assets/images/pizza.png'
import SellingProductsList from '../../Components/SellingProductsList'

const ProductsSelling: Produto[] = [
  {
    id: 1,
    image: pizza,
    description:
      'The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil and a touch of olive oil. Flavor and simplicity!',
    title: 'Marguerite Pizza'
  },
  {
    id: 2,
    image: pizza,
    description:
      'The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil and a touch of olive oil. Flavor and simplicity!',
    title: 'Marguerite Pizza'
  },
  {
    id: 3,
    image: pizza,
    description:
      'The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil and a touch of olive oil. Flavor and simplicity!',
    title: 'Marguerite Pizza'
  },
  {
    id: 4,
    image: pizza,
    description:
      'The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil and a touch of olive oil. Flavor and simplicity!',
    title: 'Marguerite Pizza'
  },
  {
    id: 5,
    image: pizza,
    description:
      'The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil and a touch of olive oil. Flavor and simplicity!',
    title: 'Marguerite Pizza'
  },
  {
    id: 6,
    image: pizza,
    description:
      'The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil and a touch of olive oil. Flavor and simplicity!',
    title: 'Marguerite Pizza'
  }
]

const SellOut = () => {
  return (
    <>
      <ProductsHeader />
      <SellingProductsList produtos={ProductsSelling} />
    </>
  )
}
export default SellOut
