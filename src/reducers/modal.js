import { fromJS } from 'immutable';
import { OPEN_MODAL, CLOSE_MODAL } from '../action-types/index';

const initialState = fromJS({
    //reducer 
  visibility: false,
  mediaId: null,
  
})

//REDUCER
function modal (state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      //merge para mezclar mi mapa anteripor con un nuevo objeto
      return state.merge({
        visibility: true,
        mediaId: action.payload.mediaId,
      })
    case CLOSE_MODAL:
      return state.set('visibility', false)
    default:
      return state
  }
}

export default modal;