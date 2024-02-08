import {
  Caption,
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
import { Link } from 'react-router-dom'

const ProductsHeader = () => {
  return (
    <>
      <HeaderContainer style={{ backgroundImage: `url(${headerImg})` }}>
        <Wrapper>
          <Title>Restaurants</Title>
          <LogoWrapper>
            <Link to={'/'}>
              <img src={logo} alt="logo" />
            </Link>
          </LogoWrapper>
          <Status>0 item(s) in the cart</Status>
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
export default ProductsHeader
