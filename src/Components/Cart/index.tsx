import { Button } from '../Plates/styles'
import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, plates } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removePlate = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return plates
      .reduce((acumulator, currentValue) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return (acumulator += currentValue.preco)
      }, 0)
      .toFixed(2)
  }

  return (
    <>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart} />
        <Sidebar>
          <ul>
            {plates.map(
              (prato) =>
                prato?.foto && (
                  <CartItem key={prato.id}>
                    <img src={prato.foto} />
                    <div>
                      <h3>{prato.nome}</h3>
                      <span>${prato.preco}</span>
                    </div>
                    <button onClick={() => removePlate(prato.id)} />
                  </CartItem>
                )
            )}
          </ul>
          <Prices>
            Total:<span>${getTotalPrice()} </span>
          </Prices>
          <Button title="click here to finish the order">Finish Order</Button>
        </Sidebar>
      </CartContainer>
    </>
  )
}
export default Cart
