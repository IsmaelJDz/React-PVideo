import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../../widgets/containers/search';
import Media from '../../playlist/components/media';

function Categories(props) {
  return (
    <div className="Categories">
      <Search />
      { 
        props.isLoading &&
        <p>Buscando tus videos favoritos... 🔎</p>
      }
      {
        props.search.map((item) => {
          //Esta seria la opcion mas correcta ya que no se recomienda usar el toJS
          // <Media
          //   title  = {item.get('title')}
          //   author = {item.get('author')}
          //   type   = {item.get('type')}
          //   cover  = {item.get('cover')}
          //   src    = {item.get('src')}
          //   id     = {item.get('id')}
          //   key    = {item.get('id')}
          // />
          return <Media openModal={props.handleOpenModal}
            key={item.get('id')}
            // toJS para convertir de mapa a objetos planos de javascript de un mapa a una lista
            // para transformar el objeto immutable a un objeto plano JacaScript
            //objetos planos como objetos que no tienen definido propiedades o métodos 
            {...item.toJS()} />
        })
      }
      {
        props.categories.map((item)=>{
          return (
            <Category 
              key={item.get('id')} 
              {...item.toJS()} 
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories;