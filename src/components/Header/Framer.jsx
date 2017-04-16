import './Framer.scss'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Framer extends Component {
  static displayName = 'Framer'
  static PropTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
  }
  render() {
    return (
      <div className="header__framer">
        {this.props.children}
      </div>
    )
  }
}
