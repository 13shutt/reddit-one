import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Routers from './Routers'

export default withRouter(connect()(Routers))