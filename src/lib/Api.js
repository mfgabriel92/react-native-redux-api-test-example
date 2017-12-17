export default class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
    const host = `https://jsonplaceholder.typicode.com/${route}/`

    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null)
    options.headers = Api.headers()

    return fetch(host, options).then((res) => {
      return res.ok ? res.json() : res.json().then((err) => { throw err })
    })
  }
}