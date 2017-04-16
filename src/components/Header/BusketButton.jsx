import './BusketButton.scss'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'

export default class BusketButton extends Component {
  render() {
    return (
      <div className="busket-button">
        <Link to={'/busket'}>BusketButton</Link>
      </div>
    )
  }
}
