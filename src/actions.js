export getProducts from './actions/getProducts'
export getProductsByIds from './actions/getProductsByIds'

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
  removeProductFromBasket,
  toggleBrandInFilter,
  setFilter,
  setProductsCount,
  showTooltip,
  hideTooltip
} from './reducers/ui'
