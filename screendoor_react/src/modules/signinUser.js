import {Map} from 'immutable';
import {handleActions, createAction} from 'redux-actions'

const SET_SIGNIN_USER = 'signinUser/SET_SIGNIN_USER';
const POST_SIGNIN_USER = 'postRequest/POST_SIGNIN_USER';

export const setSignInUser = createAction(SET_SIGNIN_USER);
export const postSignInUser = createAction(POST_SIGNIN_USER);


const initialState = Map({
    user_id:'',
    user_password:'',
    jwt_token:''
})

const PostAPI = async (url,json) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(json),
    });
    const res = await response.json();
    return res;
};

export default handleActions({
    [SET_SIGNIN_USER]: (state,action) => {
        const {property, value} = action.payload;
        return state.set(property,value)
    },
    [POST_SIGNIN_USER]: (state,action) => {
        const res = this.PostAPI("/api/signin",
            {'user_id':state.get('user_id'),
            'user_password':state.get('user_password')
            })
        return state.set('jwt_token',res.token)
    },
},initialState)