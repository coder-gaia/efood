import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import $ from 'jquery'
import 'jquery-mask-plugin'
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
  const [isPaymentFormSent, setIsPaymentFormSent] = useState(false)
  const [orderId, setOrderId] = useState<string | null>(null)
  const dispatch = useDispatch()

  useEffect(() => {
    ;($('#zipCode') as any).mask('00000-000')
  }, [])

  const goToPaymentForm = () => {
    setActiveCart('payment')
  }

  const returnToDelivery = () => {
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

  const updateOrderId = (id: string) => {
    setOrderId(id)
  }

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      console.log('Attempt to send the form:', values)

      if (
        !values.receiver ||
        !values.address ||
        !values.city ||
        !values.zipCode ||
        !values.number
      ) {
        alert('All the fields must be filled correctly.')
        return
      }

      const products = plates.map((plate) => {
        return {
          id: plate.id,
          price: plate.preco
        }
      })

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
                zipCode: parseInt(values.zipCode),
                number: values.number,
                complement: values.complement
              }
            },
            payment: {
              card: {
                name: values.nameOnTheCard,
                number: values.cardNumber,
                code: values.cardCode,
                expires: {
                  month: values.dueMonth,
                  year: values.dueYear
                }
              }
            },
            products: products
          })
        }
      )

      if (response.ok) {
        setIsDeliveryFormSent(true)
        goToPaymentForm()
      } else {
        console.error('Error while submitting form:', response.statusText)
      }
    } catch (error: any) {
      console.error('Error while submitting form:', error.message)
    } finally {
      setSubmitting(false)
    }
  }

  const handleSubmitPayment = async (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      console.log('Attempt to send the form:', values)

      if (
        !values.nameOnTheCard ||
        !values.cardNumber ||
        !values.cardCode ||
        !values.dueYear ||
        !values.dueMonth
      ) {
        alert('All the fields must be filled correctly.')
        return
      }

      const products = plates.map((plate) => {
        return {
          id: plate.id,
          price: plate.preco
        }
      })

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
                number: values.number,
                complement: values.complement
              }
            },
            payment: {
              card: {
                name: values.nameOnTheCard,
                number: values.cardNumber,
                code: values.cardCode,
                expires: {
                  month: values.dueMonth,
                  year: values.dueYear
                }
              }
            },
            products: products
          })
        }
      )

      if (response.ok) {
        const data = await response.json()
        const orderId = data.orderId

        console.log('Order ID (Payment):', orderId)
        updateOrderId(orderId)
        setIsPaymentFormSent(true)
        sentOrder()
      } else {
        console.error('Error while submitting form', response.statusText)
      }
    } catch (error: any) {
      console.error('Error while submitting form:', error.message)
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
        if (activeCart === 'delivery') {
          handleSubmit(values, { setSubmitting })
        }
        if (activeCart === 'payment') {
          handleSubmitPayment(values, { setSubmitting })
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
                validate={(value: string) => {
                  if (!touched.receiver || !value || value.length < 3) {
                    return 'Receiver must have at least 3 characters'
                  }
                }}
                validateOnMount={false}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="address">Adress:</label>
              <Field
                type="text"
                id="address"
                name="address"
                className={errors.address && touched.address ? 'error' : ''}
                validate={(value: string) => {
                  if (!touched.address || !value || value.length < 3) {
                    return 'mandatory field'
                  }
                }}
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor="city">City:</label>
              <Field
                type="text"
                id="city"
                name="city"
                className={errors.city && touched.city ? 'error' : ''}
                validate={(value: string) => {
                  if (!touched.city || !value || value.length < 3) {
                    return 'mandatory field'
                  }
                }}
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
                  type="number"
                  id="number"
                  name="number"
                  className={errors.number && touched.number ? 'error' : ''}
                  validate={(value: string) => {
                    if (!touched.number || !value || value.length < 3) {
                      return 'mandatory field'
                    }
                  }}
                  validateOnMount={false}
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
                validate={(value: string) => {
                  if (!touched.nameOnTheCard || !value || value.length < 3) {
                    return 'Receiver must have at least 3 characters'
                  }
                }}
                validateOnMount={false}
              />
            </InputGroup>

            <SmallInputsGroupWrapper>
              <SmallInputsGroup>
                <label htmlFor="cardNumber">Card number</label>
                <Field
                  type="number"
                  id="cardNumber"
                  name="cardNumber"
                  className={
                    errors.cardNumber && touched.cardNumber ? 'error' : ''
                  }
                  validate={(value: string) => {
                    if (!value) {
                      return 'Card number is required'
                    }
                    if (!/^\d{16}$/.test(value)) {
                      return 'Card number must be exactly 16 digits'
                    }
                  }}
                />
              </SmallInputsGroup>
              <SmallInputsGroup>
                <label htmlFor="cardCode" className="LabelSize">
                  CVV
                </label>
                <Field
                  type="number"
                  id="cardCode"
                  name="cardCode"
                  className={errors.cardCode && touched.cardCode ? 'error' : ''}
                  validate={(value: string) => {
                    if (!value) {
                      return 'CVV is required'
                    }
                    if (!/^\d{3}$/.test(value)) {
                      return 'CVV must be exactly 3 digits'
                    }
                  }}
                />
              </SmallInputsGroup>
            </SmallInputsGroupWrapper>

            <SmallInputsGroupWrapper>
              <SmallInputsGroup>
                <label htmlFor="dueMonth">Due month</label>
                <Field
                  type="number"
                  id="dueMonth"
                  name="dueMonth"
                  className={errors.dueMonth && touched.dueMonth ? 'error' : ''}
                  validate={(value: string) => {
                    if (!value) {
                      return 'Month is required'
                    }
                    if (!/^\d{2}$/.test(value)) {
                      return 'Month must be exactly 2 digits'
                    }
                  }}
                />
              </SmallInputsGroup>
              <SmallInputsGroup>
                <label htmlFor="dueYear">Due year</label>
                <Field
                  type="number"
                  id="dueYear"
                  name="dueYear"
                  className={errors.dueYear && touched.dueYear ? 'error' : ''}
                  validate={(value: string) => {
                    if (!value) {
                      return 'Year is required'
                    }
                    if (!/^\d{2}$/.test(value)) {
                      return 'Year must be exactly 2 digits'
                    }
                  }}
                />
              </SmallInputsGroup>
            </SmallInputsGroupWrapper>
            <SentButton>Finish payment</SentButton>
            <SentButton onClick={returnToDelivery}>
              Return to delivery
            </SentButton>
          </Card>
          <Card
            title="Order sent"
            orderId={orderId}
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
