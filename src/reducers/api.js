import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const testGET = createReducer({}, {
  [types.TEST_GET](state, action) {
    return action
  }
});

export const testPOST = createReducer({}, {
  [types.TEST_POST](state, action) {
    return action
  }
});