import {Map} from 'immutable';
import {handleActions, createAction} from 'redux-actions'

const SET_CURRENT_USER = 'currentUser/SET_CURRENT_USER';

export const setCurrentUser = createAction(SET_CURRENT_USER);

const initialState = Map({
    user_id:'',
    token:''
})

export default handleActions({
    [SET_CURRENT_USER]: (state,action) => {
        const {user_id, token} = action.payload
        return state.set('user_id',user_id).set('token',token)
    }
},initialState)