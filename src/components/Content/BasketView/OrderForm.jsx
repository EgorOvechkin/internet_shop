import React, { Component } from 'react'

export default class OrderForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name" />
        <input
          id="name"
          placeholder="name"
        />
        <br/>
        <label htmlFor="email" />
        <input
          id="email"
          placeholder="email"
        />
        <br/>
        <label htmlFor="phone" />
        <input
          id="phone"
          placeholder="phone"
        />
        <br/>
        <label htmlFor="address" />
        <input
          id="address"
          placeholder="address"
        />
        <br/>
        <label htmlFor="comment"/>
        <textarea
          id="comment"
          placeholder="comment"
        />
        <br />
        <input type="submit" />
      </form>
    )
  }
}
