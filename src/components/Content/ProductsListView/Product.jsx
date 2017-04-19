import './ProductsList.scss'
import '../BasketView/BasketView.scss'
import { addProductToBasket, removeProductFromBasket } from '../../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { PRICE_UNIT } from '../../../constants'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Ramda from 'ramda'
import NumbersInput from '../BasketView/NumbersInput'

function mapStateToProps(state, ownProps) {
  const section = Ramda.path([ 'match', 'params', 'section' ], ownProps)
  const inBasket = section === 'basket'
  return {
    section,
    inBasket
  }
}

const mapDispatchToProps = {
  addProductToBasket,
  removeProductFromBasket
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
        className={
          this.props.inBasket
          ? 'product-container_basket'
          : 'product-container'
        }
        key={this.props.id}
      >
        <div className={
          this.props.inBasket
          ? 'product-view_basket'
          : 'product-view'
        }>
          <div className={
            this.props.inBasket
            ? 'product__preview_basket'
            : 'product__preview'
          } />
          <div className={
            this.props.inBasket
            ? 'product__info_basket'
            : 'product__info'
          }>
            <Link
              to={`/${this.props.section}/${this.props.id}`}
              className={
                this.props.inBasket
                ? 'product__title_basket'
                : 'product__title'
              }
            >
              {
                this.props.name
              }
            </Link>
            <span className={
              this.props.inBasket
              ? 'product__price_basket'
              : 'product__price'
            }>
              {
                priceDecorator(this.props.price, PRICE_UNIT)
              }
            </span>
            {
              this.props.inBasket
              && <NumbersInput
                productId={this.props.id}
              />
            }
            <button
              className={
                //TODO
                this.props.inBasket
                ? "product__to-basket_basket"
                : "product__to-basket"
              }
              onClick={() => {
                if (this.props.inBasket) {
                  this.props.removeProductFromBasket(this.props.id)
                } else {
                  this.props.addProductToBasket(this.props.id)
                }
              }}
            >
              {this.props.inBasket ? 'Убрать' : 'В корзину'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
