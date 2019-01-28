import currentUser from './currentUser'
import signinUser from './signinUser'
import signupUser from './signupUser'
import modalCtrl from './modalCtrl'
import { combineReducers } from 'redux'

export default combineReducers({
    currentUser,
    signinUser,
    signupUser,
    modalCtrl
});