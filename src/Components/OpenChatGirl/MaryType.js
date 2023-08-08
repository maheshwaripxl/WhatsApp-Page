import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { IoPlayForward } from "react-icons/io5";
import { FaComment } from "react-icons/fa6";

function MaryType() {
    return (
        <div className='flex justify-between px-4 py-3 my-3 bg-white rounded-2xl'>
            <div className='flex gap-3'>
                <img src="https://cdn.statusqueen.com/dpimages/thumbnail/dp_image20-785.jpg" alt="" className='w-10 h-10 rounded-full'/>
                <div>
                    <h2 className='font-bold'>Mary</h2>
                    <p className='font-semibold'>-0:08</p>
                </div>
            </div>
            <div className='flex gap-2 items-center text-lg font-bold'>
                <h1>1X</h1>
                <PlayArrowIcon/>
                <IoPlayForward/>
                <AddRoundedIcon className='font-bold border-2 rounded-full'/>
                <FaComment/>
            </div>
        </div>
    )
}

export default MaryType;
