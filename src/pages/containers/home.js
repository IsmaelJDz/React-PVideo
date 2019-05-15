import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
import { connect } from 'react-redux';
import { List as list } from 'immutable';
import * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';

class Home extends Component {

  // state = {
  //   modalVisible: false,
  // }

  handleOpenModal = (id) => {
    // this.setState({
    //   modalVisible: true,
    //   media
    // })
    //----- Esto se paso a un archibo creador de acciones, basicamente mandarlo a una funcion
    // this.props.dispatch({
    //   type: 'OPEN_MODAL',
    //   payload: {
    //     mediaId: id  
    //   } 
    // })
    this.props.actions.openModal(id)
  }

  handleCloseModal = (event) => {
    //esto se hacia cuando no usabamos redux
    // this.setState({
    //   modalVisible: false,
    // }) 
    // this.props.dispatch({
    //   type: 'CLOSE_MODAL'
    // })

    this.props.actions.closeModal()
  }

  // componentDidCatch(error, info) {
  //   this.setState({
  //     handleError: true,
  //   })
  // }

  render () {
    //Esto se quito por que creamos un componente adicional con los errores, tambien quitamos en el estado
    // el error y comentamos la funcion componentDidCatch
    // if (this.state.handleError) {
    //   return <p>OHH hay un error :(</p>
    // }
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories 
            categories={this.props.categories} 
            handleOpenModal={this.handleOpenModal}
            search={this.props.search}
            isLoading={this.props.isLoading}
          />
          {
            this.props.modal.get('visibility') &&
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <VideoPlayer 
                  autoplay={false}
                  id={this.props.modal.get('mediaId') }
                  //src={this.state.media.src}
                  //title={this.state.media.title}
                />
                <h1>Esto es un portal</h1>
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }

}

function mapStateToProps(state, props) {
  const categories = state.get('data').get('categories').map((categoryId) => {
    return state.get('data').get('entities').get('categories').get(categoryId)
  })
  let searchResults = list()
  const search = state.get('data').get('search') 

  if(search) {
    //Esto va a devolver una lista de mis elementos de media y iterar para encontrar el autor
    const mediaList = state.get('data').get('entities').get('media')
    // Esto devuelve un nuevo mapa, los mapas son objetos, para iterarlos y ponerlos en el DOM es mejor con una lista
    searchResults = mediaList.filter((item) => {
      return item.get('author').toLowerCase().includes(search.toLowerCase())
    }).toList();
  }

  return {
    // con ES6 podriamos solo dejarlo en categories al ser igual tanto la key como el valor
    categories: categories,
    //search: state.get('data').get('search')
    search: searchResults,
    //search: state.getIn(['data', 'search'])
    modal: state.get('modal'),
    isLoading: state.get('isLoading').get('active')
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators( actions, dispatch )
  }
}

//connect recibe mas de 1 un parametro, recibe 4, el segundo es una funcion que recibe el dispatch
export default connect(mapStateToProps, mapDispatchToProps)(Home)