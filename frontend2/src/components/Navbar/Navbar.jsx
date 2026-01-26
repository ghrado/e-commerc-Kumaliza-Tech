import React from 'react'
import {IoMdSearch} from 'react-icons/io'
import {FaCartShopping} from 'react-icons/fa'

const MenuLinks = [
    {
        id: 1,
        name: 'Home', 
        link: '/#'
    },
    {
        id: 2,
        name: 'Shop', 
        link: '/#shop'
    },
    {
        id: 3,
        name: 'About', 
        link: '/#about'
    },
    {
        id: 4,
        name: 'Contact', 
        link: '/#contact'
    },
];

const Navbar = () => {
  return (
    <div className='bg-white dark:bg-gray-900
    dark:text-white duration-200 relative z-40'>
        <div className='py-4'>
            <div className='container flex justify-between items-center'>
                {/*Logo and Links section*/}
                <div className='flex items-center gap-4'>
                    <a 
                    href="#"
                    className='text-primary 
                    font-semibold tracking-widest
                    text-2xl uppercase sm:text-3xl'>
                        KumalizaShop
                    </a>
                    {/* Menu itens*/}
                     <div className=' lg:block'>
                        <ul className='flex items-center gap-4'>
                            {
                                MenuLinks.map((data, index) => (
                                    <li key={index}>
                                        <a 
                                        href={data.link} 
                                        className='inline-block px-4
                                        front-semibold text-gray-500
                                        houver:text-black
                                        dark:hover:text-white duration-200'
                                        > {data.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                     </div>
                </div>

               
                
                {/*Navbar Direita section*/}
                <div className='flex justify-between items-center gap-4'>
                    {/*Search Bar seaction*/}
                    <div className='relative group hidden
                    sm:block'>
                        <input type="text" 
                        placeholder="Search..." 
                        className="
                        seasrch-bar
                        " />
                        <IoMdSearch 
                        className='text-xl
                        text-gray-600 group-houver:text-pretty-primary
                        dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200'/>
                    </div>

                    {/*order-button section*/}
                    <button>
                        <FaCartShopping/>
                    </button>
                    {/*Dark Mode seaction*/}
                    <div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar