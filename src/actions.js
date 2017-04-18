export getProducts from './actions/getProducts'

export {
  recieveProduct,
  recieveProducts
} from './reducers/products'

export {
  addProductToBasket,
  resetFilter,
  setMaxPrice,
  setMinPrice,
  toggleBrandInFilter
} from './reducers/ui'
