import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
//import Playlist from '../playlist/components/playlist';
//import data from '../api.json';
//import data from '../apiTwo.json';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//Reduer
import reducer from '../reducers/index';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

// const initialState = {
//   //reducer 1
//   data: {
//     //...data,
//     entities: data.entities,
//     categories: data.result.categories,
//     search: [],
//   },
//   //reducer 2
//   modal: {
//     visibility: false,
//     mediaId: null,
//   }
// }


//*****/dispatch metodo con el que enviamos acciones
// Este middleware solo fue para fines educativos
// function logger( { getState, dispatch }) {
//   //console.log(getState().toJS())
//   //next parametro de la funcion metodo para despachar el siguiente el siguiente middleware
//   return (next) => {
//     // la ultima funcion espera que regrese la ejecucion del parametro que tenemos arriba (next)
//     // tememos que regresar next
//     return (action) => {
//       console.log('este es mi viejo estado', getState().toJS())
//       console.log('vamos a enviar esta accion', action);
//       const value = next(action)
//       //el porque se usa toJS() aunque no es recomendable por el performance

//       //basicamente de tener un estado asi
//       //este es mi viejo estado Map {size: 2, _root: ArrayMapNode, 
//       //__ownerID: undefined, __hash: undefined, __altered: false}
//       // con toJS() queda asi
//       // este es mi nuevo estado {data: {…}, modal: {…}}
      

//       // data:
//       // categories: (3) ["1", "2", "3"]
//       // entities: {media: {…}, categories: {…}}
//       // search: "Luis fonsi"
//       // __proto__: Object
//       // modal: {visibility: false, mediaId: null}
//       // __proto__: Object

//       console.log('este es mi nuevo estado', getState().toJS())
//       // si quito este return aparentemente no pasa nada, pero no devolveria un resultado
//       //para que podamos ocuparlo en alguna otro metodo
//       return value
//     }
//   }
// }

// EcmaScript 6
// const logger = ({ getState, dispatch }) => next => acton => {
    // console.log('este es mi viejo estado', getState().toJS())
    // console.log('vamos a enviar esta accion', action);
    // const value = next(action)
    // console.log('este es mi nuevo estado', getState().toJS())
    // return value
//}

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    //si queremos multiples middlewares en logger ponemos una " , " y ponemo el nombre del otro middleware
    applyMiddleware(logger)
  )
  //Este es un Midleware, es un enhacer que es una funcion que va a interceptar todas las acciones y
  // hacer algunas modificaciones.

  //*Middlewares
  //Es una forma de poder interceptar lo que está sucediendo con (redux) 
  //para mejorarlo y/o modificarlo.

  //*Componentes del Middleware
  //Recibe el dispatch y el getState como argumentos y retorna una función.
  //Esta función recibe el método para despachar el siguiente middleware; 
  //se espera que retorne una función que recibe action y llame a next(action)
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

//console.log(store.getState());

const homeContainer = document.getElementById('home-container');

render(
  <Provider store={store}>
    <Home />
  </Provider>
, homeContainer);