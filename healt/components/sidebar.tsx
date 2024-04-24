'use client'

import React, { useState } from 'react';
import { FiAlignCenter } from "react-icons/fi";

export const Sidebar = () => (
    <div className="container h-screen w-64 bg-gray-200">
        <div className='h-screen w-60 ms-2 py-2 bg-red-500'>
            <ul className='h-full flex items-center flex-col space-y-4 lg:p-4 bg-green-500'>
                <div className='uppercase font-black text-4xl '>
                    LOGOTIPO
                </div>
                <li className='border-2 border-sena-blue rounded-lg w-full lg:py-2 shadow-md hover:shadow-lg hover:bg-gray-300 transition-shadow duration-300'>
                    <span className='pl-2'>Products</span>
                </li>
                <li className='border-2 border-sena-blue rounded-lg w-full lg:py-2 shadow-md hover:shadow-lg hover:bg-gray-300 transition-shadow duration-300'>
                    <span className='pl-2'>Articles</span>
                </li>
                <li className='border-2 border-sena-blue rounded-lg w-full lg:py-2 shadow-md hover:shadow-lg hover:bg-gray-300 transition-shadow duration-300'>
                    <span className='pl-2'>Tables</span>
                </li> 
                <div className='flex justyfi-end items-end p-4 '>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <FiAlignCenter/>
                    </button>
                </div>     
            </ul>                      
        </div>
    </div>

)
