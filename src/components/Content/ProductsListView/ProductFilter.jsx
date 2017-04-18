import './ProductsListView.scss'
import BrandList from './BrandList'
import React, { Component } from 'react'
import { BRANDS } from '../../../constants'
import Ramda from 'ramda'
import { connect } from 'react-redux'
import {
  getProducts,
  resetFilter,
  setMaxPrice,
  setMinPrice,
  toggleBrandInFilter,
  setFilter,
  dropProducts
} from '../../../actions'

function mapStateToProps(state, ownProps) {
  const checkedBrands = Ramda.path([ 'ui', 'filter', 'brands' ], state)
  const maxPrice = Ramda.path([ 'ui', 'filter', 'maxPrice' ], state)
  const minPrice = Ramda.path([ 'ui', 'filter', 'minPrice' ], state)
  return {
    checkedBrands,
    maxPrice,
    minPrice
  }
}

const mapDispatchToProps = {
  getProducts,
  resetFilter,
  setMaxPrice,
  setMinPrice,
  toggleBrandInFilter,
  setFilter,
  dropProducts
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ProductFilter extends Component {
  render() {
    return (
      // <Framer>
      <form
        className="products-filter"
      >
        <div className="product-filter__price-interval">
          <h4 className="form-title">Цена</h4>
          <input
            className="product-filter__input"
            onChange={event => this.props.setMinPrice(event.target.value)}
            value={this.props.minPrice}
          />
          <span>{'\u2014'}</span>
          <input
            className="product-filter__input"
            onChange={event => this.props.setMaxPrice(event.target.value)}
            value={this.props.maxPrice}
          />
        </div>
        <BrandList
          isChecked={brand =>
            this.props.checkedBrands
            .some(checkedBrand => checkedBrand == brand)
          }
          addBrand={this.props.toggleBrandInFilter}
          title="Бренд"
          brands={BRANDS}
        />
        <div>
          <input
            onClick={() => {
              this.props.dropProducts()
              this.props.setFilter(true)
              this.props.getProducts(0, 6)
            }}
            className="product-filter__submit"
            type="button"
            value="Применить"
          />
          <input
            value="Сбросить"
            type="button"
            className="product-filter__reset"
            onClick={() => {
              this.props.resetFilter()
              this.props.dropProducts()
              this.props.getProducts(0, 6)
            }}
          />
        </div>
      </form>
      // </Framer>
    )
  }
}
