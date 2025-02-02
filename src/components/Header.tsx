import React from 'react'

const Header = () => {
  return (
    <header className="hidden md:block w-full bg-white shadow-[8px_8px_0px_1px_rgba(0,0,0,0.75)] rounded-lg p-4 fixed top-0 z-50">
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Aryan Kumar</h1>
      <ul className="flex space-x-6">
        <li>
          <button
            className="text-gray-800 hover:text-gray-600 transition-all"
          >
            <a href="#home">Home</a>
          </button>
        </li>
        <li>
          <button
            className="text-gray-800 hover:text-gray-600 transition-all"
          >
            <a href="#project">Projects</a>
          </button>
        </li>
        <li>
          <button
            className="text-gray-800 hover:text-gray-600 transition-all"
          >
            <a href="#contactus">Contact Me</a>
          </button>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header