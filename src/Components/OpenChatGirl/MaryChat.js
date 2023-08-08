import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import { PiThumbsUpDuotone } from "react-icons/pi";
import ForSeen from './ForSeen';

function MaryChat({ chat }) {
  return (
    <div className='w-64 rounded absolute right-36'>
      <p className='text-slate-600 pl-4 pb-1'>Mary Robert 8.23 AM</p>
      {/* <PiThumbsUpDuotone className='border p border-gray-400 rounded-full'/> */}
      <div className='flex items-center w-full px-1 py-1 rounded-xl text-slate-100' style={{ backgroundColor: '#8146F5' }}>
        <h6 className='p-2 rounded-lg text-slate-100' >{chat}</h6>
        <PlayArrowIcon className='w-3 h-3 m-1 rounded-full' style={{ backgroundColor: '#A15DF7' }} />
      </div>
      <div className='ml-52'>
        <ForSeen />
      </div>
    </div>
  )
}

export default MaryChat;
