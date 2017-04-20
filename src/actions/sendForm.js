import { setOrderFormStatus, resetState } from '../actions'

export default function sendForm(ids = []) {
  return async function action(dispatch) {
    console.log(228)
    dispatch(setOrderFormStatus('await'))
    setTimeout(
      () => {
        dispatch(setOrderFormStatus('success'))
      },
      1000
    )
  }
}
