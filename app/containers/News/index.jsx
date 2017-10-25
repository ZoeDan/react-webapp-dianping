import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appActions from '../../actions/app'

import SearchHeader from '../../components/SearchHeader'
import NewsList from './subpages/List'

class News extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  componentDidMount() {
    this.props.appActionList.menu({
      location:2
    });
  }

  render() {
    const params = this.props.match.params;
    return (
      <div>
        <SearchHeader keyword={params.keyword} history={this.props.history}/>
        <NewsList keyword={params.keyword} category={params.category}/>
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    userinfo:state.userinfo
  }
}

function mapDispatchToProps(dispatch){
  return {
    appActionList:bindActionCreators(appActions,dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
