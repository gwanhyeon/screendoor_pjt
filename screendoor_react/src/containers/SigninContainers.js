import React, { Component } from 'react'
import SigninModal from '../components/SigninModal'
import UserLogout from '../components/UserLogout'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setAuthToken from '../authenticate/setAuthToken';
import axios from 'axios';
import * as signinActions from '../modules/signinUser'
import * as userActions from '../modules/currentUser'
import * as modalActions from '../modules/modalCtrl'


class SigninContainers extends Component {
    
    handleLogOut = () => {
      const { userActions } = this.props;
      localStorage.removeItem('jwtToken');
      setAuthToken(false);
      userActions.setCurrentUser({})
    }

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
      const {user_id, user_password,modal} = this.props;
      const user = {
            user_id: user_id,
            user_password: user_password,
      }

      axios.post('/api/signin',user)
              .then(res =>{
                const { status } = res.data;
                signinActions.postSignInUser(res.data); // result설정

                if(status === 200){
                  const { token } = res.data;
                  localStorage.setItem('jwtToken',token);
                  setAuthToken(token);
                  modalActions.setModal({'modal':!modal})
                  userActions.setCurrentUser(res.data);  
                }
                
              })
              .catch(err => {
                console.log(err.response)
              })
    }

  render() {
    const { handleChange, handleSubmit, handleOnClick, handleLogOut } = this
    const { user_id, user_password, modal, result, isAuthenticated} = this.props

    let guestLinks = (
    <SigninModal
      onSubmit={handleSubmit}
      onChange={handleChange}
      onClick={handleOnClick}
      user_id={user_id}
      user_password={user_password}
      modal={modal}
      result={result}/>
    )

    let authLinks = (
    <UserLogout onClick={handleLogOut}/>
    )

    return (
      isAuthenticated ? authLinks : guestLinks
    )
  }
}

export default connect(
    (state) => ({
      user_id: state.signinUser.get('user_id'),
      user_password:state.signinUser.get('user_password'),
      result: state.signinUser.get('result'),
      modal: state.modalCtrl.get('modal'),
      isAuthenticated: state.currentUser.get('isAuthenticated')
    }),
    (dispatch) => ({
      signinActions: bindActionCreators(signinActions,dispatch),
      userActions: bindActionCreators(userActions,dispatch),
      modalActions: bindActionCreators(modalActions,dispatch),
    })
)(SigninContainers)