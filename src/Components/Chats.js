import React from 'react'

function Chats({ image, name, status, time }) {
  return (

    <div className='flex justify-between pb-4'>
      <div className='flex gap-4'>
        <img src={image} className='w-12 h-12 rounded-full' alt='' />
        <div>
          <h4 className='font-bold'>{name}</h4>
          <p className='text-slate-700'>{status}</p>
        </div>
      </div>
      <div>
        <p className='text-slate-700'>{time}</p>
      </div>
    </div>
  )
}

export default Chats
