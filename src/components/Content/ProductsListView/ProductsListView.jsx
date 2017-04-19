import './ProductsListView.scss'
import ProductFilter from './ProductFilter'
import ProductsList from './ProductsList'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProducts } from '../../../actions'
import React, { Component } from 'react'
// import { applyFilter } from '../../../actions/getProducts'

function mapStateToProps(state, ownProps) {
  const enableFilter1 = state.ui.enableFilter
  const products = //enableFilter
    //? applyFilter(Object.values(state.products), state.ui.filter):
    Object.values(state.products)
  const allProductsCount = state.ui.allProductsCount
  return {
    products,
    allProductsCount
  }
}

const mapDispatchToProps = {
  getProducts
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ProductsListView extends Component {
  static displayName = 'ProductsListView'
  static propTypes = {
    getProducts: PropTypes.func,
    products: PropTypes.arrayOf(PropTypes.object)
  }
  componentWillMount() {
    this.props.getProducts(0, 6)
  }
  render() {
    return (
      <div className="products-list-view">
        <ProductFilter />
        <ProductsList
          products={this.props.products}
        />
        <button
          disabled={this.props.products.length === this.props.allProductsCount}
          onClick={() => this.props.getProducts(this.props.products.length, 6)}
        >
          SHOW MORE!
        </button>
      </div>
    )
  }
}
