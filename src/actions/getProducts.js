import {
  recieveProducts,
  setAllProductsCount
} from '../actions'

export default function getProducts(skip = 0, count, withFilter) {
  return async function action(dispatch, getState) {
    try {
      const response = await fetch('/products.json')
      if (response.status == 200) {
        let allProducts = await response.json()
        if (withFilter) {
          allProducts = allProducts.filter(product => {
            const {
              brands,
              maxPrice,
              minPrice
            } = getState().ui.filter
            console.info(minPrice)
            return (
              product.price <= +maxPrice
              && product.price >= +minPrice
              && (brands.length == 0
                || brands.some(brand => brand == product.brand)
              )
            )
          })
        }
        console.info(allProducts)
        dispatch(setAllProductsCount(allProducts.length))
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
