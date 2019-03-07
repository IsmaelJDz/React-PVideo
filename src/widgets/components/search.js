import React from 'react';
import './search.css';

// function Search(props) {
//   return (
//     <form action=""></form>
//   )
// }


const Search = () => (
  <form action="" className="Search">
    <input 
      className="Search-input" 
      placeholder="Busca tu video favorito"
      type="text" 
    />
  </form>
)

export default Search;