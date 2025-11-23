import React from 'react'
import Logo from '../assets/react.svg'
function Header() {
  return (
    <header className='flex justify-between'>
      <div className='flex space-x-2'>
        <img src={Logo} alt="" className='w-10 h-10' />
        <h1 className='text-3xl font-bold'>Cruip</h1>
      </div>
      <nav>
          <a href="#">登陆</a>
          <a href="#" className='ml-8 bg-gray-900 px-4 py-2 rounded text-blue-50 items-center'>注册</a>
      </nav>
    </header>
  )
}

export default Header
