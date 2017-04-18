import './ProductsList.scss'
import Product from './Product'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class ProductsList extends Component {
  static displayName = 'ProductsList'
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object)
  }
  render() {
    return (
      <div className="product-list">
        <h1 className="products-list__title">Kатегория товаров</h1>
        <div className="product-list__products-container">
          {
            this.props.products
            .map(product =>
              <Product
                key={product.id}
                {...product}
              />
            )
          }
        </div>
      </div>
    )
  }
}
