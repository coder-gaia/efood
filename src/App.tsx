import { Provider } from 'react-redux'
import Footer from './Components/Footer'
import Rotas from './routes'
import { GlobalStyle } from './styles'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import Cart from './Components/Cart'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <Rotas />
          <Footer />
          <Cart />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
