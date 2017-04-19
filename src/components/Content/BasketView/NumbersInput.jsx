import './NumbersInput.scss'
import Ramda from 'ramda'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import {
  hideTooltip,
  setProductsCount,
  showTooltip
} from '../../../actions'

export class NumbersInput extends Component {
  render() {
    return (
      <div>
        <input
          className={this.props.className}
          onChange={event => {
            if (/\D+/.test(event.target.value)
              && !this.props.isTooltipShowed) {
              console.log('tooltips')
              this.props.showTooltip()
              setTimeout(
                this.props.hideTooltip,//.bind(this),
                this.props.delay
              )
            } else if (!this.props.isTooltipShowed) {
              this.props.onChange(event.target.value)
            }
          }}
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
          value={this.props.value}
        />
        {
          this.props.isTooltipShowed
          && <div>{this.props.tooltipText || 'Принимаются только цифры'}</div>
        }
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const isTooltipShowed = Ramda.path([ 'ui', 'tooltips', 'numbersInput' ], state)
  const productCount = Ramda.path([ 'ui', 'basket', ownProps.productId ], state)
  return {
    isTooltipShowed,
    productCount
  }
}

const mapDispatchToProps = {
  setProductsCount,
  showTooltip,
  hideTooltip
}

@connect(mapStateToProps, mapDispatchToProps)
export default class NumbersInputWithArrows extends Component {
  render() {
    return (
      <div className="numbers-input_with-arrow">
        <div
          className="numbers-input__arrow_up"
          onClick={() => this.props.setProductsCount(
            this.props.productId,
            +this.props.productCount + 1
          )}
        />
        <NumbersInput
          className={"numbers-input"}
          delay={1000}
          isTooltipShowed={this.props.isTooltipShowed}
          showTooltip={() => this.props.showTooltip('numbersInput')}
          hideTooltip={() => this.props.hideTooltip('numbersInput')}
          onChange={value => this.props.setProductsCount(this.props.productId, value)}
          value={this.props.productCount}
          onBlur={() => this.props.setProductsCount(
            this.props.productId,
            +this.props.productCount)
          }
          onFocus={() => this.props.setProductsCount(
            this.props.productId,
            String(this.props.productCount)
          )}
        />
        <div
          className="numbers-input__arrow_down"
          onClick={() => this.props.setProductsCount(
            this.props.productId,
            Math.max(+this.props.productCount - 1, 0)
          )}
        />
      </div>
    )
  }
}
