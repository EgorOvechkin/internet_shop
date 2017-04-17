import './ProductsListView.scss'
import ProductFilter from './ProductFilter'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProducts } from '../../../actions'
import React, { Component } from 'react'
import ProductsList from './ProductsList'

function mapStateToProps(state, ownProps) {
  // console.log('state: ', state)
  const products = Object.values(state.products)
  return {
    products
  }
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
    this.props.getProducts(0, 6)
  }
  render() {
    return (
      <div className="products-list-view">
        <ProductFilter />
        {/*<div className="product-list-view__list">
          Products List
        </div>*/}
        <ProductsList products={this.props.products}/>
      </div>
    )
  }
}
