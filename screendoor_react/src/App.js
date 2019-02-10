import React, { Component } from 'react'
import MainComponent from './components/MainComponent'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './authenticate/setAuthToken'
import * as userActions from './modules/currentUser'

class App extends Component {
  render(){
    if(localStorage.jwtToken) {
      const { userActions } = this.props
      setAuthToken(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.jwtToken);
      userActions.setCurrentUser({"user_id":decoded.user_id,"token":localStorage.jwtToken})
      
      const currentTime = Date.now() / 1000;
      if(decoded.exp < currentTime) {
        localStorage.removeItem('jwtToken');
        setAuthToken(false);
        userActions.setCurrentUser({})
        window.location.href = '/'
      }
    }
    return (
      <div>
        <MainComponent/>
      </div>
    )
  }
}

export default connect(
  (state) => ({

  }),
  (dispatch) => ({
    userActions: bindActionCreators(userActions,dispatch),
  })
)(App)