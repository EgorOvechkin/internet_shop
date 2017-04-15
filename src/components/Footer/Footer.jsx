import NavMenu from '../NavMenu'
import React, { Component, PropTypes } from 'react'

export default class App extends Component {
  static displayName = 'Footer'
  static propTypes = {
    companyName: PropTypes.string
  }
  render() {
    return (
      <footer className="footer">
        <span className="footer__compnay-name">
          {this.props.companyName}
        </span>
        <NavMenu />
      </footer>
    )
  }
}
