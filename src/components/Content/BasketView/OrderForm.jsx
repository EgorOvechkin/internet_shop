import './OrderForm.scss'
import ValidatedInput from './ValidatedInpuit.jsx'
import Ramda from 'ramda'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  sendForm,
  setOrderFieldValidate,
  setOrderFieldValue,
  setOrderFormStatus,
} from '../../../actions'

function mapStateToProps(state, ownProps) {
  const formsValues = Ramda.path([ 'ui', 'orderForm' ], state)
  const status = formsValues.status
  const fields = Ramda.values(Ramda.dissoc('comment', Ramda.dissoc('status', formsValues)))
  const isFormValid = fields.every(field => field.isValid && field.value !== '')
  return {
    isFormValid,
    formsValues,
    status
  }
}

const mapDispatchToProps = {
  sendForm,
  setOrderFieldValidate,
  setOrderFieldValue
}

@connect(mapStateToProps, mapDispatchToProps)
export default class OrderForm extends Component {
  componentWillUnmount() {
    setOrderFormStatus('notSended')
  }
  render() {
    const fields = [
      {
        field: 'name',
        placeholder: 'Ваше имя',
        tooltipText: 'Введите своё имя',
        condition: value => value.trim().length > 0
      },
      {
        field: 'email',
        placeholder: 'Email',
        tooltipText: 'Введите валидный email',
        condition: value => value.trim().length > 0
          && value.indexOf('@') > -1
      },
      {
        field: 'phone',
        placeholder: 'Телефон',
        tooltipText: 'Введите телефон в формате +7 999 99 999 99',
        condition: value => (/^[\+\(\)\-\d+]+$/).test(value)
      },
      {
        field: 'address',
        placeholder: 'Адрес доставки',
        tooltipText: 'Введите адрес',
        condition: value => value.trim().length > 0
      }
    ]
    return (
      <form className={"order-form"}>
        {
          fields.map(item =>
            <ValidatedInput
              key={item.field}
              placeholder={item.placeholder}
              inputClassName={"order-form__input"}
              tooltipClassName={"order-form__tooltip"}
              isTooltipShowed={!Ramda.path([item.field, 'isValid'], this.props.formsValues)}
              tooltipText={item.tooltipText}
              onChange={value => this.props.setOrderFieldValue(item.field, value)}
              value={Ramda.path([item.field, 'value'], this.props.formsValues)}
              onBlur={event => {
                if (!item.condition(event.target.value)) {
                  this.props.setOrderFieldValidate(item.field, false)
                }
              }}
              onFocus={() => this.props.setOrderFieldValidate(item.field, true)}
            />)
        }
        <textarea
          placeholder={"Комментарий"}
          className={"order-form__textarea"}
        />
        {
          this.props.status === 'success'
          && <span>Заказ оформлен</span>
        }
        {
          this.props.status === 'await'
          && <span>Обработка</span>
        }
        {
          this.props.status === 'notSended'
          && <div
            className={this.props.isFormValid
              ? 'order-form__send'
              : 'order-form__send_disabled'}
            onClick={() => {
              if (this.props.isFormValid) {
                this.props.sendForm()
              }
            }}
          >
            Оформить заказ
          </div>
        }
      </form>
    )
  }
}
