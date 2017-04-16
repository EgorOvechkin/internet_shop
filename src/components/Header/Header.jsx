import './Header.scss'
import BusketButton from './BusketButton'
import Framer from './Framer'
import Logo from './Logo'
import NavMenu from '../NavMenu'
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Framer>
          <Logo />
        </Framer>
        <div className="header__indent" />
        <div className="navigation">
          <NavMenu />
        </div>
        <Framer>
          <BusketButton />
        </Framer>
      </header>
    )
  }
}
