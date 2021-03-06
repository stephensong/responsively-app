// @flow
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AddDevice from '../../components/DeviceManager/AddDevice';
import * as BrowserActions from '../../actions/browser';

function mapStateToProps(state) {
  return {
    browser: state.browser,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BrowserActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDevice);
