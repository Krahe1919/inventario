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


export const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    return (
            <div className={`xl:h-[100vh] overflow-y-scroll fixed xl:static bg-gray-200 w-80 border-r border-gray-300 h-full -left-full top-0 p-8 z-50 flex flex-col justify-between transition-all ${showMenu ? "left-0" : "-left-full"}`}>
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
    );
}; 
