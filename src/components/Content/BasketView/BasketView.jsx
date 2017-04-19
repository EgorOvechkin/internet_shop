import { Link } from 'react-router-dom'
import Product from '../ProductsListView/Product'
import { connect } from 'react-redux'
import { getProductsByIds } from '../../../actions'
import { LOCALE, PRICE_UNIT } from '../../../constants'
import React, { Component } from 'react'
import {
  orderedProductsSelector,
  summaryPriceSelector
} from '../../../selectors'
import OrderForm from './OrderForm'

function mapStateToProps(state, ownProps) {
  const products = orderedProductsSelector(state)
  const summaryPrice = summaryPriceSelector(state)
  return {
    products,
    summaryPrice
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
          {`Итого: ${this.props.summaryPrice.toLocaleString(LOCALE)} ${PRICE_UNIT}`}
        </span>
        <OrderForm />
      </div>
    )
  }
}
