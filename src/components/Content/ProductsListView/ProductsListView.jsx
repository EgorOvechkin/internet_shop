import './ProductsListView.scss'
import ProductFilter from './ProductFilter'
import ProductsList from './ProductsList'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProducts } from '../../../actions'
import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'

function mapStateToProps(state, ownProps) {
  // const path = ownProps.location.pathname
  // console.log('section: ', section)
  const products = Object.values(state.products)
  return {
    // path,
    products
  }
}

const mapDispatchToProps = {
  getProducts
}

// @withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class ProductsListView extends Component {
  static displayName = 'ProductsListView'
  static propTypes = {
    getProducts: PropTypes.func
  }
  componentWillMount() {
    this.props.getProducts(0, 6)
  }
  render() {
    return (
      <div className="products-list-view">
        <ProductFilter />
        {/*<div className="product-list-view__list">
          Products List
        </div>*/}
        <ProductsList
          // path={this.props.path}
          products={this.props.products}
        />
      </div>
    )
  }
}
