import React from 'react'

 const Hagrid = (props) => {
  return (
    <div className='relative'>
    <img className='w-full h-full object-cover rounded-xl' src={props.bg} alt="erro"/>
    <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 absolute text-xl font-bold text-white'>
            {props.icon}
        </p>
    </div>

    </div>
  )
}
export default Hagrid
