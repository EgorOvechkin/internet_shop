export getProducts from './actions/getProducts'

export {
  recieveProduct,
  recieveProducts,
  //TODO
  dropProducts
} from './reducers/products'

export {
  addProductToBasket,
  resetFilter,
  setAllProductsCount,
  setMaxPrice,
  setMinPrice,
  toggleBrandInFilter,
  setFilter
} from './reducers/ui'
