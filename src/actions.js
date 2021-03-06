export getProducts from './actions/getProducts'
export getProductsByIds from './actions/getProductsByIds'
export sendForm from './actions/sendForm'

export {
  recieveProduct,
  recieveProducts,
  //TODO
  dropProducts
} from './reducers/products'

export {
  toogleFilter,
  addProductToBasket,
  resetFilter,
  setAllProductsCount,
  setShowedProductsCount,
  setMaxPrice,
  setMinPrice,
  removeProductFromBasket,
  toggleBrandInFilter,
  // setFilter,
  setProductsCount,
  setProductsLoading,
  showTooltip,
  hideTooltip,
  setOrderFieldValue,
  setOrderFieldValidate,
  setOrderFormStatus,
  resetState
} from './reducers/ui'
