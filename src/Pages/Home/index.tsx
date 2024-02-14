import { useEffect, useState } from 'react'
import Hero from '../../Components/Hero'
import EstablishmentList from '../../Components/RestaurantsList'
import Produto from '../../Models/Produto'

const Home = () => {
  const [restaurants, setRestaurants] = useState([])

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/restaurantes'
      )
      const data = await response.json()
      const formattedData = data.map((restaurante: any) => {
        return new Produto(
          restaurante.id,
          restaurante.titulo,
          restaurante.destacado,
          restaurante.tipo,
          restaurante.avaliacao,
          restaurante.descricao,
          restaurante.capa,
          restaurante.cardapio
        )
      })

      setRestaurants(formattedData)
    } catch (error) {
      console.log('failed while fetching the plates', error)
    }
  }

  useEffect(() => {
    fetchRestaurants()
  }, [])

  return (
    <>
      <Hero />
      <EstablishmentList establishments={restaurants} />
    </>
  )
}

export default Home
