import schema from '../schemas/index';
import { fromJS } from 'immutable';

const initialState = fromJS({
  //reducer 1
  entities: schema.entities,
  categories: schema.result.categories,
  search: '',

});

//const nameInitialState = {}
const data = (state = initialState, action) => {
  switch (action.type) {
    //action.payload.query
    case 'SEARCH_VIDEO': {
      //const results = []
      // if (action.payload.query) {
      //   //const list = state.data.categories[2].playlist;
      //   state.data.categories.map((item) => {
      //     return item.playlist.filter((item) => {
      //       return item.author.toLowerCase().includes(action.payload.query.toLowerCase()) && results.push(item)
      //     })
      //   })
      // }
      // // const results = list.filter((item) => {
      // //   //metodo que traen los strings, textos, basicamente como un if de si el texto trae la condicion buscada
      // //   // en el string
      // //   return item.author.includes(action.payload.query)
      // // })
          //con immutable js ya no necesitamos hacer un nuevo objeto para setearle el estado anterior y sobre ese sobreescribirle el serch
      // return {
      //   ...state,
      //   search: results
      // }
      return state.set('search', action.payload.query)
    }

    default:
      return state
  }
}

export default data;