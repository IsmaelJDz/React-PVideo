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
        props.search.map((item) => {
          return <Media
            key={item.get('id')}
            // toJS para convertir a objetos planos de javascript de un mapa
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