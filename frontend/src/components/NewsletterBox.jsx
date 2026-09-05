import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (e) =>{
        e.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & Get 20% Off!</p>
        <p className='text-gray-400 mt-3'>Join our newsletter to stay updated with the latest offers and news.</p>
        <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-center items-center'>
            <input type="email" placeholder='Enter your email' className='border border-gray-400 rounded-full px-4 py-2 mt-5 w-72 sm:w-96 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent' required />
            <button type='submit' className='bg-gray-800 text-white rounded-full px-6 py-2 ml-3 mt-5 hover:bg-gray-700 transition-colors duration-300'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox