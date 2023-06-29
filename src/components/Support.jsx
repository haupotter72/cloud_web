import React from 'react'
import {GiDragonBalls} from  'react-icons/gi'
import {FiPhone,FiArrowDownRight} from 'react-icons/fi'
import {FaMicrochip} from 'react-icons/fa'
import {MdHelp} from 'react-icons/md'
import potterImg from '../assets/img3.png' 

 const Support = () => {
  return (
    <div name='support' className='w-full  mt-24'>
      <div className='w-full h-[-100%]  bg-gray-900/90 absolute'>
      <img src={potterImg} className='w-full  object-cover mix-blend-difference' alt="/"/>

      </div>
      <div className='max-w-[1240px] mx-auto  text-white relative '>

        <div className='px-4 py-12'>
        <h2 className='text-3xl py-8 text-slate-300 uppercase text-center font-bold'>Support</h2>
        <h3 className='text-5xl font-mono py-6 text-center text-sky-800'>Harry Potter is the BEST !</h3>
        <p className='text-3xl py-4 text-zinc-300'> I have one story Harry Potter, It That nice, I very well Love It. Harry Potter Forever And Harry In My Heart Loveeeee 3000 </p>
        </div>

        <div className='grid grid-cols-1 -bottom-80 lg:grid-cols-4 relative gap-x-8  gap-y-16 px-4 pt-12 sm:pt-20 text-white '>
          <div className='bg-teal-300 rounded-xl shadow-2xl'>
            <div className='p-8'>
              <FiPhone className='w-10 h-12  text-3xl bg-slate-400 text-indigo-800  rounded-lg mt-[-3rem]'/>
              <h3 className='font-bold text-stone-600 text-2xl my-4'>Harry Potter</h3>
              <p className='text-gray-600 text-xl'>Harry is my favorite character in Harry Potter novels he is a brave man i hope he will always be in my heart ! I Love Youuuuuu So much</p>
            </div>
            <div className='bg-teal-100 pl-8 rounded-xl font-normal text-xl   py-4'>
              <p className='flex items-center text-indigo-600  '>Contact Us <GiDragonBalls/> </p>
            </div>
            
          </div>

          <div className='bg-teal-300 rounded-xl shadow-2xl'>
            <div className='p-8'>
              <FaMicrochip className='w-10 h-12  text-3xl bg-slate-400 text-indigo-800  rounded-lg mt-[-3rem]'/>
              <h3 className='font-bold text-stone-600 text-2xl my-4'>Hermione</h3>
              <p className='text-gray-600 text-xl'>HI love Ron so much, he's funny, he makes me mad but it's okay I can't beat him hehe, I really Love Harry Potter of a me's part! I love You So much !</p>
            </div>
            <div className='bg-teal-100 pl-8 rounded-xl font-normal text-xl    py-4'>
              <p className='flex items-center text-indigo-600 '>Contact Us <GiDragonBalls/> </p>
            </div>
            
          </div>

          <div className='bg-teal-300 rounded-xl shadow-2xl'>
            <div className='p-8'>
              <FiArrowDownRight className='w-10 h-12  text-3xl bg-slate-400 text-indigo-800  rounded-lg mt-[-3rem]'/>
              <h3 className='font-bold text-stone-600 text-2xl my-4'>Ron Wealeasey</h3>
              <p className='text-gray-600 text-xl'> Hermione she's a know-it-all girl, and I didn't expect her to be the minister of the magical world later on. amazing and i love Harry Potter ! Ilove You So muchhh</p>
            </div>
            <div className='bg-teal-100 pl-8 rounded-xl font-normal text-xl    py-4'>
              <p className='flex items-center text-indigo-600 '>Contact Us <GiDragonBalls/> </p>
            </div>
            
          </div>

          <div className='bg-teal-300 rounded-xl shadow-2xl'>
            <div className='p-8'>
              <MdHelp className='w-10 h-12  text-3xl bg-slate-400 text-indigo-800  rounded-lg mt-[-3rem]'/>
              <h3 className='font-bold text-stone-600 text-2xl my-4'>Ginny</h3>
              <p className='text-gray-600 text-xl'>I love Harry Potter, he is the one who destroyed Lord Voldmort, how happy I am to be the wife of the most powerful man in the wizarding world.</p>
            </div>
            <div className='bg-teal-100 pl-8 rounded-xl font-normal text-xl    py-4'>
              <p className='flex items-center text-indigo-600 '>Contact Us <GiDragonBalls/> </p>
            </div>
            
        </div>



        </div>


      </div>
    </div>
  )
  
}

export default Support

