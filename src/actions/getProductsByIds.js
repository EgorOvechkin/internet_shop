import { recieveProducts } from '../actions'

export default function getProducts(ids = []) {
  return async function action(dispatch) {
    try {
      const response = await fetch('/products.json')
      if (response.status == 200) {
        let products = await response.json()
        if (ids.length > 0) {
          products = products.filter(product =>
            ids.some(id => id == product.id)
          )
        }
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
