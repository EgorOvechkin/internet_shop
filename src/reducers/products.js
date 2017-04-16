export const RECIEVE_PRODUCTS = 'internet_shop/products/recieve_products'
export const RECIEVE_PRODUCT = 'internet_shop/products/recieve_product'

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
      // const id = action.payload.id
      //TODO
      const newPro = {}
      const product = Object.assign({}, Product, action.payload)
      newPro[action.payload.id] = product
      return Object.assign({}, state, newPro)
    case RECIEVE_PRODUCTS:
      const actions = action.payload.map(product => recieveProduct(product))
      return actions.reduce(
        (currentState, currentAction) => reducer(currentState, currentAction),
        state
      )
      // return Object.assign({}, state, { id: recieveProduct() })
    default:
      return state
  }
}

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
