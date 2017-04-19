import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getProductsByIds } from '../../../actions'
import {
  orderedProductsSelector,
  summaryPriceSelector
} from '../../../selectors'
import Product from '../ProductsListView/Product'
import { Link } from 'react-router-dom'
import { priceDecorator } from '../ProductsListView/Product'
import { LOCALE, PRICE_UNIT } from '../../../constants'

// import Ramda from 'ramda'

function mapStateToProps(state, ownProps) {
  // const productIds = Ramda.keys(Ramda.path([ 'ui', 'basket' ], state))
  const products = orderedProductsSelector(state)
  const summaryPrice = summaryPriceSelector(state)
  // const productIds =
  return {
    products,
    summaryPrice
    // allProductsCount
  }
}

const mapDispatchToProps = {
  getProductsByIds
}

@connect(mapStateToProps, mapDispatchToProps)
export default class BasketView extends Component {
  componentWillMount() {

  }
  render() {
    if (this.props.products.length === 0) {
      return (
        <div>
          В вашей корзине ничего нет, но это можно
          <Link to={'/section1'}>
            {' легко исправить'}
          </Link>
        </div>
      )
    }
    return (
      <div>
        {
          this.props.products.map(product =>
            <Product
              key={product.id}
              {...product}
            />
          )
        }
        <span>
          1{`Итого: ${this.props.summaryPrice.toLocaleString(LOCALE)} ${PRICE_UNIT}`}
        </span>
      </div>
    )
  }
}
