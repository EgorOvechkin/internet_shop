import { Route } from 'react-router-dom'
import BasketView from './BasketView'
import React, { Component } from 'react'

export default class Content extends Component {
  render() {
    return (
      <div className="content-main">
        CONTENT
        <Route
          path="/basket"
          component={BasketView}
        />

      </div>
    )
  }
}
