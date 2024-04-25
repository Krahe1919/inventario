'use client'

import React, { useState, useEffect } from 'react';
import { FiAlignRight } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import { FaTableList } from "react-icons/fa6";
import { FaDesktop } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";







export const Sidebar = () => {

    return (
        <div className="">
            <div className=' bg-gray-100 fixed left-0 top-0 w-80 h-full overflow-y-scroll border-r border-gray-300 p-8 flex flex-col justify-between'>
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
                    <button className='bg-red-500 fixed bottom-4 right-4 p-2 text-lg rounded-full'>
                        <FiAlignRight/>
                    </button>

            </div>
        </div>
    );
};
