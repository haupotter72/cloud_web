import React,{ useEffect,useCallback, useRef, useState } from 'react'
import {FaCheck} from 'react-icons/fa'
import poster from '../assets/poster2.jpg'
import poster2 from '../assets/poster3.jpg'
import poster4 from '../assets/poster4.jpg'
import poster5 from '../assets/poster5.jpeg'
import poster7 from '../assets/poster7.jpg'
import poster8 from '../assets/poster8.jpg'
import video2  from'../assets/video2.mp4';

import { useElementOnScreen } from '../App';






const Picing = () => {
    // setting video



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
  //setting draw
  




  return (
    <div name='pricing' className='w-full my-2'>
        <div className='w-full h-[150%] bg-zinc-600 absolute  mix-blend-overlay'></div>
      
        <div className='max-w-[1240px] mx-auto py-12'>
            <div className='text-center py-8 text-yellow-100 '>
                <h2 className='text-3xl '>HAPPY ENDING !</h2>
                <h3 className='text-5xl font-bold py-8'>THIS STORY IS END, THANKS AND SEE ALSO </h3>
                <p className='text-3xl'>And so Harry Potter's journey came to an end. Thank you for accompanying in my heart a long journey. Always love you! Hau Potter</p>
            </div>
         
            <div className='grid md:grid-cols-2 '>
                <div className=' bg-indigo-300 text-black  m-4 p-8 rounded-xl shadow-2xl  '>
                <img  className='w-[100%] h-[40%] rounded-xl'rounded-xl  src={poster}/>
                <span className='uppercase text-indigo-700 font-bold rounded-2xl text-sm px-3 py-1'>Harry Potter and the Prisoner of Azkaban</span>
                <div>
                <p className='text-6xl font-bold py-4 flex '>$3000 <span className='text-xl flex flex-col justify-end'>/usd</span></p>

                </div>
                <p className='text-2xl py-8 uppercase text-emerald-500'>harry potter is one actor then i like most, i happt because That.

                </p>
                <div className='text-2xl relative'>
                    <p   className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p  className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <button className='w-full py-2  my-4'>Get Goooo ! </button>
                </div>


                </div>

                 <div className=' bg-sky-300 text-black  m-4 p-8 rounded-xl shadow-2xl  '>
                 <img className='w-[100%] h-[40%] rounded-xl'  src={poster2}/>
                <span className='uppercase text-indigo-700  font-bold rounded-2xl text-sm px-3 py-1'>Harry Potter et la Chambre des Secrets</span>
                <div>
                <p className='text-6xl font-bold py-4 flex '>$100 <span className='text-xl flex flex-col justify-end'>/usd</span></p>

                </div>
                <p className='text-2xl py-8 uppercase text-emerald-500'>harry potter is one actor then i like most, i happt because That.

                </p>
                <div className='text-2xl relative'>
                    <p   className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p  className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <button className='w-full py-2  my-4'>Get Goooo ! </button>
                </div>


                </div>
            </div>
        </div>
         {/* part 2 */}




        <div className='w-full h-[150%] bg-zinc-600 absolute  mix-blend-overlay'></div>
        <div className='max-w-[1240px] mx-auto py-12'>
            <div className='text-center py-8 text-yellow-100 '>
                <h2 className='text-3xl '>HAPPY ENDING !</h2>
                <h3 className='text-5xl font-bold py-8'>THIS STORY IS END, THANKS AND SEE ALSO </h3>
                <p className='text-3xl'>And so Harry Potter's journey came to an end. Thank you for accompanying in my heart a long journey. Always love you! Hau Potter</p>
            </div>
         
            <div className='grid md:grid-cols-2 '>
                <div className=' bg-indigo-300 text-black  m-4 p-8 rounded-xl shadow-2xl  '>
                <img  className='w-[100%] h-[40%] rounded-xl'rounded-xl  src={poster4}/>
                <span className='uppercase text-indigo-700 font-bold rounded-2xl text-sm px-3 py-1'>harry potter and the philosopher's stone</span>
                <div>
                <p className='text-6xl font-bold py-4 flex '>$213 <span className='text-xl flex flex-col justify-end'>/usd</span></p>

                </div>
                <p className='text-2xl py-8 uppercase text-emerald-500'>harry potter is one actor then i like most, i happt because That.

                </p>
                <div className='text-2xl relative'>
                    <p   className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p  className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <button className='w-full py-2  my-4'>Get Goooo ! </button>
                </div>


                </div>

                 <div className=' bg-sky-300 text-black  m-4 p-8 rounded-xl shadow-2xl  '>
                 <img className='w-[100%] h-[40%] rounded-xl'  src={poster5}/>
                <span className='uppercase text-indigo-700  font-bold rounded-2xl text-sm px-3 py-1'>Harry Potter et l'Ordre du Phoenix</span>
                <div>
                <p className='text-6xl font-bold py-4 flex '>$678 <span className='text-xl flex flex-col justify-end'>/usd</span></p>

                </div>
                <p className='text-2xl py-8 uppercase text-emerald-500'>harry potter is one actor then i like most, i happt because That.

                </p>
                <div className='text-2xl relative'>
                    <p   className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p  className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <button className='w-full py-2  my-4'>Get Goooo ! </button>
                </div>


                </div>
            </div>
        </div>

        {/*part 3*/ }

        <div className='w-full py-12 h-[150%] bg-zinc-600 absolute  mix-blend-overlay'></div>
        <div className='max-w-[1240px] mx-auto py-12'>
            <div className='text-center py-8 text-yellow-100 '>
                <h2 className='text-3xl '>HAPPY ENDING !</h2>
                <h3 className='text-5xl font-bold py-8'>THIS STORY IS END, THANKS AND SEE ALSO </h3>
                <p className='text-3xl'>And so Harry Potter's journey came to an end. Thank you for accompanying in my heart a long journey. Always love you! Hau Potter</p>
            </div>
         
            <div className='grid md:grid-cols-2 '>
                <div className=' bg-indigo-300 text-black  m-4 p-8 rounded-xl shadow-2xl  '>
                <img  className='w-[100%] h-[40%] rounded-xl'rounded-xl  src={poster8}/>
                <span className='uppercase text-indigo-700 font-bold rounded-2xl text-sm px-3 py-1'>harry potter and the philosopher's stone</span>
                <div>
                <p className='text-6xl font-bold py-4 flex '>$213 <span className='text-xl flex flex-col justify-end'>/usd</span></p>

                </div>
                <p className='text-2xl py-8 uppercase text-emerald-500'>harry potter is one actor then i like most, i happt because That.

                </p>
                <div className='text-2xl relative'>
                    <p   className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p  className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <button className='w-full py-2  my-4'>Get Goooo ! </button>
                </div>


                </div>

                 <div className=' bg-sky-300 text-black  m-4 p-8 rounded-xl shadow-2xl  '>
                 <img className='w-[100%] h-[40%] rounded-xl'  src={poster7}/>
                <span className='uppercase text-indigo-700  font-bold rounded-2xl text-sm px-3 py-1'>Harry Potter et l'Ordre du Phoenix</span>
                <div>
                <p className='text-6xl font-bold py-4 flex '>$678 <span className='text-xl flex flex-col justify-end'>/usd</span></p>

                </div>
                <p className='text-2xl py-8 uppercase text-emerald-500'>harry potter is one actor then i like most, i happt because That.

                </p>
                <div className='text-2xl relative'>
                    <p   className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p  className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <p className='flex py-2 '><FaCheck className='w-7 mr-5 text-green-600'/> Draco, ! I hate Youu</p>
                    <button className='w-full py-2  my-4'>Get Goooo ! </button>
                </div>


                </div>
            </div>
        </div>

        {/* par4 trailer */}
        <div className='w-full h-[150%] py-16  bg-sky-200 absolute  mix-blend-darken'></div>
    
        <div className='max-w-[1240px] mx-auto py-12'>
      
            <div className='text-center py-8 text-amber-800 '>
                <h2 className='text-3xl '>HAPPY ENDING !</h2>
                <h3 className='text-5xl font-bold py-8'>THIS STORY IS END, THANKS AND SEE ALSO </h3>
               
            </div>
         
            <div className='grid md:grid-cols-1 '>
                <div className=' bg-pink-300 text-lime-800 my-6   rounded-xl shadow-2xl  '>
                <video
                       className='w-full h-full object-cover'
                       src={video2}
                       onClick={handleVideo}
                       muted
                       autoPlay
                      loop
        
                      ref={videoRef}
                  />
                
                <div>
                <p className='text-3xl font-bold pb-6 text-start  '>Harry Potter and the Deathly Hallows Pt. 1 & 2 | Official Trailer</p>

                </div>
                </div>

               
            

                
            </div>
        </div>
      

        
    
    </div>
  )
}
export default Picing;

