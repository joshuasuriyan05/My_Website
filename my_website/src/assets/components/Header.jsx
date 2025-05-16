import React from "react";
import banner from "./banner-image.jpg";

const Header = () => {
    return (
        <header className='h-96 bg-cover bg-center flex items-center justify-center text-white'
            style={{
                backgroundImage: `url(${banner})`, // use the imported image
            }}
            >
            <h1 className='text-4xl font-bold bg-black/50 rounded-lg backdrop-blur-sm p-4'>🚀 Welcome to My Website</h1>
        </header>
    );
};
export default Header;