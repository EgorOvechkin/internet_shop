import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getProductsByIds } from '../../../actions'
import { orderedProductsSelector } from '../../../selectors'
import Product from '../ProductsListView/Product'
// import Ramda from 'ramda'

function mapStateToProps(state, ownProps) {
  // const productIds = Ramda.keys(Ramda.path([ 'ui', 'basket' ], state))
  const products = orderedProductsSelector(state)
  console.log(products)
  // const productIds =
  return {
    products
    // allProductsCount
  }
}

const mapDispatchToProps = {
  getProductsByIds
}

@connect(mapStateToProps, mapDispatchToProps)
export default class BasketView extends Component {
  componentWillMount() {

  }
  render() {
    return (
      <div>
        {
          this.props.products.map(product =>
            <Product
              key={product.id}
              {...product}
            />
          )
        }
      </div>
    )
  }
}
