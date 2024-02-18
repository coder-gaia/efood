import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: block;
  max-width: 2032px;
  width: 100%;
  height: 298px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  margin-top: 120px;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`
export const LogoContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 24px;
`
export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-left: 10px;

  img {
    width: 24px;
  }

  a {
    margin-right: 8px;
  }
`
export const FooterText = styled.div`
  margin: 0 auto;
  font-size: 10x;
  text-align: center;
  font-weight: 400;
  max-width: 480px;
  height: 24px;
  margin-bottom: 40px;
`
