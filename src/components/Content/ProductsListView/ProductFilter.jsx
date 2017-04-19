import './ProductsListView.scss'
import { BRANDS } from '../../../constants'
import BrandList from './BrandList'
import { NumbersInput } from '../BasketView/NumbersInput'
import Ramda from 'ramda'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import {
  dropProducts,
  getProducts,
  resetFilter,
  setFilter,
  setMaxPrice,
  setMinPrice,
  toggleBrandInFilter,
  showTooltip,
  hideTooltip
} from '../../../actions'

function mapStateToProps(state, ownProps) {
  const checkedBrands = Ramda.path([ 'ui', 'filter', 'brands' ], state)
  const maxPrice = Ramda.path([ 'ui', 'filter', 'maxPrice' ], state)
  const minPrice = Ramda.path([ 'ui', 'filter', 'minPrice' ], state)
  const isTooltipShowed = {
    minPrice: Ramda.path([ 'ui', 'tooltips', 'minPrice' ], state),
    maxPrice: Ramda.path([ 'ui', 'tooltips', 'maxPrice' ], state)
  }
  return {
    checkedBrands,
    maxPrice,
    minPrice,
    isTooltipShowed
  }
}

const mapDispatchToProps = {
  getProducts,
  resetFilter,
  setMaxPrice,
  setMinPrice,
  toggleBrandInFilter,
  setFilter,
  dropProducts,
  showTooltip,
  hideTooltip
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
          <NumbersInput
            inputClassName={"product-filter__input"}
            tooltipClassName={"numbers-input__tooltip"}
            delay={1000}
            isTooltipShowed={this.props.isTooltipShowed.minPrice}
            showTooltip={() => this.props.showTooltip('minPrice')}
            hideTooltip={() => this.props.hideTooltip('minPrice')}
            onChange={value => this.props.setMinPrice(value)}
            value={this.props.minPrice}
            onBlur={() => this.props.setMinPrice(+this.props.minPrice)}
            onFocus={() => this.props.setMinPrice(String(this.props.minPrice))}
          />
          <span>{'\u2014'}</span>
          <NumbersInput
            inputClassName={"product-filter__input"}
            tooltipClassName={"numbers-input__tooltip"}
            delay={1000}
            isTooltipShowed={this.props.isTooltipShowed.maxPrice}
            showTooltip={() => this.props.showTooltip('maxPrice')}
            hideTooltip={() => this.props.hideTooltip('maxPrice')}
            onChange={value => this.props.setMaxPrice(value)}
            value={this.props.maxPrice}
            onBlur={() => this.props.setMaxPrice(+this.props.maxPrice)}
            onFocus={() => this.props.setMaxPrice(String(this.props.maxPrice))}
          />
          {/*<input
            className="product-filter__input"
            onChange={event => this.props.setMaxPrice(event.target.value)}
            value={this.props.maxPrice}
          />*/}
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
