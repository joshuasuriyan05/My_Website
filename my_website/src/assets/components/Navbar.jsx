import {FaHome, FaInfoCircle, FaServicestack, FaEnvelope} from 'react-icons/fa';

const navLink = [
    {
        name: "Home",
        icon: <FaHome/>,
        href:"#"
    },
    {
        name: "About",
        icon: <FaInfoCircle/>,
        href:"#"
    },
    {
        name: "Services",
        icon: <FaServicestack/>,
        href:"#"
    },
    {
        name: "Contact",
        icon: <FaEnvelope/>,
        href:"#"
    },
]
function Navbar () {
    return (
        <>
        <nav className='bg-gray-900 text-white p-4 fixed right-0 left-0 bg-black'>
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-2xl font-bold">🚀 MyWebsite</h1>
                <ul className="flex space-x-6">
                    {/* <li>
                        <a href='' className='flex items-center gap-1 hover:text-blue-400 cursor-pointer'><FaHome/>Home</a>
                    </li>
                    <li>
                        <a href='' className='flex items-center gap-1 hover:text-blue-400 cursor-pointer'><FaInfoCircle/>About</a>
                    </li>
                    <li>
                        <a href='' className='flex items-center gap-1 hover:text-blue-400 cursor-pointer'><FaServicestack/>Services</a>
                    </li>
                    <li>
                        <a href='' className='flex items-center gap-1 hover:text-blue-400 cursor-pointer'><FaEnvelope/>Contact</a>
                    </li> */}
                    {navLink.map((link, index) =>(
                        <li key={index}>
                            <a href='{link.href}' className='flex items-center gap-1 hover:text-blue-400 cursor-pointer'>
                                {link.icon}
                                {link.name}
                            </a>
                        </li>

                    ))}
                </ul>
            </div>
        </nav>
        </>
    );
}

export default Navbar;