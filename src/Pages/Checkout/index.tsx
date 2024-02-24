import { useState } from 'react'
import Card from '../../Components/Card'
import { Button } from '../../Components/Plates/styles'
import { Form, InputWrapper, MainRow, SecRow, Wrapper } from './styles'
import InputMask from 'react-input-mask'

type Props = {
  isVisible: boolean
  returnToCart: () => void
}
const Checkout = ({ isVisible, returnToCart }: Props) => {
  const [isPaymentFormVisible, setIsPaymentFormVisible] = useState(false)

  const goToPaymentForm = () => {
    setIsPaymentFormVisible(true)
  }

  const returnToAddressform = () => {
    setIsPaymentFormVisible(false)
  }

  return (
    <Form>
      {isVisible && (
        <>
          <Card title={isPaymentFormVisible ? `Payment - $200.00` : `Delivery`}>
            <>
              {!isPaymentFormVisible ? (
                <>
                  <MainRow>
                    <label htmlFor="recipient">Who will receive?</label>
                    <input type="text" name="recipient" id="recipient" />

                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" />

                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" />
                  </MainRow>

                  <SecRow>
                    <InputWrapper>
                      <label htmlFor="zip-code">Zip-code</label>
                      <InputMask
                        type="text"
                        name="zip-code"
                        id="zip-code"
                        mask="99999-999"
                      />
                    </InputWrapper>

                    <div>
                      <label htmlFor="number">Number</label>
                      <input type="text" name="number" id="number" />
                    </div>
                  </SecRow>
                  <MainRow>
                    <label htmlFor="complement">Complement(optional)</label>
                    <input type="text" name="complement" id="complement" />
                  </MainRow>
                  <Button type="button" onClick={goToPaymentForm}>
                    Proceed with the payment
                  </Button>
                  <Button type="button" onClick={returnToCart}>
                    Return to cart
                  </Button>
                </>
              ) : (
                <>
                  <Wrapper>
                    <label htmlFor="cardName">Name on the card</label>
                    <input type="text" name="cardName" id="cardName" />
                  </Wrapper>
                  <SecRow>
                    <div className="cardNum">
                      <label htmlFor="cardNumber">Card Number</label>
                      <InputMask
                        type="text"
                        name="cardNumber"
                        id="cardNumber"
                        mask="9999 9999 9999 9999"
                      />
                    </div>
                    <div className="cvv">
                      <label htmlFor="cvv">CVV</label>
                      <InputMask type="text" name="cvv" id="cvv" mask="999" />
                    </div>
                  </SecRow>

                  <SecRow>
                    <div>
                      <label htmlFor="dueMonth">Due Month</label>
                      <InputMask
                        type="text"
                        name="dueMonth"
                        id="dueMonth"
                        mask="99"
                      />
                    </div>
                    <div className="year">
                      <label htmlFor="dueYear">Due Year</label>
                      <InputMask
                        type="text"
                        name="dueYear"
                        id="dueYear"
                        mask="99"
                      />
                    </div>
                  </SecRow>

                  <Button type="button" onClick={returnToAddressform}>
                    Return to delivery
                  </Button>
                </>
              )}
            </>
          </Card>
        </>
      )}
    </Form>
  )
}
export default Checkout
