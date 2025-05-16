import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white text-center py-6'>
        <p>🌐 © 2025 MyWebsite.
            All Rights Reserved.
        </p>
        <div className='flex justify-center space-x-2 mt-4'>
            <a href='#' className='text-blue-400 hover:underline cursor-pointer'>☑ Facebook</a>
            <a href='#' className='text-blue-400 hover:underline cursor-pointer'>✖ Twitter</a>
            <a href='#' className='text-blue-400 hover:underline cursor-pointer'>🎦 Instagram</a>
        </div>
    </footer>
  );
};

export default Footer;