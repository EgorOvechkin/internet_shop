import { Route } from 'react-router-dom'
import BusketView from './BusketView'
import React, { Component } from 'react'

export default class Content extends Component {
  render() {
    return (
      <div className="content-main">
        CONTENT
        <Route
          path="/busket"
          component={BusketView}
        />

      </div>
    )
  }
}
