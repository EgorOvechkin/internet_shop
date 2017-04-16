import './NavMenu.scss'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class NavMenu extends Component {
  static displayName = 'NavMenu'
  static propTypes = {
    footer: PropTypes.bool
  }
  render() {
    return (
      <div
        className={
          this.props.footer
          ? 'nav-menu_footer'
          : 'nav-menu'
        }
      >
        <NavLink className="nav-menu__link" to="section1">Раздел 1</NavLink>
        <NavLink className="nav-menu__link" to="section2">Раздел 2</NavLink>
        <NavLink className="nav-menu__link" to="section3">Раздел 3</NavLink>
        <NavLink className="nav-menu__link" to="section4">Раздел 4</NavLink>
        <div className="nav-menu__empty-space"></div>
      </div>
    )
  }
}
