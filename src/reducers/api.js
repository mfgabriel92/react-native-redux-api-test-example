import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const testApi = createReducer({}, {
  [types.TEST_API](state, action) {
    return action
  }
});