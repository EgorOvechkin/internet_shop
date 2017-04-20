import Ramda from 'ramda'

export const ADD_TO_BASKET = 'internet_shop/ui/ADD_TO_BASKET'
export const REMOVE_FROM_BASKET = 'internet_shop/ui/REMOVE_FROM_BASKET'
export const SET_ALL_PRODUCTS_COUNT = 'internet_shop/products/SET_ALL_PRODUCTS_COUNT'
export const SET_MIN_PRICE = 'internet_shop/ui/SET_MIN_PRICE'
export const SET_MAX_PRICE = 'internet_shop/ui/SET_MAX_PRICE'
export const TOGGLE_BRAND = 'internet_shop/ui/TOGGLE_BRAND'
export const RESET_FILTER = 'internet_shop/ui/RESET_FILTER'
export const SET_FILTER = 'internet_shop/ui/SET_FILTER'
export const SET_PRODUCTS_СOUNT = 'internet_shop/ui/SET_PRODUCTS_СOUNT'
export const SHOW_TOOLTIP = 'internet_shop/ui/SHOW_TOOLTIP'
export const HIDE_TOOLTIP = 'internet_shop/ui/HIDE_TOOLTIP'
export const SET_PRODCTS_LOADING = 'internet_shop/ui/SET_PRODCTS_LOADING'
export const SET_ORDER_FIELD_VALIDATE = 'internet_shop/ui/SET_ORDER_FIELD_VALIDATE'
export const SET_ORDER_FIELD_VALUE = 'internet_shop/ui/SET_ORDER_FIELD_VALue'

const ui = {
  allProductsCount: 0,
  productsLoading: false,
  basket: {},
  filter: {
    minPrice: 0,
    maxPrice: 1000000,
    brands: []
  },
  enableFilter: false,
  tooltips: {},
  orderForm: {
    name: {
      value: '',
      isValid: true
    },
    email: {
      value: '',
      isValid: true
    },
    phone: {
      value: '',
      isValid: true
    },
    address: {
      value: '',
      isValid: true
    },
    comment: ''
  }
}

export default function reducer(state = ui, action = {}) {
  switch (action.type) {
    case ADD_TO_BASKET:
      return Ramda.assocPath([ 'basket', action.payload ], 1, state)
    case REMOVE_FROM_BASKET:
      return Ramda.dissocPath([ 'basket', action.payload ], state)
    case SET_PRODUCTS_СOUNT:
      return Ramda.assocPath(
        [ 'basket', action.payload.productId ],
        action.payload.count,
        state
      )
    case SHOW_TOOLTIP:
      return Ramda.assocPath([ 'tooltips', action.payload ], true, state)
    case HIDE_TOOLTIP:
      return Ramda.dissocPath([ 'tooltips', action.payload ], state)
    case RESET_FILTER:
      const { allProductsCount, basket } = state
      return Ramda.mergeAll(ui, { allProductsCount }, { basket })
    case SET_ALL_PRODUCTS_COUNT:
      return Ramda.assoc('allProductsCount', action.payload, state)
    case SET_MIN_PRICE:
      return Ramda.assocPath(
        [ 'filter', 'minPrice' ],
        action.payload,
        state
      )
    case SET_MAX_PRICE:
      return Ramda.assocPath(
        [ 'filter', 'maxPrice' ],
        action.payload,
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
    case SET_PRODCTS_LOADING:
      return Ramda.assoc('productsLoading', action.payload, state)
    case SET_ORDER_FIELD_VALUE:
      return Ramda.assocPath(
        [ 'orderForm', action.payload.field, 'value' ],
        action.payload.value,
        state
      )
    case SET_ORDER_FIELD_VALUE:
      return Ramda.assocPath(
        [ 'orderForm', action.payload.field, 'value' ],
        action.payload.value,
        state
      )
    case SET_ORDER_FIELD_VALIDATE:
      return Ramda.assocPath(
        [ 'orderForm', action.payload.field, 'isValid' ],
        action.payload.value,
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

export function removeProductFromBasket(productId) {
  return {
    type: REMOVE_FROM_BASKET,
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

export function setProductsCount(productId, count) {
  return {
    type: SET_PRODUCTS_СOUNT,
    payload: {
      productId,
      count
    }
  }
}
//TODO
export function showTooltip(tooltip) {
  return {
    type: SHOW_TOOLTIP,
    payload: tooltip
  }
}

export function hideTooltip(tooltip) {
  return {
    type: HIDE_TOOLTIP,
    payload: tooltip
  }
}

export function setProductsLoading(isLoading) {
  return {
    type: SET_PRODCTS_LOADING,
    payload: isLoading
  }
}

export function setOrderFieldValue(field, value) {
  return {
    type: SET_ORDER_FIELD_VALUE,
    payload: {
      field,
      value
    }
  }
}

export function setOrderFieldValidate(field, value) {
  return {
    type: SET_ORDER_FIELD_VALIDATE,
    payload: {
      field,
      value
    }
  }
}
