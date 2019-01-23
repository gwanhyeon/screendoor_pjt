import {Map} from 'immutable';
import {handleActions, createAction} from 'redux-actions'

const SET_SIGNIN_USER = 'signinUser/SET_SIGNIN_USER';
const POST_SIGNIN_USER = 'signinUser/POST_SIGNIN_USER';
export const setSignInUser = createAction(SET_SIGNIN_USER);
export const postSignInUser = createAction(POST_SIGNIN_USER);

const initialState = Map({
    user_id:'',
    user_password:'',
    result: null
})
export default handleActions({
    [SET_SIGNIN_USER]: (state,action) => {
        const {property, value} = action.payload;
        return state.set(property,value)
        
    },[POST_SIGNIN_USER]: (state,action) => {
        console.log(action.payload)
        const {status} = action.payload;
        return state.set('result',status)
    }
},initialState)