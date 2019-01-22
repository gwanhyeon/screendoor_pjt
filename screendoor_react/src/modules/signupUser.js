import {Map} from 'immutable';
import {handleActions, createAction} from 'redux-actions'

const SET_SIGNUP_USER = 'currentUser/SET_SIGNUP_USER';

export const setSignUpUser = createAction(SET_SIGNUP_USER);

const initialState = Map({
    user_id:'',
    user_password:'',
    user_age:'',
    user_git_id:'',
    response:''
})

export default handleActions({
    [SET_SIGNUP_USER]: (state,action) => {
        const {property, value} = action.payload;
        return state.set(property,value)
    }
},initialState)