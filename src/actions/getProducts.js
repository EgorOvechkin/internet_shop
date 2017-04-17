import { recieveProducts } from '../actions'

export default function getProducts(skip = 0, count) {
  return async function action(dispatch) {
    try {
      const response = await fetch('/products.json')
      if (response.status == 200) {
        const allProducts = await response.json()
        const products = allProducts.slice(skip, skip + count)
        dispatch(recieveProducts(products))
      } else {
        console.info(`code: ${response.status}, `
        + `message: ${response.statusText}`
        )
      }
    } catch (error) {
      console.error(new Error(error))
      throw new Error(error)
    }
  }
}
