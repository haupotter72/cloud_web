import React from 'react'
import {FiDatabase,FiUploadCloud,FiServer} from 'react-icons/fi'
import {FaPaperPlane} from 'react-icons/fa'
import bgImg from '../assets/img1.png'


 const Hero = () => {

  return (
    <div name="home" className='w-full min-h-screen bg-zinc-200 flex flex-col justify-between'>
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
        <p className='text-2xl'>Welcome to the HARRY POTTER wonderful</p>
        <h1 className='py-3 text-5xl md:text-7xl font-bold '>Cloud Management</h1>
        <p className='text-2xl '>This is our Tech brand</p>
        <button   className='py-3 my-4 px-6 sm:w-[60%] '>Get Start</button> 
        </div>
        <div>
            <img className='w-full h-[100%] py-20' src={bgImg} alt=""/>
        </div>
        
         <div className='absolute flex flex-col  py-6 md:min-w-[760px] bottom-[-95%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-blue-400 rounded-xl text-center shadow-xl '>
                <p>Data Services</p>
                <div className='flex justify-between  flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><FiUploadCloud className='h-6 text-indigo-600' /> App Security</p>
                    <p className='flex px-4 py-2 text-slate-500'><FiDatabase className='h-6 text-indigo-600' /> Dashboard Design</p>
                    <p className='flex px-4 py-2 text-slate-500'><FiServer className='h-6 text-indigo-600' /> Cloud Data</p>
                    <p className='flex px-4 py-2 text-slate-500'><FaPaperPlane className='h-6 text-indigo-600' /> API</p>
                </div>
            </div>
        
    </div>

    </div>
  )
};
export default Hero
