import './ProductsList.scss'
import Product from './Product'
import React, { Component } from 'react'

export default class ProductsList extends Component {
  render() {
    return(
      <div className="product-list">
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
    )
  }
}
