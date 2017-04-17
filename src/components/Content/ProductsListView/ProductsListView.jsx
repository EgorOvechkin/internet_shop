import './ProductsListView.scss'
import ProductFilter from './ProductFilter'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProducts } from '../../../actions'
import React, { Component } from 'react'

function mapStateToProps(state, ownProps) {
  console.log('state: ', state)
  return {}
}

const mapDispatchToProps = {
  getProducts
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ProductsListView extends Component {
  static displayName = 'ProductsListView'
  static propTypes = {
    getProducts: PropTypes.func
  }
  componentWillMount() {
    this.props.getProducts()
  }
  render() {
    return (
      <div className="products-list-view">
        <ProductFilter />
        <div className="product-list-view__list">
          Products List
        </div>
      </div>
    )
  }
}
