import React, { Component } from 'react'
import SigninModal from '../components/SigninModal'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class SignupContainers extends Component {

  render() {
    return (
      <SigninModal/>
    )
  }
}
