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
export default class ProductsView extends Component {
  componentWillMount() {
    this.props.getProducts()
  }
  render() {
    return (
      <div>
        Products List
      </div>
    )
  }
}
