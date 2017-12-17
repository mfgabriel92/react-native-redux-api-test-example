import Login from '../../components/Auth/Login'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { testGET, testPOST } from '../../actions/api'

function mapStateToProps(state) {
  return {
    api: {
      get: state.testGET.data,
      post: state.testPOST
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    testGET,
    testPOST
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)