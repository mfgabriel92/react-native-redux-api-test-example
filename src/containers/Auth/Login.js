import Login from '../../components/Auth/Login'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { testApi } from '../../actions/api'

function mapStateToProps(state) {
  return {
    api: state.testApi.data
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    testApi
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)