import React, { Component } from 'react';
import Media from '../components/media';
import { connect } from 'react-redux';
//import { openModal } from '../../actions/index';
import * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';

class MediaContainer extends Component {

  openModal = (id) => {
    // mismo caso se mando esto a una funcion dentro de la carpeta actions en index
    // this.props.dispatch({
    //   type: 'OPEN_MODAL',
    //   payload: {
    //     mediaId: id
    //   }
    // })
    //this.props.dispatch(openModal(id))
    this.props.openModal(id)
  }
  
  render() {
    return <Media openModal={this.openModal} {...this.props.data.toJS() } />
  }
}

//mapear mi estado y convertirlo en propiedades que voy a enviar a mi componente en este caso Media
//props.id es el id que estamos buscando de la lista de media
// segundo parametro de mapStateToProps es las propiedades que vienene del store
const mapStateToProps = (state, OwnProps) => {
  return {
    data: state.get('data').get('entities').get('media').get(OwnProps.id)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators( actions, dispatch )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer);
