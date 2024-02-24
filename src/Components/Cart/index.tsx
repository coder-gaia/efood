import { Button } from '../Plates/styles'
import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { useState } from 'react'
import Checkout from '../../Pages/Checkout'
import getTotalPrice from '../../Utils'

const Cart = () => {
  const { isOpen, plates } = useSelector((state: RootReducer) => state.cart)
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false)
  const dispatch = useDispatch()

  const finishPurchase = () => {
    setIsCheckoutVisible(true)
  }

  const returnToCart = () => {
    setIsCheckoutVisible(false)
  }

  const closeCart = () => {
    dispatch(close())
  }

  const removePlate = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart} />
        <Sidebar>
          {isCheckoutVisible ? (
            <Checkout
              isVisible={isCheckoutVisible}
              returnToCart={returnToCart}
            />
          ) : (
            <>
              {plates.length > 0 ? (
                <>
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
                    Total: <span>${getTotalPrice(plates)} </span>
                  </Prices>
                  <Button
                    title="click here to finish the order"
                    onClick={finishPurchase}
                  >
                    Finish Order
                  </Button>
                </>
              ) : (
                <p className="empty-text">
                  The cart is empty. Add at least 1 product to finish the
                  purchase.
                </p>
              )}
            </>
          )}
        </Sidebar>
      </CartContainer>
    </>
  )
}
export default Cart
