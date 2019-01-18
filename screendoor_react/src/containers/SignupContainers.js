import React, { Component } from 'react'
import SignupJumbo from '../components/SignupJumbo'
import SignupChildren from '../components/SignupChildren'
export default class SignupContainers extends Component {
  render() {
    return (
      <SignupJumbo>
          <SignupChildren/>
      </SignupJumbo>
    )
  }
}
