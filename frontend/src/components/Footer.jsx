import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} alt="" className='mb-5 w-32'/>
                <p className=' w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className=' flex text-gray-600 flex-col gap-1'>
                    <li className='mb-2'>Home</li>
                    <li className='mb-2'>About Us</li>
                    <li className='mb-2'>Careers</li>
                    <li className='mb-2'>Contact Us</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Get In Touch</p>
                <p className='text-gray-600'>123 Main Street<br />City, State 12345<br />Email: info@example.com<br />Phone: (123) 456-7890</p>
            </div>
        </div>

        <div>
            <p className='text-center text-gray-600 py-5 border-t'>© 2023 Your Company. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer