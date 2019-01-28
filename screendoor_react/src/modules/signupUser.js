import {Map} from 'immutable';
import {handleActions, createAction} from 'redux-actions'

const SET_SIGNUP_USER = 'signupUser/SET_SIGNUP_USER';
const POST_SIGNUP_USER = 'signupUser/POST_SIGNUP_USER';
const CLR_SIGNUP_USER = 'signupUser/CLR_SIGNUP_USER';


export const setSignUpUser = createAction(SET_SIGNUP_USER);
export const postSignUpUser = createAction(POST_SIGNUP_USER);
export const clrSignUpUser = createAction(CLR_SIGNUP_USER);

const initialState = Map({
    user_id:'',
    user_password:'',
    user_name:'',
    user_git_id:'',
    result: null
})

export default handleActions({
    [SET_SIGNUP_USER]: (state,action) => {
        const {property, value} = action.payload;
        return state.set(property,value)
    },
    [POST_SIGNUP_USER]: (state,action) => {
        console.log(action.payload)
        const {status} = action.payload;
        return state.set('result',status)
    },
    [CLR_SIGNUP_USER]: (state,action) => {
        return state.set('user_id','')
            .set('user_password','')
            .set('user_name','')
            .set('user_git_id','')
    }
},initialState)