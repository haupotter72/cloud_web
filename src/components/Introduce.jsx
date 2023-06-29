import React from 'react'
import img1 from '../assets/img2.png'
import img2 from '../assets/img6.png'

const Introduce = () => {
  return (
    <div name='intoduce'   className='w-full my-32 min-h-screen bg-slate-800 flex flex-row justify-between'>
        <div className=' grid md:grid-cols-2  max-w-[1240px] m-auto' >
        <div  className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
         <h1 className='py-3 text-5xl sm:text-3xl md:text-5xl  font-bold'>CHÀO MỪNG ĐẾN VỚI KỈ NGUYÊN VÔ TẬN </h1>

        </div>
        <div>
          <img className='w-full h-[100%] text-center py-5 pl-1 ' src={img1} alt='/'/>
          <p className='bg-purple-500  w-[35%] text-center rounded-xl py-2 text-xl px-2'>Harry,Ron, Hermione</p>  
    
        </div>
           <div className='py-[20%] '>
            <img className='w-full h-[100%] text-center py-5 pl-1 ' src={img2} alt='/'/>
            <p className='bg-purple-500  w-[35%] text-center rounded-xl py-2 text-xl px-2'>Harry,Ron, Hermione</p>  
    
          </div>

          <div  className='flex flex-col justify-center md:items-end w-full px-2 py-8'>
              <h1 className='py-3 text-5xl sm:text-3xl  md:text-5xl font-bold'>Welcome to the HARRY POTTER wonderful</h1>
            
          </div>

           
         

          

       
          
        </div>
        
    </div>
  )
}
export default Introduce
