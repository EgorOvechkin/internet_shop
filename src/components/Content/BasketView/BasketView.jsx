import { Link } from 'react-router-dom'
import Product from '../ProductsListView/Product'
import { connect } from 'react-redux'
import { getProductsByIds } from '../../../actions'
import { LOCALE, PRICE_UNIT } from '../../../constants'
import React, { Component } from 'react'
import {
  orderedProductsSelector,
  summaryPriceSelector,
  orderedProductsIdsSelector
} from '../../../selectors'
import OrderForm from './OrderForm'

function mapStateToProps(state, ownProps) {
  const ids = orderedProductsIdsSelector(state)
  const products = orderedProductsSelector(state)
  const summaryPrice = summaryPriceSelector(state)
  return {
    ids,
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
    this.props.getProductsByIds(this.props.ids)
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
        <h1 className="products-list__title">Оформление зазказа</h1>
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
