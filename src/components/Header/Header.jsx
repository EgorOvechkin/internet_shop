import BusketButton from './BusketButton'
import Logo from './Logo'
import NavMenu from '../NavMenu'
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <NavMenu />
        <BusketButton />
      </header>
    )
  }
}
