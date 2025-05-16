import React from 'react'

const Article = () => {
  return (
    <article className='container mx-auto p-6'>
        <h2 className='text-2xl font-bold'>📰 Latest News</h2>
        <div className='flex shadow-lg bg-white p-4 rounded-lg'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd7UnSPFSi4RlLM8KMiCTd6TJd6stEjOn9iQ&s' alt='news'/>
            <div className='ml-4'>
                <h3 className='text-xl font-semibold '>🚀 Vite is Revolutionizing Frontend</h3>
                <p className='text-gray-600 mt-2'>Vite is a next-gen frontend tool that delivers fast development</p>
            </div>
        </div>

    </article>
  );
}
export default Article;