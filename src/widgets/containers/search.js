import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';
//import { search } from '../../actions/index';
import * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';


class SearchContainer extends Component {

  state = {
    value: 'Luis fonsi'
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.input.value, 'submit')
    // accion que viene de la UI para agregar una cancion que pasa por un action para llegar al reducer
    //this.props.dispatch({
      // type: 'SEARCH_AUTHOR',
      // payload: {
      //   query: this.input.value,
      // }
    //})
    this.props.actions.searchAuthor(this.input.value)
  }

  setInputRef = element => {
    this.input = element;
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    })
  }

  render() {
    return(
      <Search 
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // las acciones en la funcion bindActionCreators son las funciones que vienen del index que simplifica
    // el dispatch y el key actions es el key que se la agregaran dichas funciones
    actions: bindActionCreators( actions, dispatch )
  }
}

//Al utilizar el método connect enviamos de forma automática dispatch para ser utilizado en el componente.
//this.props.dispatch({})
//Solo los smartcomponents se deben conectar con redux

export default connect(null, mapDispatchToProps)(SearchContainer);