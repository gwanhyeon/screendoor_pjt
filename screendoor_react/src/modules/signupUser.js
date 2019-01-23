import {Map} from 'immutable';
import {handleActions, createAction} from 'redux-actions'

const SET_SIGNUP_USER = 'signupUser/SET_SIGNUP_USER';
const POST_SIGNUP_USER = 'signupUser/POST_SIGNUP_USER';


export const setSignUpUser = createAction(SET_SIGNUP_USER);
export const postSignUpUser = createAction(POST_SIGNUP_USER);

const initialState = Map({
    user_id:'',
    user_password:'',
    user_age:'',
    user_git_id:'',
    result:''
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
    }
},initialState)