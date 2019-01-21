import {Map} from 'immutable';
import {handleActions, createAction} from 'redux-actions'

const SET_CURRENT_USER = 'currentUser/CURRENT_USER';

export const setCurrentUser = createAction(SET_CURRENT_USER);

const initialState = Map({
    user_id:'',
    token:''
})

export default handleActions({
    [SET_CURRENT_USER]: (state,action) => {
        return state.set('user_id',action.payload.user_id).set('token',action.payload.user_id)
    }
})