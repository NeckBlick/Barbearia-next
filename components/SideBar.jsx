import Link from 'next/link'
import React from 'react'
import { TbCalendarTime, TbClockEdit } from 'react-icons/tb'
import {FiUsers} from 'react-icons/fi'
import { BsPersonVcard, BsMagic } from 'react-icons/bs'
import Image from 'next/image'

const SideBar = () => {
  return (
    <div className='bg-barberBlack w-1/5 h-[92vh] py-4 flex flex-col items-center gap-6'>
        <Image src="/assets/logo.png" alt='' width={200} height={200} />
        <ul className='flex flex-col gap-4 w-full pl-4'>
            <li className='w-full hover:bg-black/80 py-6 px-4'>
                <Link href="#" className=' text-white text-xl flex flex-row items-center gap-3 focus:text-blue-700 w-full h-full'>
                    <TbCalendarTime size={30}/>
                    Agendamentos                
                </Link>
            </li>
            <li className='w-full hover:bg-black/80 py-6 px-4'>
                <Link href="#" className=' text-white text-xl flex flex-row items-center gap-3 focus:text-blue-700 w-full h-full'>
                    <FiUsers size={30}/>
                    Clientes            
                </Link>
            </li>
            <li className='w-full hover:bg-black/80 py-6 px-4'>
                <Link href="#" className=' text-white text-xl flex flex-row items-center gap-3 focus:text-blue-700 w-full h-full'>
                    <BsPersonVcard size={30}/>
                   Colaboradores              
                </Link>
            </li>
            <li className='w-full hover:bg-black/80 py-6 px-4'>
                <Link href="#" className=' text-white text-xl flex flex-row items-center gap-3 focus:text-blue-700 w-full h-full'>
                    <BsMagic size={30}/>
                    Serviços            
                </Link>
            </li>
            <li className='w-full hover:bg-black/80 py-6 px-4'>
                <Link href="#" className=' text-white text-xl flex flex-row items-center gap-3 focus:text-blue-700 w-full h-full'>
                    <TbClockEdit size={30}/>
                  Horários              
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default SideBar