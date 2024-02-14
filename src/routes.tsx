import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Courses from './Pages/Courses'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/courses/:id" element={<Courses />} />
  </Routes>
)

export default Rotas
