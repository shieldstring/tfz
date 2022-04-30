import React from 'react';

function Header() {
  return (
    <nav  class="w-full bg-white ">
        <div class="container mx-auto px-6 py-3 lg:px-20 flex items-center justify-between flex-wrap">
            <div class="flex items-center flex-shrink-0 text-gray-600 mr-6"> 
                <a href="/">              
                    <img src='/img/logo.png' alt='logo' width='150px' />
                </a> 
            </div>
            <div class="block md:hidden">
                <button 
                    class="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600">
                    <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div             
                class="w-full block flex-grow md:flex md:justify-end md:w-auto">
                <div>
                    <a href="#"
                        class="block md:inline-block text-sm px-1 lg:px-3 py-2 leading-none rounded text-gray-600 under hover:text-blue-500 mt-4 md:mt-0">Home</a>
                    <a href="#"
                        class="block md:inline-block text-sm px-1 lg:px-3 py-2 leading-none rounded text-gray-600 hover:text-blue-500 mt-4 md:mt-0">Price</a>
                    <a href="#"
                        class="block md:inline-block text-sm px-1 lg:px-3 py-2 leading-none rounded text-gray-600 hover:text-blue-500 mt-4 md:mt-0">Scout</a>
                    <a href="#"
                        class="block md:inline-block text-sm px-1 lg:px-3 mr-4 py-2 leading-none rounded text-gray-600 hover:text-blue-500 mt-4 md:mt-0">Statistics</a>
                    <a href="#"
                        class="block md:inline-block text-sm px-1 lg:px-3 mr-4 py-2 leading-none rounded text-gray-600 hover:text-blue-500 mt-4 md:mt-0">Help</a>
                        <a href="#"
                        class="block md:inline-block text-sm px-1 lg:px-3 mr-4 py-2 leading-none rounded text-gray-600 hover:text-blue-500 mt-4 md:mt-0">Contact</a>
                    <a href="#" class="block md:inline-block px-1 lg:px-3 mr-4 -py-4 mt-4 -mb-2 md:mt-0">
                        <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                class="rounded-full w-8"
                                alt="Avatar"
                                />
                        </a>
                            
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header;