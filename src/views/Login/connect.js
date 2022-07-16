import { connect } from 'react-redux'
import * as actions from '@/action/loginAction'

export default connect(state => state.get('user').toJS(), actions)
