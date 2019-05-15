export function openModal(mediaId) {
  return {
    type: 'OPEN_MODAL',
      payload: {
        mediaId
      } 
  }
}

export function closeModal() {
  return {
    type: 'CLOSE_MODAL',
  }
}

export function searchAuthor (query) {
  return {
    type: 'SEARCH_AUTHOR',
      payload: {
      query,
      }
  }
}