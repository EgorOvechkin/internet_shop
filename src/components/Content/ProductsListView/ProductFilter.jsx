import './ProductsListView.scss'
import BrandList from './BrandList'
import React, { Component } from 'react'
import { BRANDS } from '../../../constants'
import Ramda from 'ramda'
import { connect } from 'react-redux'
import {
  toggleBrandInFilter,
  setMaxPrice,
  setMinPrice
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
  setMinPrice,
  setMaxPrice,
  toggleBrandInFilter
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
            className="product-filter__submit"
            type="submit"
            value="Применить"
          />
          <button className="product-filter__reset">
            Сбросить
          </button>
        </div>
      </form>
      // </Framer>
    )
  }
}
