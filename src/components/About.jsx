import React from 'react'
import hr2 from '../assets/hr2.jpg'
import hr3 from '../assets/hr3.jpg'
import hr4 from '../assets/hr4.jpg'
import hr5 from '../assets/hr5.jpg'
import hr1 from '../assets/hr1.jpg'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto '>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trusted by developers Hau Potter across the world</h2>
                <p className='text-3xl py-6 text-green-600'>Harry Potter is the  best Movie, I Like It very Much !</p>
            </div>


            <div className='  grid md:grid-cols-4 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl  bg-cyan-200 '>
                  <p className='text-6xl font-bold text-indigo-600 pb-2'> 1005</p>
                  <p className='text-zinc-800 mt-2 text-3xl'>Completion</p>

            </div>

             <div className='border py-8 rounded-xl shadow-xl bg-cyan-200'>
                  <p className='text-6xl font-bold text-indigo-600 pb-2'> 24/7</p>
                  <p className='text-zinc-800 mt-2 text-3xl'>Happy</p>

            </div>

             <div className='border py-8 rounded-xl shadow-xl bg-cyan-200'>
                  <p className='text-6xl font-bold text-indigo-600 pb-2'> 3000</p>
                  <p className='text-zinc-800 mt-2 text-3xl'>Love</p>

            </div>

             <div className='border py-8 rounded-xl shadow-xl bg-cyan-200'>
                  <p className='text-6xl font-bold text-indigo-600 pb-2'> 1000k</p>
                  <p className='text-zinc-800 mt-2 text-3xl'>Friendly</p>

            </div>

            </div>
            <div className='mx-auto my-14 mx-4 text-center  '>
            <h1 className='text-xl hover:text-red-700'>All Trust Harry Potter will killed Lord  Vodlmort !</h1>
            <p className='py-4 font-mono font-bold text-2xl'>Harry là hi vọng duy nhất của chúng ta, hãy tin tưởng thằng bé. <sub className='text-blue-900 font-bold'>Albus Dumbledor</sub></p>
            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-3'>
                 <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={hr5} alt="/" />
                 <img className='w-full h-full object-cover' src={hr1} alt="/" />
                 <img className='w-full h-full object-cover' src={hr2} alt="/" />
                 <img className='w-full h-full object-cover' src={hr3} alt="/" />
                 <img className='w-full h-full object-cover' src={hr4} alt="/" />
            </div>

            </div>
        </div>
    </div>
  )
};
export default About

