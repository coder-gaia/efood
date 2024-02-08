import { Link } from 'react-router-dom'
import heroImg from '../../assets/images/hero.png'
import logo from '../../assets/images/logo.png'
import {
  BtnWrapper,
  Button,
  ImageContainer,
  LogoContainer,
  Title,
  TitleWrapper,
  Wrapper
} from './styles'

const Hero = () => {
  return (
    <ImageContainer style={{ backgroundImage: `url(${heroImg})` }}>
      <Wrapper>
        <LogoContainer>
          <img src={logo} alt="logo-img" />
        </LogoContainer>
      </Wrapper>
      <TitleWrapper>
        <Title>Live gastronomic experiences in the comfort of your home</Title>
      </TitleWrapper>
      <BtnWrapper>
        <Link to={'/products'}>
          <Button>Browse</Button>
        </Link>
      </BtnWrapper>
    </ImageContainer>
  )
}

export default Hero
