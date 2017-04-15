import { COMPANY_NAME } from '../constants'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import React, { Component } from 'react'


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer
          companyName={COMPANY_NAME}
        />
      </div>
    )
  }
}
