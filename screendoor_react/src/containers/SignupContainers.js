import React, { Component } from 'react'
import SignupJumbo from '../components/SignupJumbo'
import SignupChildren from '../components/SignupChildren'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as signupActions from '../modules/signupUser'
import { Button } from 'reactstrap';

import SignupSuccess from '../components/SignupSuccess';
import SignupFailure from '../components/SignupFailure';
class SignupContainers extends Component {
  state = {
    user_id: '',
    user_password: '',
    user_age: null,
    user_git_id: '',
    result: null
  }
  handleChange = (e) => {
    const {signupActions} = this.props;
    signupActions.setSignUpUser({'property':e.target.name,'value':e.target.value})
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const {signupActions} = this.props;
    const {user_id, user_password, user_age, user_git_id,result} = this.props
    const user = {
        user_id: user_id,
        user_password: user_password,
        user_age: user_age,
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


      console.log("this.result" + this.state.result);
      console.log("this.body" + body);
      signupActions.postSignUpUser(body)
      // console.log(signupActions.postSignUpUser(body.status));
      
  }
 
  render() {
    const {handleSubmit, handleChange} = this
    const { user_id, user_password, user_age, user_git_id,result} = this.props
    
    let view = null;
    // ID 존재하지 않아 회원가입 완료된 경우200 응답을 받았을 경우
    if(result === 200){
      view = <SignupSuccess></SignupSuccess>
    }// ID 존재하는 경우
    else if(result === 401){
      view = <SignupFailure></SignupFailure>
    }
    // 응답받지 않았을경우 기존 폼 뿌려준다. 
    else{
      view = 
        <SignupJumbo>
        <SignupChildren
          onSubmit={handleSubmit}
          onChange={handleChange}
          user_id={user_id}
          user_password={user_password}
          user_age={user_age}
          user_git_id={user_git_id}
          result={result}/>
         </SignupJumbo>
    }
    
    
    return(
      <div>
        {view}
      </div>
    
    
    );
  }
}

export default connect(
  (state) => ({
    user_id: state.signupUser.get('user_id'),
    user_password:state.signupUser.get('user_password'),
    user_age:state.signupUser.get('user_age'),
    user_git_id:state.signupUser.get('user_git_id'),
    result:state.signupUser.get('result')
    
  }),
  (dispatch) => ({
    signupActions: bindActionCreators(signupActions,dispatch)
  })
)(SignupContainers)