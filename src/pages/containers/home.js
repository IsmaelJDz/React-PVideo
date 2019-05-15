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

class Home extends Component {

  state = {
    modalVisible: false,
  }

  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media
    })
  }

  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false,
    }) 
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
          />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <VideoPlayer 
                  autoplay={false}
                  src={this.state.media.src}
                  title={this.state.media.title}
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
    search: searchResults
    //search: state.getIn(['data', 'search'])
  }
}

export default connect(mapStateToProps)(Home)