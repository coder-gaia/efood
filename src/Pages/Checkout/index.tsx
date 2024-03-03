import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { RootReducer } from '../../store'
import { clear } from '../../store/reducers/cart'
import Card from '../../Components/Card'
import {
  InputGroup,
  SentButton,
  SmallInputsGroup,
  SmallInputsGroupWrapper,
  ThanksNote
} from './styles'
import getTotalPrice from '../../Utils'

type CheckoutPropsToggle = {
  isVisible: boolean
  returnToCart: () => void
}

type FormValues = {
  receiver: string
  address: string
  city: string
  zipCode: string
  number: string
  complement: string
  nameOnTheCard: string
  cardNumber: string
  cardCode: string
  dueMonth: string
  dueYear: string
}

const Checkout = ({ returnToCart }: CheckoutPropsToggle) => {
  const [activeCart, setActiveCart] = useState<
    'delivery' | 'payment' | 'orderSent'
  >('delivery')
  const plates = useSelector((state: RootReducer) => state.cart.plates)
  const [isDeliveryFormSent, setIsDeliveryFormSent] = useState(false)
  const dispatch = useDispatch()

  const goToPaymentForm = () => {
    setActiveCart('payment')
  }

  const returToDelivery = () => {
    setActiveCart('delivery')
  }

  const sentOrder = () => {
    setActiveCart('orderSent')
  }

  const finishOrder = () => {
    dispatch(clear())
    setActiveCart('delivery')
    returnToCart()
  }

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      console.log('Tentativa de envio do formulário:', values)

      if (
        !values.receiver ||
        !values.address ||
        !values.city ||
        !values.zipCode ||
        !values.number
        // !values.nameOnTheCard ||
        // !values.cardNumber ||
        // !values.cardCode ||
        // !values.dueMonth ||
        // !values.dueYear
      ) {
        alert('All the fields must be filled correctly.')
        return
      }

      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            delivery: {
              receiver: values.receiver,
              address: {
                description: values.address,
                city: values.city,
                zipCode: values.zipCode,
                number: parseInt(values.number),
                complement: values.complement
              }
            },
            payment: {
              card: {
                name: values.nameOnTheCard,
                number: values.cardNumber,
                code: parseInt(values.cardCode),
                expires: {
                  month: parseInt(values.dueMonth),
                  year: parseInt(values.dueYear)
                }
              }
            },
            products: {
              id: 1,
              price: getTotalPrice(plates)
            }
          })
        }
      )

      if (response.ok) {
        console.log('Dados do formulário enviados com sucesso!')
        setIsDeliveryFormSent(true)
        goToPaymentForm()
      } else {
        console.error(
          'Erro ao enviar dados do formulário:',
          response.statusText
        )
      }
    } catch (error: any) {
      console.error('Erro ao enviar dados do formulário:', error.message)
    } finally {
      setSubmitting(false)
    }
  }

  const totalPrice = getTotalPrice(plates)

  return (
    <Formik
      initialValues={{
        receiver: '',
        address: '',
        city: '',
        zipCode: '',
        number: '',
        complement: '',
        nameOnTheCard: '',
        cardNumber: '',
        cardCode: '',
        dueMonth: '',
        dueYear: ''
      }}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values, { setSubmitting })
        if (
          !values.receiver ||
          !values.address ||
          !values.city ||
          !values.zipCode ||
          !values.number
        ) {
          return
        }
        console.log('Form sent:', values)
        setSubmitting(false)
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <Card title="Delivery" isVisible={activeCart === 'delivery'}>
            <InputGroup>
              <label htmlFor="receiver">Who will receive:</label>
              <Field
                type="text"
                id="receiver"
                name="receiver"
                className={errors.receiver && touched.receiver ? 'error' : ''}
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor="address">Adress:</label>
              <Field
                type="text"
                id="address"
                name="address"
                className={errors.address && touched.address ? 'error' : ''}
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor="city">City:</label>
              <Field
                type="text"
                id="city"
                name="city"
                className={errors.city && touched.city ? 'error' : ''}
              />
            </InputGroup>

            <SmallInputsGroupWrapper>
              <SmallInputsGroup>
                <label htmlFor="zipCode">Zip Code:</label>
                <Field
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  className={errors.zipCode && touched.zipCode ? 'error' : ''}
                />
              </SmallInputsGroup>
              <SmallInputsGroup>
                <label htmlFor="number">Number:</label>
                <Field
                  id="number"
                  name="number"
                  className={errors.number && touched.number ? 'error' : ''}
                />
              </SmallInputsGroup>
            </SmallInputsGroupWrapper>

            <InputGroup>
              <label htmlFor="complement">Complement(optional):</label>
              <Field type="text" id="complement" name="complement" />
            </InputGroup>

            <SentButton type="submit" disabled={isSubmitting}>
              Proceed to Payment
            </SentButton>
            <SentButton onClick={returnToCart}>Return to cart</SentButton>
          </Card>
          <Card
            title={`Payment - Total: $${totalPrice}`}
            isVisible={activeCart === 'payment'}
          >
            <InputGroup>
              <label htmlFor="nameOnTheCard">Name on the card</label>
              <Field
                id="nameOnTheCard"
                name="nameOnTheCard"
                className={
                  errors.nameOnTheCard && touched.nameOnTheCard ? 'error' : ''
                }
              />
            </InputGroup>

            <SmallInputsGroupWrapper>
              <SmallInputsGroup>
                <label htmlFor="cardNumber">Card number</label>
                <Field
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  className={
                    errors.cardNumber && touched.cardNumber ? 'error' : ''
                  }
                />
              </SmallInputsGroup>
              <SmallInputsGroup>
                <label htmlFor="cardCode" className="LabelSize">
                  CVV
                </label>
                <Field
                  type="text"
                  id="cardCode"
                  name="cardCode"
                  className={errors.cardCode && touched.cardCode ? 'error' : ''}
                />
              </SmallInputsGroup>
            </SmallInputsGroupWrapper>

            <SmallInputsGroupWrapper>
              <SmallInputsGroup>
                <label htmlFor="dueMonth">Due month</label>
                <Field
                  type="text"
                  id="dueMonth"
                  name="dueMonth"
                  className={errors.dueMonth && touched.dueMonth ? 'error' : ''}
                />
              </SmallInputsGroup>
              <SmallInputsGroup>
                <label htmlFor="dueYear">Due year</label>
                <Field
                  type="text"
                  id="dueYear"
                  name="dueYear"
                  className={errors.dueYear && touched.dueYear ? 'error' : ''}
                />
              </SmallInputsGroup>
            </SmallInputsGroupWrapper>
            <SentButton onClick={sentOrder}>Finish payment</SentButton>
            <SentButton onClick={returToDelivery}>
              Return to delivery
            </SentButton>
          </Card>
          <Card
            title="Order sent - {orderId}"
            isVisible={activeCart === 'orderSent'}
          >
            <ThanksNote>
              We are happy to inform you that your order is already in the
              preparation process and will soon be delivered to the address
              provided.
            </ThanksNote>
            <ThanksNote>
              We would like to point out that our couriers are not authorized to
              make extra charges.
            </ThanksNote>
            <ThanksNote>
              Remember the importance of washing your hands after receiving your
              order, thus ensuring your safety and well-being during the meal.
            </ThanksNote>
            <ThanksNote>
              We hope you enjoy a delicious and pleasant gastronomic experience.
              Enjoy!
            </ThanksNote>
            <SentButton onClick={finishOrder}>Finish</SentButton>
          </Card>
        </Form>
      )}
    </Formik>
  )
}
export default Checkout
