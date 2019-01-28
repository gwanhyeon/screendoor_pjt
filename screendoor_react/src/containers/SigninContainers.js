import React, { Component } from 'react'
import SigninModal from '../components/SigninModal'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signinActions from '../modules/signinUser'
import * as userActions from '../modules/currentUser'
import * as modalActions from '../modules/modalCtrl'


class SigninContainers extends Component {
    
    handleOnClick = () => {
      const {modalActions, modal} = this.props;
      modalActions.setModal({'modal':!modal})
    }
    
    handleChange = (e) => {
      const {signinActions} = this.props;
      signinActions.setSignInUser({'property':e.target.name,'value':e.target.value})
    }
  
    handleSubmit = async (e) => {
      e.preventDefault();
      const {userActions,signinActions,modalActions} = this.props;
      const {user_id, user_password,result,modal} = this.props;
      const user = {
            user_id: user_id,
            user_password: user_password,
            result: result
      }
        const response = await fetch('/api/signin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
          const body = await response.json();
          
          signinActions.postSignInUser(body);
          if(body.status === 200)
            modalActions.setModal({'modal':!modal})
            userActions.setCurrentUser(body);
    }
    
  render() {
    const { handleChange, handleSubmit, handleOnClick } = this
    const { user_id, user_password, modal, result} = this.props
    return (
      
      <SigninModal
        onSubmit={handleSubmit}
        onChange={handleChange}
        onClick={handleOnClick}
        user_id={user_id}
        user_password={user_password}
        modal={modal}
        result={result}/>
    )
  }
}

export default connect(
    (state) => ({
      user_id: state.signinUser.get('user_id'),
      user_password:state.signinUser.get('user_password'),
      result: state.signinUser.get('result'),
      modal: state.modalCtrl.get('modal')
    }),
    (dispatch) => ({
      signinActions: bindActionCreators(signinActions,dispatch),
      userActions: bindActionCreators(userActions,dispatch),
      modalActions: bindActionCreators(modalActions,dispatch),
    })
)(SigninContainers)