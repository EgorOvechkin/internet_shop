import {
  recieveProducts,
  setAllProductsCount
} from '../actions'

export function applyFilter(products, filter) {
  return products.filter(product => {
    const {
      brands,
      maxPrice,
      minPrice
    } = filter
    return (
      product.price <= +maxPrice
      && product.price >= +minPrice
      && (brands.length == 0
        || brands.some(brand => brand == product.brand)
      )
    )
  })
}

export default function getProducts(skip = 0, count) {
  return async function action(dispatch, getState) {
    try {
      const response = await fetch('/products.json')
      if (response.status == 200) {
        let allProducts = await response.json()
        //TODO ENABLE IN FILTER
        if (getState().ui.enableFilter) {
          allProducts = applyFilter(allProducts, getState().ui.filter)
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
