import React, { Component } from 'react'
import SigninModal from '../components/SigninModal'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signinActions from '../modules/signinUser'
import * as userActions from '../modules/currentUser'

class SigninContainers extends Component {

    handleChange = (e) => {
        const {signinActions} = this.props;
        signinActions.setSignInUser({'property':e.target.name,'value':e.target.value})
    }
    
    
    handleSubmit = async (e) => {
      const {userActions} = this.props;
        e.preventDefault();
        const {user_id, user_password} = this.props
        const user = {
            user_id: user_id,
            user_password: user_password,
        }
        const response = await fetch('/api/signin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          });
          const body = await response.json();
        userActions.setCurrentUser(body);
    }

  render() {
    const { handleChange, handleSubmit } = this
    const { user_id, user_password } = this.props
    return (
      <SigninModal
        onSubmit={handleSubmit}
        onChange={handleChange}
        user_id={user_id}
        user_password={user_password}/>
    )
  }
}

export default connect(
    (state) => ({
      user_id: state.signinUser.get('user_id'),
      user_password:state.signinUser.get('user_password'),
    }),
    (dispatch) => ({
      signinActions: bindActionCreators(signinActions,dispatch),
      userActions: bindActionCreators(userActions,dispatch)
    })
)(SigninContainers)