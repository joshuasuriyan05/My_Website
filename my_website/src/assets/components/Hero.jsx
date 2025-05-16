import React from 'react'

const Hero = () => {
  return (
   <section className='bg-gray-100 text-center py-16'>
    <img className='mx-auto rounded-xl shadow-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPCNlr114udk91XPvvOGBfmKH-vKDZjdnyqg&s" alt="image"/>
    <h2 className='m-4 text-3xl font-bold'>✍ Build Amazing UIs With Reaact & Vite</h2>
    <p className='text-gray-600 mt-2'>Fast, Lightweight, and modern frontend development</p>
    <button className='bg-blue-400 px-6 py-2 rounded-lg hover:bg-blue-600 transition text-white cursor-pointer mt-4'>🚀 Get Started</button>
   </section>
  );
}
export default Hero;