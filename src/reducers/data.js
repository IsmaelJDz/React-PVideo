//const nameInitialState = {}
const data = (state, action) => {
  switch (action.type) {
    //action.payload.query
    case 'SEARCH_VIDEO': {
      const results = []
      if (action.payload.query) {
        //const list = state.data.categories[2].playlist;
        state.data.categories.map((item) => {
          return item.playlist.filter((item) => {
            return item.author.toLowerCase().includes(action.payload.query.toLowerCase()) && results.push(item)
          })
        })
      }
      // const results = list.filter((item) => {
      //   //metodo que traen los strings, textos, basicamente como un if de si el texto trae la condicion buscada
      //   // en el string
      //   return item.author.includes(action.payload.query)
      // })
      return {
        ...state,
        search: results
      }
    }

    default:
      return state
  }
}

export default data;