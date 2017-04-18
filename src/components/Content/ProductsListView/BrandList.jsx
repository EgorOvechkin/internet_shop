import './ProductsListView.scss'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

const BrandListEntry = (brand, key, onChange, isChecked) =>
  <div
    className="brand-block"
    key={key}
  >
    <div className="brand-block__empty-space" />
    <input
      checked={isChecked(brand)}
      onChange={event => onChange(event.target.value)}
      className="brand-block__checkbox"
      type="checkbox"
      name={brand}
      value={brand}
    />
    <span className="brand-block__brand-title">{brand}</span>
  </div>

export default class BrandList extends Component {
  static displayName = 'BrandList'
  static propTypes = {
    brands: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string
  }
  render() {
    return (
      <div className="brand-list">
        <h4 className="form-title">
          {this.props.title}
        </h4>
        {
          this.props.brands
          .map((brand, index) =>
            BrandListEntry(
              brand,
              index,
              this.props.addBrand,
              this.props.isChecked
            )
          )
        }
      </div>
    )
  }
}
