import {Map} from 'immutable';
import {handleActions, createAction} from 'redux-actions'

const SET_SIGNIN_USER = 'signinUser/SET_SIGNIN_USER';

export const setSignInUser = createAction(SET_SIGNIN_USER);

const initialState = Map({
    user_id:'',
    user_password:'',
})

export default handleActions({
    [SET_SIGNIN_USER]: (state,action) => {
        return state.set('user_id',action.payload.user_id).set('user_password',action.payload.user_password)
    }
},initialState)