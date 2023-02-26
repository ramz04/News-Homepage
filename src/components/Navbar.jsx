import React, {useState} from 'react'
import logo from '../assets/images/logo.svg'

function Navbar() {

    const [open, setOpen] = useState(false)

  return (
    <div className='p-4 md:pt-[4rem] md:pb-[3rem] md:px-[10rem] flex justify-between h-full items-center'>
        <a href='/' className='z-10'><img src={logo} className='h-[30px] md:h-[40px]'/></a>
        <div className='hidden md:flex'>
            <ul className='flex items-center gap-12 '>
                <li><a href="/" className='hover:text-Softred text-Verydarkblue'>Home</a></li>
                <li><a href="#" className='hover:text-Softred text-Verydarkblue'>New</a></li>
                <li><a href="#" className='hover:text-Softred text-Verydarkblue'>Popular</a></li>
                <li><a href="#" className='hover:text-Softred text-Verydarkblue'>Trending</a></li>
                <li><a href="#" className='hover:text-Softred text-Verydarkblue'>Categories</a></li>
            </ul>
        </div>
        <div className='md:hidden'>
            <div className="relative mx-auto max-w-xl">
                <nav>
                    <button
                    className="relative w-10 h-10 z-10 text-gray-500 bg-white rounded-sm focus:outline-none"
                    onClick={() => setOpen(!open)}>
                        <span className="sr-only">Open main menu</span>
                        <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            <span
                            aria-hidden="true"
                            className={`block absolute h-0.5 w-7 bg-black transform transition duration-500 ease-in-out ${
                                open ? "rotate-45" : "-translate-y-1.5"
                            }`}></span>
                            <span
                            aria-hidden="true"
                            className={`block absolute  h-0.5 w-7 bg-black   transform transition duration-500 ease-in-out ${
                                open && "opacity-0"
                            }`}></span>
                            <span
                            aria-hidden="true"
                            className={`block absolute  h-0.5 w-7 bg-black transform  transition duration-500 ease-in-out ${
                                open ? "-rotate-45" : "translate-y-1.5"
                            }`}></span>
                        </div>
                    </button>
                </nav>
                <div aria-checked={!open} className="fixed top-0 right-0 z-100 h-screen p-4 transition-transform duration-300 ease-in-out aria-checked:translate-x-full bg-white w-[80%] ">
                        <div className='h-full w-full fixed bg-gray'>
                            <ul className='py-28 px-4 space-y-6 tracking-wide font-semi-bold'>
                                <li><a href="/" className='hover:text-Softred text-Verydarkblue'>Home</a></li>
                                <li><a href="#" className='hover:text-Softred text-Verydarkblue'>New</a></li>
                                <li><a href="#" className='hover:text-Softred text-Verydarkblue'>Popular</a></li>
                                <li><a href="#" className='hover:text-Softred text-Verydarkblue'>Trending</a></li>
                                <li><a href="#" className='hover:text-Softred text-Verydarkblue'>Categories</a></li>
                            </ul>
                            
                        </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Navbar