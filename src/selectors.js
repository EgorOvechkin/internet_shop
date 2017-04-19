import Ramda from 'ramda'
import { createSelector } from 'reselect'

export const productsSelector = state => state.products || {}
export const basketSelector = state => Ramda.path([ 'ui', 'basket'], state) || {}
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
  // state => Ramda.path([ 'ui', basket ]),
  // basket =>
  // state => Ramda.keys(Ramda.path([ 'ui', 'basket' ], state)),

)
