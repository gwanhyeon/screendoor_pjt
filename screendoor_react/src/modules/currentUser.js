import {Map} from 'immutable';
import {handleActions, createAction} from 'redux-actions'
import isEmpty from "../authenticate/emptyValidation"

const SET_CURRENT_USER = 'currentUser/SET_CURRENT_USER';

export const setCurrentUser = createAction(SET_CURRENT_USER);

const initialState = Map({
    isAuthenticated:false,
    user:Map({})
})

export default handleActions({
    [SET_CURRENT_USER]: (state,action) => {
        const { user_id,token } = action.payload
        return state.set('user',({"user_id":user_id,"token":token}))
                    .set("isAuthenticated",!isEmpty(action.payload))
    }
},initialState)