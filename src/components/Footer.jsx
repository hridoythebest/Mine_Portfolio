import React from 'react'
import {AiFillInstagram,AiFillFacebook,AiFillYoutube} from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='mt-10 p-5 bg-black text-white'>
        <div className='flex justify-between items-center'>
            <div>
                <h1 className='text-3xl'>Mine</h1>
            </div>
            <div className='flex items-center space-x-5'>
                <AiFillYoutube size={"1.5rem"}/>
                <AiFillFacebook size={"1.5rem"}/>
                <AiFillInstagram size={"1.5rem"}/>
            </div>
            <div className='text-xs text-gray-300'>
                <p>All rights &copy; Mine</p>
            </div>
        </div>
    </div>
  )
}

export default Footer