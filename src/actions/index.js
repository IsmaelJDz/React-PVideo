import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SEARCH_AUTHOR
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