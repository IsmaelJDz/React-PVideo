import React, { Component } from 'react';
import Media from '../components/media';
import { connect } from 'react-redux';

class MediaContainer extends Component {
  
  render() {
    return <Media {...this.props.data.toJS() } />
  }
}

//mapear mi estado y convertirlo en propiedades que voy a enviar a mi componente en este caso Media
//props.id es el id que estamos buscando de la lista de media
const mapStateToProps = (state, props) => {
  return {
    data: state.get('data').get('entities').get('media').get(props.id)
  }
}

export default connect(mapStateToProps)(MediaContainer);
