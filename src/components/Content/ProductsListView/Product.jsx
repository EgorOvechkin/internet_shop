import './ProductsList.scss'
import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return(
      <div
        className="product-container"
        key={this.props.id}
      >
        <div className="product-view">
          <div className="product__preview"/>
          <span className="product__title">
            {
              this.props.name
            }
          </span>
          <div>
            <span className="product__price">
              {
                this.props.price
              }
            </span>
            <button className="product__to-basket">В корзину</button>
          </div>
        </div>
      </div>
    )
  }
}
