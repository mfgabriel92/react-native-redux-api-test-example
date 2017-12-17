import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './src/reducers'
import AppContainer from './src/containers/AppContainer'

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
    )
  )

  return createStore(reducer, initialState, enhancer)
}

export default class Root extends Component {
  render () {
    return (
      <Provider store={configureStore()}>
        <AppContainer/>
      </Provider>
    )
  }
}