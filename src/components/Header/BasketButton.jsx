import './BasketButton.scss'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Ramda from 'ramda'
function mapStateToProps(state, ownProps) {
  const productInBasket = Ramda.values(Ramda.path([ 'ui', 'basket' ], state)).length
  return {
    productInBasket
  }
}
//TODO
function declOfNum(number, titles) {
  const cases = [ 2, 0, 1, 1, 1, 2 ]
  return titles[
    number % 100 > 4 && number % 100 < 20
    ? 2
    : cases[(number % 10 < 5) ? number % 10 : 5]
  ]
}

@connect(mapStateToProps)
export default class BasketButton extends Component {
  render() {
    return (
      <div className="basket-button">
        <Link to={'/basket'}>
          {
            `В корзине ${this.props.productInBasket} `
            +
            `${
              declOfNum(
                this.props.productInBasket, [
                'товар', 'товара', 'товаров'])
            }`
          }
        </Link>
      </div>
    )
  }
}
