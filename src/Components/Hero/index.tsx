import heroImg from '../../assets/images/hero.png'
import logo from '../../assets/images/logo.png'
import {
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
    </ImageContainer>
  )
}

export default Hero
