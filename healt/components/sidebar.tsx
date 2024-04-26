'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FiAlignRight } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import { FaTableList } from "react-icons/fa6";
import { FaDesktop } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";


export const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    return (
        <div className="">
            <div className={`bg-gray-100 fixed top-0 w-80 h-full overflow-y-scroll border-r border-gray-300 p-8 flex flex-col justify-between transition-all lg:left-0 ${showMenu ? "left-0" : "-left-full"}`}>
                <div>
                    {/*LOGO*/}
                    <h1 className='uppercase font-bold text-2xl tracking-[5px] mb-10 text-sena-blue'>
                        Tu Logo
                    </h1>
                    <ul>
                        
                        <li>
                            <a href="#" className='flex items-center gap-4 py-3 px-4 hover:bg-gray-300 rounded-xl transition-colors'>
                                <FaHome  className='text-sena-blue'/>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className='flex items-center gap-4 py-3 px-4 hover:bg-gray-300 rounded-xl transition-colors'>
                                <MdInventory className='text-sena-blue' />
                                Inventario
                            </a>
                        </li>
                        <li>
                            <a href="#" className='flex items-center gap-4 py-3 px-4 hover:bg-gray-300 rounded-xl transition-colors'>
                                <FaTableList  className='text-sena-blue' />
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#" className='flex items-center gap-4 py-3 px-4 hover:bg-gray-300 rounded-xl transition-colors'>
                                <FaDesktop className='text-sena-blue' />
                                Articles
                            </a>
                        </li>
                    </ul>
                </div>
                <ul>
                    <li className='flex items-center gap-4 py-3 px-4 hover:bg-gray-300 rounded-xl transition-colors'> <img src="https://img.freepik.com/foto-gratis/joven-bella-mujer-pie-sobre-pared-blanca_114579-90514.jpg" className='w-6 h-6 object-cover rounded-full' />
                        <RiCheckboxBlankCircleFill className='absolute text-green-600 left-16 translate-y-2 text-xs'/>
                        Usuario
                    </li>
                    <li className='flex items-center gap-4 py-3 px-4 hover:bg-gray-300 rounded-xl transition-colors'> <IoSettings className='text-sena-blue'/>
                        Configuracion 
                    </li>
                    <li className='flex items-center gap-4 py-3 px-4 hover:bg-gray-300 rounded-xl transition-colors'> <FaPowerOff className='text-sena-blue'/>
                        Cerrar Sesion
                    </li>

                </ul>
                   {/* bton */}
                    <button onClick={toggleMenu} className='text-white bg-sena-blue fixed bottom-4 right-4 p-2 text-lg rounded-full lg:hidden'>

                        {showMenu ? <IoClose/> : <FiAlignRight/>}
                    </button>

            </div>
            <header className='fixed pl-[340px] w-full flex items-start justify-between p-8 border border-gray-300'>
                <nav className='space-x-6 '>
                    <Link href={"#"} className="inline-block relative transition-colors duration-300 hover:before:w-full">
                        <span className="before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-sena-blue before:rounded-full before:transition-all before:duration-300 hover:before:w-full">Discover</span>
                    </Link>
                    <Link href={"#"} className="inline-block relative transition-colors duration-300 hover:before:w-full">
                        <span className="before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-sena-blue before:rounded-full before:transition-all before:duration-300 hover:before:w-full">Arrive</span>
                    </Link>
                    <Link href={"#"} className="inline-block relative transition-colors duration-300 hover:before:w-full">
                        <span className="before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-sena-blue before:rounded-full before:transition-all before:duration-300 hover:before:w-full">Fantasma</span>
                    </Link>
                </nav>
                <ul>
                    <li className='text-lg'>
                        <a href="#" className='text-sena-blue'>
                            {""}
                            <IoNotifications/>
                        </a>
                    </li>
                </ul>
            </header>
        </div>
    );
}; 
