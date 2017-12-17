import * as types from '../actions/types'
import Api from '../lib/Api'

export function testGET() {
  return(dispatch, getState) => {
    return Api.get('users').then((res) => {
      dispatch({
        type: types.TEST_GET,
        data: res
      })
    })
  }
}

export function testPOST(data) {
  return(dispatch, getState) => {
    return Api.post('posts', data).then((res) => {
      dispatch({
        type: types.TEST_POST,
        data: res
      })
    })
  }
}