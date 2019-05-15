import React from 'react';
//import Media from './media';
import Media from '../container/media';
import './playlist.css';

function Playlist(props) {
    return (
      <div className="Playlist">
        {
          props.playlist.map((mediaId)=>{
            return <Media openModal={props.handleOpenModal} id={mediaId} key={mediaId} />
          })
        }
      </div>
    )
}

export default Playlist;