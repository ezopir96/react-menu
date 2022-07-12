import { connect } from 'react-redux'
import * as actions from '@/action/feedAction'

export default connect(state => state.get('feed').toJS(), actions)