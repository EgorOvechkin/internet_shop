import Ramda from 'ramda'

export const ADD_TO_BASKET = 'internet_shop/ui/ADD_TO_BASKET'
export const SET_ALL_PRODUCTS_COUNT = 'internet_shop/products/SET_ALL_PRODUCTS_COUNT'
export const SET_MIN_PRICE = 'internet_shop/ui/SET_MIN_PRICE'
export const SET_MAX_PRICE = 'internet_shop/ui/SET_MAX_PRICE'
export const TOGGLE_BRAND = 'internet_shop/ui/TOGGLE_BRAND'
export const RESET_FILTER = 'internet_shop/ui/RESET_FILTER'
export const SET_FILTER = 'internet_shop/ui/SET_FILTER'

const ui = {
  allProductsCount: 0,
  basket: {},
  filter: {
    minPrice: 0,
    maxPrice: 1000000,
    brands: []
  },
  enableFilter: false
}

export default function reducer(state = ui, action = {}) {
  switch (action.type) {
    case ADD_TO_BASKET:
      return Ramda.assocPath([ 'basket', action.payload ], 1, state)
    case RESET_FILTER:
      const { allProductsCount, basket } = state
      return Ramda.mergeAll(ui, { allProductsCount }, { basket })
    case SET_ALL_PRODUCTS_COUNT:
      return Ramda.assoc('allProductsCount', action.payload, state)
    case SET_MIN_PRICE:
      return Ramda.assocPath(
        [ 'filter', 'minPrice' ],
        action.payload.replace(/\D/, ''),
        state
      )
    case SET_MAX_PRICE:
      return Ramda.assocPath(
        [ 'filter', 'maxPrice' ],
        action.payload.replace(/\D/, ''),
        state
      )
    case SET_FILTER:
      return Ramda.assoc('enableFilter', action.payload, state)
    case TOGGLE_BRAND:
      const brands = Ramda.path([ 'filter', 'brands' ], state) || []
      let newBrands = brands.concat(action.payload)
      if (brands.some(brand => brand == action.payload)) {
        newBrands = brands.filter(brand => brand != action.payload)
      }
      return Ramda.assocPath(
        [ 'filter', 'brands' ],
        newBrands,
        state
      )
    default:
      return state
  }
}

export function addProductToBasket(productId) {
  return {
    type: ADD_TO_BASKET,
    payload: productId
  }
}

export function setMinPrice(price) {
  return {
    type: SET_MIN_PRICE,
    payload: price
  }
}

export function setMaxPrice(price) {
  return {
    type: SET_MAX_PRICE,
    payload: price
  }
}

export function toggleBrandInFilter(brand) {
  return {
    type: TOGGLE_BRAND,
    payload: brand
  }
}

export function resetFilter() {
  return {
    type: RESET_FILTER
  }
}

export function setAllProductsCount(count) {
  return {
    type: SET_ALL_PRODUCTS_COUNT,
    payload: count
  }
}

export function setFilter(enable) {
  return {
    type: SET_FILTER,
    payload: enable
  }
}
