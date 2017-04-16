import './Footer.scss'
import NavMenu from '../NavMenu'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Footer extends Component {
  static displayName = 'Footer'
  static propTypes = {
    companyName: PropTypes.string
  }
  render() {
    return (
      <footer className="footer">
        <span className="footer__compnay-name">
          {
            `${this.props.companyName} \u2014
            ${new Date().getFullYear()}`
          }
        </span>
        <NavMenu
          footer
        />
      </footer>
    )
  }
}
