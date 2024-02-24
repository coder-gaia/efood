import Prato from '../Models/Prato'

const getTotalPrice = (plates: Prato[]) => {
  return plates
    .reduce((acumulator, currentValue) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (acumulator += currentValue.preco)
    }, 0)
    .toFixed(2)
}

export default getTotalPrice
