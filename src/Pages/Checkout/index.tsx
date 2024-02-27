import { useEffect, useState } from 'react'
import Card from '../../Components/Card'
import { Button } from '../../Components/Plates/styles'
import { Form, MainRow, SecRow, Wrapper } from './styles'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/Api'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type Props = {
  isVisible: boolean
  returnToCart: () => void
}
const Checkout = ({ isVisible, returnToCart }: Props) => {
  const [isPaymentFormVisible, setIsPaymentFormVisible] = useState(false)
  const [purchase] = usePurchaseMutation()
  const { plates } = useSelector((state: RootReducer) => state.cart)

  const goToPaymentForm = () => {
    setIsPaymentFormVisible(true)
  }

  const returnToAddressform = () => {
    setIsPaymentFormVisible(false)
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNum: '',
      cvv: '',
      dueMonth: '',
      dueYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('this field is mandatory'),
      address: Yup.string().required('this field is mandatory'),
      city: Yup.string().required('this field is mandatory'),
      zipCode: Yup.string().required('this field is mandatory'),
      number: Yup.string().required('this field is mandatory'),
      complement: Yup.string().required('this field is mandatory'),
      cardName: Yup.string().required('this field is mandatory'),
      cardNum: Yup.string().required('this field is mandatory'),
      cvv: Yup.string().required('this field is mandatory'),
      dueMonth: Yup.string().required('this field is mandatory'),
      dueYear: Yup.string().required('this field is mandatory')
    }),
    onSubmit(values) {
      form.validateForm().then((errors) => {
        if (Object.keys(errors).length === 0) {
          purchase({
            delivery: {
              receiver: values.receiver,
              address: {
                description: values.address,
                city: values.city,
                zipCode: values.zipCode,
                number: Number(values.number),
                complement: values.complement
              }
            },
            payment: {
              card: {
                name: values.cardName,
                number: Number(values.cardNum),
                code: Number(values.cvv),
                expires: {
                  month: Number(values.dueMonth),
                  year: Number(values.dueYear)
                }
              }
            },
            products: plates.map((plate) => ({
              id: plate.id,
              price: plate.preco
            }))
          })
        } else {
          alert('invalid form filling')
        }
      })
    }
  })

  const checkIfInputHasError = (fieldName: string) => {
    const isInvalid = fieldName in form.errors
    const isTouched = fieldName in form.touched
    const hasError = isInvalid && isTouched

    return hasError
  }

  return (
    <Form onSubmit={form.handleSubmit}>
      {isVisible && (
        <>
          <Card title={isPaymentFormVisible ? 'Payment' : 'Delivery'}>
            <>
              {!isPaymentFormVisible ? (
                <>
                  <MainRow>
                    <label htmlFor="receiver">Who will receive?</label>
                    <input
                      type="text"
                      name="receiver"
                      id="receiver"
                      value={form.values.receiver}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      className={
                        checkIfInputHasError('receiver') ? 'error' : ''
                      }
                    />

                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={form.values.address}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      className={checkIfInputHasError('address') ? 'error' : ''}
                    />

                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={form.values.city}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      className={checkIfInputHasError('city') ? 'error' : ''}
                    />
                  </MainRow>

                  <SecRow>
                    <div>
                      <label htmlFor="zipCode">Zip-code</label>
                      <InputMask
                        type="text"
                        name="zipCode"
                        id="zipCode"
                        mask="99999-999"
                        value={form.values.zipCode}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                        className={
                          checkIfInputHasError('zipCode') ? 'error' : ''
                        }
                      />
                    </div>

                    <div>
                      <label htmlFor="number">Number</label>
                      <input
                        type="number"
                        name="number"
                        id="number"
                        value={form.values.number}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                        className={
                          checkIfInputHasError('number') ? 'error' : ''
                        }
                      />
                    </div>
                  </SecRow>
                  <MainRow>
                    <label htmlFor="complement">Complement(optional)</label>
                    <input
                      type="text"
                      name="complement"
                      id="complement"
                      className={
                        checkIfInputHasError('complement') ? 'error' : ''
                      }
                    />
                  </MainRow>
                  <Button
                    type="button"
                    onClick={goToPaymentForm}
                    disabled={!form.isValid}
                  >
                    Proceed with payment
                  </Button>
                  <Button type="button" onClick={returnToCart}>
                    Return to cart
                  </Button>
                </>
              ) : (
                <>
                  <Wrapper>
                    <label htmlFor="cardName">Name on the card</label>
                    <input
                      type="text"
                      name="cardName"
                      id="cardName"
                      className={
                        checkIfInputHasError('cardName') ? 'error' : ''
                      }
                    />
                  </Wrapper>
                  <SecRow>
                    <div className="cardNum">
                      <label htmlFor="cardNum">Card Number</label>
                      <InputMask
                        type="text"
                        name="cardNum"
                        id="cardNum"
                        mask="9999 9999 9999 9999"
                        className={
                          checkIfInputHasError('cardNum') ? 'error' : ''
                        }
                      />
                    </div>
                    <div className="cvv">
                      <label htmlFor="cvv">CVV</label>
                      <InputMask
                        type="text"
                        name="cvv"
                        id="cvv"
                        mask="999"
                        className={checkIfInputHasError('cvv') ? 'error' : ''}
                      />
                    </div>
                  </SecRow>

                  <SecRow>
                    <div>
                      <label htmlFor="dueMonth">Due Month</label>
                      <InputMask
                        type="number"
                        name="dueMonth"
                        id="dueMonth"
                        mask="99"
                        className={
                          checkIfInputHasError('dueMonth') ? 'error' : ''
                        }
                      />
                    </div>
                    <div className="year">
                      <label htmlFor="dueYear">Due Year</label>
                      <InputMask
                        type="number"
                        name="dueYear"
                        id="dueYear"
                        mask="99"
                        className={
                          checkIfInputHasError('dueYear') ? 'error' : ''
                        }
                      />
                    </div>
                  </SecRow>

                  <Button type="button">Finish payment</Button>

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
