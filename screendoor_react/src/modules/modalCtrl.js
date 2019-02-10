import {Map} from 'immutable';
import {handleActions, createAction} from 'redux-actions'

const SET_MODAL = 'modalCtrl/SET_MODAL';

export const setModal = createAction(SET_MODAL);

const initialState = Map({
    modal:false,
})
export default handleActions({
    [SET_MODAL]: (state,action) => {
        const {modal} = action.payload;
        return state.set('modal',modal)
    }
},initialState)