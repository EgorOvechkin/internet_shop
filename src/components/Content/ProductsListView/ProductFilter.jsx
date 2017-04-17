import './ProductsListView.scss'
import BrandList from './BrandList'
import React, { Component } from 'react'
import { BRANDS } from '../../../constants'
import Framer from '../../Header/Framer'

export default class ProductFilter extends Component {
  render() {
    return (
      // <Framer>
      <form
        className="products-filter"
      >
        <div className="product-filter__price-interval">
          <h4 className="form-title">Цена</h4>
          <input className="product-filter__input" />
          <span>{'\u2014'}</span>
          <input className="product-filter__input" />
        </div>
        <BrandList
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
