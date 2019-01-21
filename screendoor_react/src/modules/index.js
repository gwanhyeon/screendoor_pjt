import currentUser from './currentUser'
import signinUser from './signinUser'
import signupUser from './signupUser'
import { combineReducers } from 'redux'

export default combineReducers({
    currentUser,
    signinUser,
    signupUser
});