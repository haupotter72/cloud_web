import React,{useState} from 'react'

import {FiMenu,FiX} from 'react-icons/fi'
import { Link, animateScroll as scroll } from 'react-scroll'
import avt from '../assets/avt.png'
import { BsMessenger,BsFillBellFill } from "react-icons/bs";
import { FaHome,FaHeart} from "react-icons/fa";
import Login from '../IOP/Login';


import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaLockOpen
} from 'react-icons/fa';


const Navbar = () => {
  const [nav,setNav]=useState(false);
  const [logo,setLogo]=useState(false);
  const handleClick=()=>{
   setNav(!nav);
   setLogo(!logo);
   
      };

    




  return (
    <div className='w-screen h-[80px] z-10 bg-gray-400  cursor-pointer fixed drop-shadow-lg'>
       <div className='px-2 flex justify-between items-center w-full h-full'>
          <div className='flex items-center'>
            <h1 
            onClick={handleClick} 
            className={logo ?  'text-3xl font-bold mr-4 sm:text-4xl' :'text-3xl font-bold mr-4 sm:text-4xl' }> POTTER.72 </h1>
            <ul className='hidden md:flex font-mono font-bold text-xl  text-indigo-900 '>
            
               <li className='border-b-2 border-green-400 w-full'><Link  to="home"  smooth={true} duration={500} >Home</Link></li>
               <li className='border-b-2 border-green-400 w-full'><Link  to="about"  smooth={true} duration={500} >About</Link></li>
               <li className='border-b-2 border-green-400 w-full'><Link  to="support"  smooth={true} duration={500} >Support</Link></li>
               <li className='border-b-2 border-green-400 w-full'><Link  to="plaforms"  smooth={true} duration={500} >Plaforms</Link></li>
               <li className='border-b-2 border-green-400 w-full'><Link  to="pricing"  smooth={true} duration={500} >Pricing</Link></li>
               <li className='border-b-2 border-green-400 w-full'><Link  to="intoduce"  smooth={true} duration={500} >Introduce</Link></li>

   

   

            </ul>
          </div>
       
       
          



          <div className='hidden  md:flex w-[30%] h-[90%] '>
          <div className='flex   w-[40%]  ml-[50%]  text-indigo-900  md:text-3xl py-[25px] '>
              <FaHome   className=' w-[30%]    hover:text-red-600'/>
          
             <FaHeart className='  w-[30%]   hover:text-red-600'/>
             <BsMessenger  className='    w-[30%]   hover:text-red-600'/>
            
           
             
             </div>
              
           
          </div>
          <div className='hidden md:flex   w-[25%] h-[90%]'>
             <p className='font-bold  text-xl md:text-2xl hover:text-red-600 pt-5 text-indigo-900   '><a  href='https://www.facebook.com/san.kakarotto.9'>Hau Potter</a></p>
            <img  className=' rounded-full hover:mix-blend-difference ' src={avt}></img>
         
          </div>
              <div className='flex flex-row my-4 pr-8'>
               <Link to='/login/'>  <button className='bg-transparent  font-bold hover:bg-teal-300  hover:text-gray-800 mr-4 text-indigo-600 px-8 py-3  '> Login</button></Link>
                <button className='px-8 font  bg-transparent hover:bg-teal-300  hover:text-gray-800 font-bold  py-3'> Reagister</button>

               </div>
         
        


        


      
       
         
        
          <div className='md:hidden mr-10' onClick={handleClick}>
          {!nav ? <FiMenu className='w-5 '/> : <FiX className='w-5'/>}
          

          </div>

       </div>
       <ul className={!nav ? 'hidden' : 'absolute bg-zinc-400 w-full px-8'}>
               <li className='border-b-2 border-green-400 w-full'><Link  to="home"  smooth={true} duration={500} >Home</Link></li>
               <li className='border-b-2 border-green-400 w-full'><Link  to="about"  smooth={true} duration={500} >About</Link></li>
               <li className='border-b-2 border-green-400 w-full'><Link  to="support"  smooth={true} duration={500} >Support</Link></li>
               <li className='border-b-2 border-green-400 w-full'><Link  to="plaforms"  smooth={true} duration={500} >Plaforms</Link></li>
               <li className='border-b-2 border-green-400 w-full'><Link  to="pricing"  smooth={true} duration={500} >Pricing</Link></li>
               <li className='border-b-2 border-green-400 w-full'><Link  to="intoduce"  smooth={true} duration={500} >Introduce</Link></li>
             
   
           
               <div className='flex flex-col my-4'>
                <button className='bg-transparent   mr-1 text-indigo-600 px-8 py-3 mb-4 '> Sign In</button>
                <button className='px-8  py-3'> Sign Un</button>

               </div>


               <div className='flex justify-between my-4 text-2xl text-indigo-900'>
                    <FaFacebook className='icon' />
                    <FaTwitter className='icon' />
                    <FaYoutube className='icon' />
                    <FaPinterest className='icon' />
                    <FaInstagram className='icon' />

               </div>

       </ul>

       
      

         
      

    </div>
  )
}
export default Navbar

