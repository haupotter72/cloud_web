import React from 'react'
import {GiDragonBalls} from  'react-icons/gi'
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';
import Hagrid  from './Hagrid';
import  hagrid1 from '../assets/hagrid1.jpg'
import  hagrid2 from '../assets/hagrid2.jpg'
import  hagrid3 from '../assets/hagrid3.jpg'
import  hagrid4 from '../assets/hagrid4.jpg'
import  hagrid5 from '../assets/hagrid5.jpg'
import  hagrid6 from '../assets/hagrid6.jpg'
import  hagrid7 from '../assets/hagrid7.jpg'
import  hagrid8 from '../assets/hagrid8.jpg'
import  hagrid9 from '../assets/hagrid9.jpg'
import  hagrid10 from '../assets/hagrid10.jpg'
import  hagrid11 from '../assets/hagrid11.jpg'
import  hagrid12  from '../assets/hagrid12.jpg'
import  hgridbg  from '../assets/hgridbg.jpg'


import {FaSadCry} from 'react-icons/fa'

 const AllOne = () => {
  
  
  

 

  

  return (
    <div name='plaforms' className='w-full  mt-[30%] mb-[10%]'>
    
    {/** part 2 */}
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-10 '>
       <div className='lg:col-span-2 flex flex-col justify-evenly'>
         <div>
         <h2 className='text-2xl font-bold text-emerald-500 '> Potter is Vacation for Two people with Love ! </h2>
         <p className='py-4 font-mono text-xl '>Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.</p>

         </div>

         <div className='grid sm:grid-cols-2 gap-8 py-4'>
            <div className='flex flex-col  lg:flex-row text-center items-center'>
              <button><RiCustomerService2Fill size={50 }/> </button>
               <div>
                 <h3 className='py-2 font-bold text-emerald-600 '> LEADING SERVICE</h3>
                 <p className='py-1'>ALL0INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
               </div>
          
         </div>
         <div className='flex flex-col lg:flex-row items-center text-center'>
           <button> <MdOutlineTravelExplore size={50}/></button>
           <div>
             <h3 className='py-2  font-bold text-emerald-600'> LEADING SERVICE</h3>
             <p className='py-1'>ALL0INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
           </div>

         </div>

         </div>
      </div>
      <div>
        <div className='border text-center'>
          <p className='pt-2'>Potter sale 10 % on Flast Sale</p>
          <p className='py-4'>12 HOURS LEFT</p>
          <p className='bg-green-800 text-zinc-100 py-2'>BOOK TICKET MOVIE NOWW ! </p>
        </div>
        <form className='w-full '>
        <div className='flex flex-col my-2 border border-green-500 rounded-md'>
                  <label>Destination</label>
                  <select className='border rounded-md p-2'>
                      <option>Ron</option>
                      <option>Hermione</option>
                      <option>Draco</option>
                      <option>Giny</option>
                  </select>
              </div>
              <div className='flex flex-col my-4 border border-green-500 rounded-md'>
                <label>Check In Now !</label>
                <input className=' rounded-md p-2' type="date"/>
              
              </div>
              <div className='flex flex-col my-2 border border-green-500 rounded-md'>
                <label>Check Out ! hehe</label>
                <input className='border rounded-md p-2' type="date" />
              </div>
            
              <button className='w-full my-4 text-2xl py-5'>Rate and Availabilitiess Sale !</button>
       

        </form>
      </div>
      


    </div>

    {/** part 3 */}
    <div className='w-full my-16 min-h-screen bg-fuchsia-400 flex flex-row justify-between'>
    <div className=' grid md:grid-cols-2  max-w-[1240px] m-auto'>
          <div className='py-[20%] '>
            <img className='w-full h-[80%] rounded-xl text-center py-5 pl-1 ' src={hgridbg} alt='/'/>
            <p className='bg-green-400   w-[40%] text-center rounded-xl py-2 text-xl px-2'>Robbie Coltrane <sub className='font-bold text-neutral-900'>1950-2022</sub></p>  
    
          </div>

          <div  className='flex flex-col justify-center text-xl md:items-end w-full px-12 py-5'>
              <h1 className='px-5  bg-teal-400 rounded-xl   py-3 text-center sm:text-xl   md:text-xl font-bold'><sup className='text-red-800 font-bold text-1xl'>Giáo sư Rubeus Hagrid</sup> là một nhân vật hư cấu trong bộ truyện Harry Potter của nữ nhà văn Anh Quốc J. K. Rowling. Ông xuất hiện lần đầu tiên trong Harry Potter và hòn đá phù thủy, từng giữ cương vị là giáo sư môn Chăm sóc Sinh vật Huyền bí của Trường Phù thủy và Pháp sư Hogwarts.</h1>
            
          </div>
     
     
     </div>

    </div>
    <div > <h1 className='   text-center sm:text-xl font-bold text-2xl   md:text-xl'>Respect Hagrid ! bác vẫn là người gác cổng tuyệt vời nhất ở Hogwarts</h1></div>

    <div className='max-w-[1240px] mx-auto px-4 my-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
    
   
    <Hagrid bg={hagrid1} icon={<FaSadCry className='font-bold text-4xl text-cyan-500 '/>} />
    <Hagrid bg={hagrid2}  icon={<FaSadCry className='font-bold text-4xl text-cyan-500 '/>} />
    <Hagrid bg={hagrid3}  icon={<FaSadCry className='font-bold text-4xl text-cyan-500'/>} />
    <Hagrid bg={hagrid4}  icon={<FaSadCry className='font-bold text-4xl text-cyan-500'/>} />
    <Hagrid bg={hagrid5}  icon={<FaSadCry className='font-bold text-4xl text-cyan-500'/>} />
    <Hagrid bg={hagrid6}   icon={<FaSadCry className='font-bold text-4xl text-cyan-500'/>}/>
    <Hagrid bg={hagrid7}   icon={<FaSadCry className='font-bold text-4xl text-cyan-500'/>}/>
    <Hagrid bg={hagrid8}   icon={<FaSadCry className='font-bold text-4xl text-cyan-500'/>}/>
    <Hagrid bg={hagrid9}   icon={<FaSadCry className='font-bold text-4xl text-cyan-500'/>}/>
    <Hagrid bg={hagrid10}   icon={<FaSadCry className='font-bold text-4xl text-cyan-500'/>}/>
    <Hagrid bg={hagrid11}   icon={<FaSadCry className='font-bold text-4xl text-cyan-500'/>}/>
    <Hagrid bg={hagrid12}   icon={<FaSadCry className='font-bold text-4xl text-cyan-500'/>}/>
      


    


    </div>
    
 
    </div>
   
  )
}
export default AllOne
