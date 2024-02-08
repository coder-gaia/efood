import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import SellOut from './Pages/Selling'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<SellOut />} />
  </Routes>
)

export default Rotas
