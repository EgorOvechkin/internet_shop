import PropTypes from 'prop-types'
import React, { Component } from 'react'

const BrandListEntry = (brand, key) =>
  <div key={key}>
    <input
      type="checkbox"
      name={brand}
      value={brand}
    />
    <span>{brand}</span>
  </div>

export default class BrandList extends Component {
  static displayName = 'BrandList'
  static propTypes = {
    brands: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string
  }
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        {
          this.props.brands
          .map((brand, index) => BrandListEntry(brand, index))
        }
      </div>
    )
  }
}
