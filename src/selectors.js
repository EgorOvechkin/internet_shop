import Ramda from 'ramda'
import { createSelector } from 'reselect'
import { applyFilter } from './actions/getProducts'

export const productsSelector = state => state.products || {}
export const productsArraySelector = state => Ramda.values(state.products) || []
export const basketSelector = state => Ramda.path([ 'ui', 'basket' ], state) || {}
export const filterSelector = state => Ramda.path([ 'ui', 'filter' ], state)
const sortByIndex = Ramda.sortBy(Ramda.prop('index'))

export const filteredProductsSelector = createSelector(
  productsArraySelector,
  filterSelector,
  (products, filter) => {
    if (filter.enable) return sortByIndex(applyFilter(products, filter))
    return sortByIndex(products)
  }
)

export const orderedProductsIdsSelector = createSelector(
  basketSelector,
  basket => Ramda.keys(basket)
)

export const orderedProductsSelector = createSelector(
  productsSelector,
  basketSelector,
  orderedProductsIdsSelector,
  (products, basket, ids) =>
    ids.map(id => Ramda.merge(products[id], { count: basket[id] }))
)

export const summaryPriceSelector = createSelector(
  orderedProductsSelector,
  products => products.reduce((sum, current) => sum + current.price * current.count, 0) || 0
)
