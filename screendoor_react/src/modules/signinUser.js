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
        const {property, value} = action.payload;
        return state.set(property,value)
    }
},initialState)