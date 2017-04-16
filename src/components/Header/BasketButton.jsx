import './BasketButton.scss'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'

export default class BasketButton extends Component {
  render() {
    return (
      <div className="basket-button">
        <Link to={'/basket'}>BasketButton</Link>
      </div>
    )
  }
}
