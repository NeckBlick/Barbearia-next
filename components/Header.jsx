import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-[8vh] bg-blue-700 flex justify-end px-12'>
        <div className='flex items-center gap-2 '>
            <p className='text-xl text-white'>Usuário</p>
            <div className='w-10 h-10 rounded-full bg-slate-400'></div>
        </div>
    </div>
  )
}

export default Header