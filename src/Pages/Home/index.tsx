import Hero from '../../Components/Hero'
import { TagItem } from '../../Components/Product'
import ProductsList from '../../Components/ProductsList'
import Produto from '../../Models/Produto'
import sushi from '../../assets/images/sushi.png'
import pasta from '../../assets/images/pasta.png'

const productListing: Produto[] = [
  {
    id: 1,
    tags: [
      {
        type: 'japanese',
        children: 'Japanese'
      } as TagItem
    ],
    rate: 4.1,
    image: sushi,
    description:
      'Order the best of Japanese cuisine now in the comfort of your home! Fresh sushi, delicious sashimi and irresistible hot dishes. Fast delivery, careful packaging and guaranteed quality. Experience Japan without leaving home with our delivery!',
    title: 'Hioki Sushi'
  },
  {
    id: 2,
    tags: [
      {
        type: 'free delivery',
        children: 'free delivery'
      } as TagItem,
      {
        type: 'italian',
        children: 'Italian'
      } as TagItem
    ],
    rate: 3.2,
    image: pasta,
    description:
      'La Dolce Vita Trattoria brings authentic Italian cuisine to you! Enjoy homemade pasta, delicious pizzas and incredible risottos, all in the comfort of your own home. Fast delivery, well-packaged dishes and unforgettable flavor. Order now!',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 3,
    tags: [
      {
        type: 'japanese',
        children: 'Japanese'
      } as TagItem
    ],
    rate: 3.9,
    image: sushi,
    description:
      'Order the best of Japanese cuisine now in the comfort of your home! Fresh sushi, delicious sashimi and irresistible hot dishes. Fast delivery, careful packaging and guaranteed quality. Experience Japan without leaving home with our delivery!',
    title: 'Hioki Sushi'
  },
  {
    id: 4,
    tags: [
      {
        type: 'italian',
        children: 'Italian'
      } as TagItem
    ],
    rate: 4.7,
    image: pasta,
    description:
      'La Dolce Vita Trattoria brings authentic Italian cuisine to you! Enjoy homemade pasta, delicious pizzas and incredible risottos, all in the comfort of your own home. Fast delivery, well-packaged dishes and unforgettable flavor. Order now!',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 5,
    tags: [
      {
        type: 'japanese',
        children: 'Japanese'
      } as TagItem
    ],
    rate: 4.9,
    image: sushi,
    description:
      'Order the best of Japanese cuisine now in the comfort of your home! Fresh sushi, delicious sashimi and irresistible hot dishes. Fast delivery, careful packaging and guaranteed quality. Experience Japan without leaving home with our delivery!',
    title: 'Hioki Sushi'
  },
  {
    id: 6,
    tags: [
      {
        type: 'italian',
        children: 'Italian'
      } as TagItem
    ],
    rate: 4.2,
    image: pasta,
    description:
      'La Dolce Vita Trattoria brings authentic Italian cuisine to you! Enjoy homemade pasta, delicious pizzas and incredible risottos, all in the comfort of your own home. Fast delivery, well-packaged dishes and unforgettable flavor. Order now!',
    title: 'La Dolce Vita Trattoria'
  }
]

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsList produtos={productListing} />
    </>
  )
}

export default Home
