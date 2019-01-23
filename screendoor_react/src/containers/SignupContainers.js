import React, { Component } from 'react'
import SignupJumbo from '../components/SignupJumbo'
import SignupChildren from '../components/SignupChildren'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as signupActions from '../modules/signupUser'

class SignupContainers extends Component {

  handleChange = (e) => {
    const {signupActions} = this.props;
    signupActions.setSignUpUser({'property':e.target.name,'value':e.target.value})
  }


  handleSubmit = async (e) => {
    e.preventDefault();
    const {signupActions} = this.props;
    const {user_id, user_password, user_age, user_git_id} = this.props
    const user = {
        user_id: user_id,
        user_password: user_password,
        user_age: user_age,
        user_git_id: user_git_id
    }
    const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const body = await response.json();
      signupActions.postSignUpUser(body)
}
 
  render() {
    const {handleSubmit, handleChange} = this
    const { user_id, user_password, user_age, user_git_id} = this.props
    return (
      <SignupJumbo>
          <SignupChildren
            onSubmit={handleSubmit}
            onChange={handleChange}
            user_id={user_id}
            user_password={user_password}
            user_age={user_age}
            user_git_id={user_git_id}/>
      </SignupJumbo>
    )
  }
}

export default connect(
  (state) => ({
    user_id: state.signupUser.get('user_id'),
    user_password:state.signupUser.get('user_password'),
    user_age:state.signupUser.get('user_age'),
    user_git_id:state.signupUser.get('user_git_id'),
  }),
  (dispatch) => ({
    signupActions: bindActionCreators(signupActions,dispatch)
  })
)(SignupContainers)