import { useEffect, useState } from 'react'
import PlatesList from '../../Components/PlatesList'
import { useParams } from 'react-router-dom'
import PlatesHeader from '../../Components/PlatesHeader'
import Produto, { Prato } from '../../Models/Produto'

const Courses = () => {
  const { id } = useParams()
  const [plates, setPlates] = useState<Prato[]>([])

  useEffect(() => {
    const fetchPlates = async () => {
      try {
        const reponse = await fetch(
          `https://fake-api-tau.vercel.app/api/efood/restaurantes`
        )
        const data = await reponse.json()

        const restaurante = (data as Produto[]).find(
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          (restaurante) => restaurante.id === parseInt(id!)
        )
        if (restaurante) {
          setPlates(restaurante.cardapio)
        } else {
          console.error('Restaurant not find')
        }
      } catch (error) {
        console.log('error while fetching the plates', error)
      }
    }

    fetchPlates()
  }, [id])

  return (
    <>
      <div>
        <PlatesHeader />
        <PlatesList plates={plates} />
      </div>
    </>
  )
}
export default Courses
