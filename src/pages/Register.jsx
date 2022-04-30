import React from 'react'
import MainFooter from '../components/MainFooter';
import MainHeader from '../components/MainHeader'

function Register() {
  return (
    <div className="bg-indigo-100 h-3/4">
      <MainHeader />

        <div class="container rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto px-4 py-2 mt-5 lg:px-20 h-3/4">
            {/* <div class="flex z-0 ">
                <div class="lg:w-1/2 mt-20 mb-12">
                    <h2 class="text-gray-800 font-bold text-5xl tracking-tighter  leading-tight mb-4" style={{fontFamily: "Roboto"}}>FANTASY SOCCER TO PLAY WITH PLEASURE
                    </h2>
                    <p class="text-gray-700 text-1xl">Listen to the songs at tip of your finger, feel the vibes and dance.Listen to the songs at tip of your finger, feel the vibes and dance. Listen to the songs at tip of your finger.</p>
                    <div class="flex mt-10">
                        <button type="button"
                            class="bg-indigo-500 text-gray-200 shadow-inner rounded hover:bg-blue-500 px-8 py-2 focus:outline-none mr-4">Sign Up</button>
                        <button type="button"
                            class="flex items-center text-gray-600 rounded px-8 py-2 focus:outline-none">Login to play
                            <span class="ml-2 material-icons hover:text-green-500">
                                arrow_forward
                            </span></button>
                    </div>
                </div>
                <div class="lg:w-1/2">
                    <div class="mt-3 ">
                        <img src="/img/soccer 1.png"  alt='soccer' class="relative" 
                            style={{ animation: "up-down 2s ease-in-out infinite alternate-reverse both"}} />
                    </div>
                </div>
            </div> */}
        </div>  


        <MainFooter />
    </div>
  )
}

export default Register;



