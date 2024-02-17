import {
  Caption,
  CartIcon,
  HeaderContainer,
  LogoWrapper,
  PlaceholderImg,
  Status,
  Title,
  UnderCaption,
  Wrapper
} from './styles'
import headerImg from '../../assets/images/hero.png'
import logo from '../../assets/images/logo.png'
import pastaImg from '../../assets/images/pasta.png'
import cartIcon from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const PlatesHeader = () => {
  const { plates } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <HeaderContainer style={{ backgroundImage: `url(${headerImg})` }}>
        <Wrapper>
          <Link to={'/'} className="link">
            <Title>Restaurants</Title>
          </Link>
          <LogoWrapper>
            <img src={logo} alt="logo" />
          </LogoWrapper>
          <Status>
            {plates.length} - item(s) in the cart
            <CartIcon src={cartIcon} alt="cart-icon" onClick={openCart} />
          </Status>
        </Wrapper>
      </HeaderContainer>
      <PlaceholderImg backgroundImage={pastaImg}>
        <div className="container">
          <Caption>Italian</Caption>
          <div>
            <UnderCaption>La Dolce Vita Trattoria</UnderCaption>
          </div>
        </div>
      </PlaceholderImg>
    </>
  )
}
export default PlatesHeader
