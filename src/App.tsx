import Footer from './Components/Footer'
import Rotas from './routes'
import { GlobalStyle } from './styles'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
