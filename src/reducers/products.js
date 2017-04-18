import Ramda from 'ramda'

export const RECIEVE_PRODUCTS = 'internet_shop/products/RECIEVE_PRODUCTS'
export const RECIEVE_PRODUCT = 'internet_shop/products/RECIEVE_PRODUCT'

const Product = {
  id: '',
  brand: '',
  name: '',
  category: '',
  price: NaN
}

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case RECIEVE_PRODUCT:
      const product = Ramda.merge(Product, action.payload)
      return Ramda.assoc(action.payload.id, product, state)
    case RECIEVE_PRODUCTS:
      const actions = Ramda.map(recieveProduct, action.payload)
      return Ramda.reduce(reducer, state, actions)
    default:
      return state
  }
}

// export function allProduct

export function recieveProduct(product) {
  return {
    type: RECIEVE_PRODUCT,
    payload: product
  }
}

export function recieveProducts(products) {
  return {
    type: RECIEVE_PRODUCTS,
    payload: products
  }
}

