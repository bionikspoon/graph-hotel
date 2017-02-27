import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import ThemeProvider from './containers/ThemeProvider'
import App from './containers/App'
import './index.css'
import configureStore from './store'
import init from './init'

init()

ReactDOM.render(
  <Provider store={configureStore()}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)
