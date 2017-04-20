import {
  recieveProducts,
  setAllProductsCount,
  setProductsLoading
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
      dispatch(setProductsLoading(true))
      const response = await fetch('/products.json')
      if (response.status == 200) {
        let allProducts = await response.json()
        //TODO ENABLE IN FILTER
        console.log('do', allProducts)
        if (getState().ui.filter.enable) {
          allProducts = applyFilter(allProducts, getState().ui.filter)
          console.log('posle', allProducts)

        }
        dispatch(setAllProductsCount(allProducts.length))
        const products = allProducts.slice(skip, skip + count)
        setTimeout(
          // console.log('oops'),
          () => {
            dispatch(recieveProducts(products))
            dispatch(setProductsLoading(false))
          },
          1000
        )
      } else {
        dispatch(setProductsLoading(false))
        console.info(`code: ${response.status}, `
        + `message: ${response.statusText}`
        )
      }
    } catch (error) {
      dispatch(setProductsLoading(false))
      console.error(new Error(error))
      throw new Error(error)
    }
  }
}
