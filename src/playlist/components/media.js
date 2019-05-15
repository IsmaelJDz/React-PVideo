import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';
import { throws } from 'assert';

class Media extends PureComponent {

  //Forma ES7
  state = {
    author: 'IsmaelJdz7'
  }

  //Forma ES6
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     author: props.author
  //   }
  //   //this.handleClick = this.handleClick.bind(this);
  // }

  handleClick = (event) => {
    //console.log(this.props.author)
    // this.setState({
    //   author: 'Isma :)'
    // })
    this.props.openModal(this.props.id);
    
  }

  render(){

    let { title, cover} = this.props;
 
    // const styles = {
    //   container: {
    //   color: '#44546b',
    //   cursor: 'pointer',
    //   width: 260,
    //   border: '1px solid red',
    //   }
    // }

    return(
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img 
            src={cover}
            alt=""
            width={260}
            height={160}  
            className="Media-image"      
          />
          <h3 className="Media-title">{title}</h3>
          <p className="Media-author">{this.state.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;


