import { connect } from 'react-redux'
import * as actions from '@/action/cateAction'

export default connect(state => state.get('cate').toJS(), actions)
