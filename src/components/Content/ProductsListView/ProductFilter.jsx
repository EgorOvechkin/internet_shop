import BrandList from './BrandList'
import React, { Component } from 'react'
import { BRANDS } from '../../../constants'
import Framer from '../../Header/Framer'

export default class ProductFilter extends Component {
  render() {
    return (
      // <Framer>
        <form>
          <h4>Цена</h4>
          <input />
          <span>-</span>
          <input />
            <BrandList
              title="Бренд"
              brands={BRANDS}
            />
          <input type="submit" value="Применить" />
          <button>Сбросить</button>
        </form>
      // </Framer>
    )
  }
}
