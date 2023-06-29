import React, { useEffect, useRef, useState } from 'react'

import video1  from'../assets/video1.mp4';
import { useElementOnScreen } from '../App';



const Intro = () => {
  
    const videoRef=useRef();
    const [playing,setPlaying]=useState(false);
    const handleVideo=()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true);
        }
    };
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
  };
  const isVisibile = useElementOnScreen(options, videoRef);
  useEffect(() => {
    if (isVisibile) {
      if (!playing) {        
        videoRef.current.play();
        setPlaying(true)
      }
    }
    else {
      if (playing) {        
        videoRef.current.pause();
        setPlaying(false)
      }
    }
  }, [isVisibile])
 
    
 
  return (
    <div className='w-full my-32 h-full relative'>
        <video
        className='w-full h-full object-cover'
        src={video1}
        onClick={handleVideo}
        autoPlay
        loop
        
        ref={videoRef}
        
        

        />
       
      

    </div>
  )
}
 export default Intro
