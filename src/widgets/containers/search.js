import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';

class SearchContainer extends Component {

  state = {
    value: 'Luis fonsi'
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.input.value, 'submit')
    // accion que viene de la UI para agregar una cancion que pasa por un action para llegar al reducer
    this.props.dispatch({
      type: 'SEARCH_VIDEO',
      payload: {
        query: this.input.value,
      }
    })
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

//Al utilizar el método connect enviamos de forma automática dispatch para ser utilizado en el componente.
//this.props.dispatch({})
//Solo los smartcomponents se deben conectar con redux

export default connect()(SearchContainer);