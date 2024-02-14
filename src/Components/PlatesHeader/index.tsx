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

const PlatesHeader = () => {
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
export default PlatesHeader
