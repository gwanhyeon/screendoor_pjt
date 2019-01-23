import React, { Component } from 'react'
import SignupJumbo from '../components/SignupJumbo'
import SignupChildren from '../components/SignupChildren'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as signupActions from '../modules/signupUser'

class SignupContainers extends Component {

  handleInit = async(e) =>{
  

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
      this.result = body.status;
      console.log("this.result" + this.result);
      console.log("this.result" + body);
      signupActions.postSignUpUser(body)
}
 
  render() {
    const {handleSubmit, handleChange, result} = this
    const { user_id, user_password, user_age, user_git_id} = this.props
    // ID 존재하지 않아 회원가입 완료된 경우200 응답을 받았을 경우
    if(result === 200){
    return (
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
    )
    // ID 존재하는 경우
    }else if(result === 401){
      return(
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
      )
    }
    // 응답받지 않았을경우 기존 폼 뿌려준다. 
    else{
      return(
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
      )

    }
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