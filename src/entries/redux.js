import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  console.log(title);
  // accion que viene de la UI para agregar una cancion que pasa por un action para llegar al reducer
  store.dispatch({
    type: 'ADD_SONG',
     data: {
       title,
     } 
  })
}

//Estado inicial de la aplicacion
const initialState = [
  {
    "title" : "Despacito"
  },
  {
    "title" : "One more time"
  },
  {
    "title" : "Echame la culpa"
  }
]

//funcion pura que viene de un action para actualizar el store
const reducer = function(state, action) {
  switch (action.type) {
    case 'ADD_SONG':
      //aqui el reducer actualiza el store con la nueva cancion, el primer parametro es el estado
      //anterior y el segundo es el estado actualizado, esto es porque no deben ser estados inmutables,
      //es decir al estado agregarle nuevos elementos, sino que creas uno nuevo con el nuevo elemento.
      return [...state, action.data]
    default:
      // si no hay una action nueva solo devuelve el estado anterior sin cambios.
      return state
  }
}

// se crea el store global de la aplicacion redux, el tercer parametro es un enhancer que es
// funcion especial para ayudar a la app y pueden ser de terceros en este caso es un devToolchrome
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
)

function render() {
  const $container = document.getElementById('playlist')
  //getState Metodo que sirve para traer los datos del estado∫ ya sean nuevos o los anteriores.
  const playlist = store.getState();
  $container.innerHTML = ''

  //Esta parte denderiza la UI son los datos anteriores o nuevos segun sea el caso.
  playlist.forEach((item) => {
    const template = document.createElement('p');
    template.textContent = item.title;
    $container.appendChild(template)
  })
}
render();

function handleChange() {
  render();
}

// Este metodo recibe una funcion manejadora de los cambios en la UI.
store.subscribe(handleChange)

