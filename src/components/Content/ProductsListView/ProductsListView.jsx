import './ProductsListView.scss'
import ProductFilter from './ProductFilter'
import ProductsList from './ProductsList'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  getProducts
} from '../../../actions'
import { filteredProductsSelector } from '../../../selectors'
import React, { Component } from 'react'

function mapStateToProps(state, ownProps) {
  const loading = state.ui.productsLoading
  const products = filteredProductsSelector(state)
  const allProductsCount = state.ui.allProductsCount
  const showedProductBlockCount = state.ui.showedProductBlockCount
  return {
    products,
    allProductsCount,
    loading,
    showedProductBlockCount
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
    products: PropTypes.arrayOf(PropTypes.object),
    resetFilter: PropTypes.func
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
          buttonDisabled={this.props.products.length === this.props.allProductsCount}
          showMore={() => {
            // setShowedProductsCount(this.props.showedProductBlockCount + 1)
            this.props.getProducts(this.props.products.length, 6)
          }}
          loading={this.props.loading}
          //TODO
          buttonText={`Показать ещё ${this.props.allProductsCount - this.props.products.length >= 6 ? 6 : this.props.allProductsCount % 6} товаров`}
        />
      </div>
    )
  }
}
