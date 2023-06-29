import React from 'react'
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-800 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 py-16 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
            <h6 className='font-bold uppercase pt-2'>Solutation</h6>
            <ul>
                <li className='py-6 text-green-400 text-xl font-mono'>Marketing</li>
                <li className='py-6 text-green-400 text-xl font-mono'>Marketing</li>
                <li className='py-6 text-green-400 text-xl font-mono'>Marketing</li>
                <li className='py-6 text-green-400 text-xl font-mono'>Marketing</li>
                <li className='py-6 text-green-400 text-xl font-mono'>Marketing</li>
            </ul>
            </div>
              <div>
            <h6 className='font-bold uppercase pt-2'>Solutation</h6>
            <ul>
                <li className='py-6 text-green-400 text-xl font-mono'>Marketing</li>
                <li className='py-6 text-green-400 text-xl font-mono'>Marketing</li>
                <li className='py-6 text-green-400 text-xl font-mono'>Marketing</li>
                <li className='py-6 text-green-400 text-xl font-mono'>Marketing</li>
                <li className='py-6 text-green-400 text-xl font-mono'>Marketing</li>
            </ul>
            </div>

           
             <div>
            <h6 className='font-bold uppercase pt-2'>Solutation</h6>
            <ul>
                <li className='py-6 text-green-400 text-xl font-mono'>Marketing</li>
                <li className='py-6 text-green-400 text-xl font-mono'>Marketing</li>
                <li className='py-6 text-green-400 text-xl font-mono'>Marketing</li>
                <li className='py-6 text-green-400 text-xl font-mono'>Marketing</li>
                <li className='py-6 text-green-400 text-xl font-mono'>Marketing</li>
            </ul>
            </div>

           
             <div>
            <h6 className='font-bold uppercase pt-2'>Solutation</h6>
            <ul>
                <li className='py-6 text-green-400 text-xl font-mono'>Marketing</li>
                <li className='py-6 text-green-400 text-xl font-mono'>Marketing</li>
                <li className='py-6 text-green-400 text-xl font-mono'>Marketing</li>
                <li className='py-6 text-green-400 text-xl font-mono'>Marketing</li>
                <li className='py-6 text-green-400 text-xl font-mono'>Marketing</li>
            </ul>
            </div>

           
            
            <div className='col-span-2 pt-8 md:pt-2'>
            <p>Subscribe to our newfeed about Harry Potter !</p>
            <p>It's very interesting for you to visit and subscribe to my channel, best regards!</p>
            <form>
                <input placeholder='Enter Email...' className='w-full p-2 mr-4 rounded-md mb-4 ' type="email"/>
                <button className='p-2 mb-4'>Subscribe</button>
            </form>
            </div>
        </div>
        <div className='flex flex-col max-w[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center'>
            <p className='py-4'>
               GoodBye And Have A Good Day ! See You Again !
            </p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook/>
            <FaInstagram/>
            <FaTwitter/>
            <FaTwitch/>
            <FaGithub/>

            </div>
        </div>


    </div>
  )
};
export default Footer
