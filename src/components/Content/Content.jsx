import './Content.scss'
import BasketView from './BasketView'
import ProductsListView from './ProductsListView'
import { Route } from 'react-router-dom'
import React, { Component } from 'react'

export default class Content extends Component {
  render() {
    return (
      <div className="content-main">
        <Route
          path="/basket"
          component={BasketView}
        />
        <Route
          path="/section1"
          component={ProductsListView}
        />
      </div>
    )
  }
}
