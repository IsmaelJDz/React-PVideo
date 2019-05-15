import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SEARCH_AUTHOR,
  SEARCH_ASYNC_AUTHOR,
  IS_LOADING,
} from '../action-types/index';

export function openModal(mediaId) {
  return {
    type: OPEN_MODAL,
      payload: {
        mediaId
      } 
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  }
}

export function searchAuthor (query) {
  return {
    type: SEARCH_AUTHOR,
      payload: {
      query,
      }
  }
}

export function isLoading(value) {
  return {
    type: IS_LOADING,
    payload: {
      value
    }
  }
}

export function searchAsyncAuthor (query) {
  return (dispatch) => {
    // fetch()
    // XHR
    // axios
    dispatch(isLoading(true))

    setTimeout(() => {

      dispatch(isLoading(false))
      dispatch(searchAuthor(query))
    }, 5000)
  }
}
