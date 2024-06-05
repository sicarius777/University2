import React, { useRef, useEffect } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({playState, setPlayState}) => {
  
    const player = useRef(null)

    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlayState(false);
        }
    }

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
      <div className="video-content">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Hgd7vsvrOjk?si=hW5SCD7lnuTNkfy_" 
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
