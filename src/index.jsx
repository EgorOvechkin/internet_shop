import 'babel-polyfill'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import createLogger from 'redux-logger'
import reducers from './reducers'
// import Routes from './routes'
import App from './components/App'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import { applyMiddleware, compose, createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'

const loggerMiddleware = createLogger({
  predicate: (getState, action) => process.env.NODE_ENV !== 'production'
})

// const App = () => (<h1>Hello!!!!!!!!!</h1>)

const store = compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
    routerMiddleware(createHistory())
  )
)(createStore)(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('viewport')
)

