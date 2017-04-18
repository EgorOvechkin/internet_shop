import './ProductsList.scss'
import Product from './Product'
import React, { Component } from 'react'

export default class ProductsList extends Component {
  render() {
    return(
      <div className="product-list">
        <h1 className="products-list__title">Kатегория товаров</h1>
        <div className="product-list__products-container">
        {
          this.props.products
          .map(product =>
            <Product
              key={product.id}
              {...product }
            />
          )
        }
        </div>
      </div>
    )
  }
}
