import React from 'react'

function Profile() {
  return (
    <div className='flex justify-between mt-4 pb-3 mx-3'>
      <div className='flex gap-3'>
        <img className='w-12 h-12 m-2 rounded-full' src="https://cdn.statusqueen.com/dpimages/thumbnail/dp_image20-785.jpg" alt="" />
        <div>
          <h2 className='font-bold text-lg'>Mary Roberts</h2>
          <p>Not available till 01/01/2023</p>
        </div>
      </div>
      <div className='mt-6 ml-3 flex justify-center items-center w-10 h-7 text-center bg-slate-100 rounded-md' >
        <h2 className='text-2xl font-bold pb-4'>...</h2>
      </div>
    </div>
  )
}

export default Profile;
