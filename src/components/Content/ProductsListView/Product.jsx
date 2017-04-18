import './ProductsList.scss'
import { addProductToBasket } from '../../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { PRICE_UNIT } from '../../../constants'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Ramda from 'ramda'

function mapStateToProps(state, ownProps) {
  const section = Ramda.path([ 'match', 'params', 'section' ], ownProps)
  return {
    section
  }
}

const mapDispatchToProps = {
  addProductToBasket
}

const priceDecorator = (price, unit) => {
  if (price < 1000) return `${price} ${unit}`
  return `${Math.floor(price / 1000)}  ${price % 1000} ${unit}`
}

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class Product extends Component {
  render() {
    return (
      <div
        className="product-container"
        key={this.props.id}
      >
        <div className="product-view">
          <div className="product__preview"/>
          <div className="product__info">
            <Link
              to={`/${this.props.section}/${this.props.id}`}
              className="product__title"
            >
              {
                this.props.name
              }
            </Link>
            <span className="product__price">
              {
                priceDecorator(this.props.price, PRICE_UNIT)
              }
            </span>
            <button
              className="product__to-basket"
              onClick={() => {
                this.props.addProductToBasket(this.props.id)
              }}
            >
              В корзину
            </button>
          </div>
        </div>
      </div>
    )
  }
}
