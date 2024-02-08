import heroImg from '../../assets/images/hero.png'
import logo from '../../assets/images/logo.png'
import fbLogo from '../../assets/images/facebook-logo.png'
import instaLogo from '../../assets/images/instagram-logo.png'
import twitterLogo from '../../assets/images/twitter-logo.png'
import {
  FooterContainer,
  FooterText,
  LinksContainer,
  LogoContainer,
  Wrapper
} from './styles'

const Footer = () => {
  return (
    <FooterContainer style={{ backgroundImage: `url(${heroImg})` }}>
      <Wrapper>
        <LogoContainer>
          <img src={logo} alt="logo-img" />
        </LogoContainer>
      </Wrapper>
      <LinksContainer>
        <a href="#">
          <img src={fbLogo} alt="fb-logo" />
        </a>
        <a href="#">
          <img src={instaLogo} alt="insta-logo" />
        </a>
        <a href="#">
          <img src={twitterLogo} alt="twiter-logo" />
        </a>
      </LinksContainer>
      <FooterText>
        <p>
          efood is a platform for promoting establishments, the responsibility
          for delivery and quality of products lies entirely with the contracted
          establishment.
        </p>
      </FooterText>
    </FooterContainer>
  )
}

export default Footer
