import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
//import Playlist from '../playlist/components/playlist';
//import data from '../api.json';
//import data from '../apiTwo.json';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

//Reduer
import reducer from '../reducers/index';
import { Map as map } from 'immutable';

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

const store = createStore(
  reducer,
  map(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
);

//console.log(store.getState());

const homeContainer = document.getElementById('home-container');

render(
  <Provider store={store}>
    <Home />
  </Provider>
, homeContainer);