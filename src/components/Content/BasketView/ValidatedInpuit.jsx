import React, { Component } from 'react'

export default class ValidatedInput extends Component {
  render() {
    const conditions = {
      number: value => /^\d*$/.test(value),
      text: () => true
    }
    //TODO default type text
    const validateCondition = this.props.validateCondition
    || conditions[this.props.type] || conditions.text
    return (
      // <div className="numbers-input-container">
      <div>
        <input
          placeholder={this.props.placeholder || ''}
          className={this.props.inputClassName}
          onChange={event => {
            const value = event.target.value
            if (this.props.isTooltipShowed) return
            if (validateCondition(value)) {
              this.props.onChange(value)
            } else {
              this.props.showTooltip()
              setTimeout(
                this.props.hideTooltip,
                this.props.delay || 1000
              )
            }
          }}
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
          value={this.props.value}
        />
        {
          this.props.isTooltipShowed
          && <div className={this.props.tooltipClassName}>
            {this.props.tooltipText || 'Принимаются только цифры'}
          </div>
        }
      </div>
    )
  }
}
