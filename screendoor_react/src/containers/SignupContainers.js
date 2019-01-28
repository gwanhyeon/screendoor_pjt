import React, { Component } from 'react'
import SignupJumbo from '../components/SignupJumbo'
import SignupChildren from '../components/SignupChildren'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as signupActions from '../modules/signupUser'
import { Button } from 'reactstrap';

import SuccessAlert from '../components/SuccessAlert';
import FailureAlert from '../components/FailureAlert';
class SignupContainers extends Component {

  handleChange = (e) => {
    const {signupActions} = this.props;
    signupActions.setSignUpUser({'property':e.target.name,'value':e.target.value})
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const {signupActions} = this.props;
    const {user_id, user_password, user_name, user_git_id,result} = this.props
    const user = {
        user_id: user_id,
        user_password: user_password,
        user_name: user_name,
        user_git_id: user_git_id,
        result: result
    }
    const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const body = await response.json();


      
      console.log("this.body" + body);
      signupActions.postSignUpUser(body)
      // console.log(signupActions.postSignUpUser(body.status));
      
  }
 
  render() {
    const {handleSubmit, handleChange} = this
    const {signupActions} = this.props;
    const { user_id, user_password, user_name, user_git_id,result} = this.props
    let view = null;
    // ID 존재하지 않아 회원가입 완료된 경우200 응답을 받았을 경우
    if(result === 200){
      signupActions.clrSignUpUser();
      view = <SuccessAlert name="회원가입"/>
    }// ID 존재하는 경우
    else if(result === 401 || result === 502){
      view = <FailureAlert name="회원가입"/>
    }
    // 응답받지 않았을경우 기존 폼 뿌려준다. 
    
    
    return(
      <SignupJumbo>
        {view}
        <SignupChildren
          onSubmit={handleSubmit}
          onChange={handleChange}
          user_id={user_id}
          user_password={user_password}
          user_name={user_name}
          user_git_id={user_git_id}/>
      </SignupJumbo>
    
    
    );
  }
}

export default connect(
  (state) => ({
    user_id: state.signupUser.get('user_id'),
    user_password:state.signupUser.get('user_password'),
    user_name:state.signupUser.get('user_name'),
    user_git_id:state.signupUser.get('user_git_id'),
    result:state.signupUser.get('result')
    
  }),
  (dispatch) => ({
    signupActions: bindActionCreators(signupActions,dispatch)
  })
)(SignupContainers)