import {Map} from 'immutable';
import {handleActions, createAction} from 'redux-actions'

const SET_SIGNUP_USER = 'currentUser/SET_SIGNUP_USER';

export const setSignUpUser = createAction(SET_SIGNUP_USER);

const initialState = Map({
    user_id:'',
    user_password:'',
    user_age:'',
    user_git_id:'',
})

export default handleActions({
    [SET_SIGNUP_USER]: (state,action) => {
        const { user_id, user_password, user_age, user_git_id} = action.payload
        return state.set('user_id',user_id)
                    .set('user_password',user_password)
                    .set('user_age',user_age)
                    .set('user_git_id',user_git_id)
    }
},initialState)