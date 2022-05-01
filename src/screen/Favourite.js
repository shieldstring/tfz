import React from 'react'
import MainFooter from '../components/MainFooter'
import MainHeader from '../components/MainHeader'

export default function Favourite() {
  return (
    <div className="bg-[#E5ECFA]/100 h-3/4">
            <MainHeader />

            <div class="container bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-20  w-auto">
                <h1 class="font-bold text-2xl text-gray-700 pb-10 text-center">Create Your Account</h1>

                <div class="flex items-center justify-center pb-20 ">
        
                        <div class="bg-white rounded-2xl border shadow-xl p-10 pb-10 w-full">
                            <div class="p-5">
                                <div class="mx-4 p-4">
                                <div class="flex items-center">
                                    <div class="flex items-center text-white relative">
                                        <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-[#240155]/100 border-[#240155]/100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus ">
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="8.5" cy="7" r="4"></circle>
                                                <line x1="20" y1="8" x2="20" y2="14"></line>
                                                <line x1="23" y1="11" x2="17" y2="11"></line>
                                            </svg>
                                        </div>                                        
                                    </div>
                                    <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-[#240155]/50"></div>

                                    <div class="flex items-center text-white relative">
                                        <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-[#240155]/100 border-[#240155]/100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark ">
                                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                            </svg>
                                        </div>                                        
                                    </div>
                                    <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                                   
                                    <div class="flex items-center text-gray-500 relative">
                                        <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail ">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                        </div>                                        
                                    </div>

                                </div>
                                </div>

                                <div class="flex flex-col items-center pt-20 space-y-4 max-w-lg mx-auto">
                                    <h1 class="font-bold text-lg text-gray-700 w-4/6 text-center">Your Favourites</h1>
                                    <p class="text-sm text-gray-500 text-center w-5/6">Please type carefully and fill out the form with Personal details. You can't edit these details once you submit the form.</p>
                                </div> 

                                <div class="mt-8 p-4">
                                
                                    <div class="w-full border">
                                        <section class="max-w-6xl mx-auto  ">
                                            <div class="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 ">
                                                <div class="w-full border  sahdow-lg p-8  flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/arsenal-logo-vector-200x200 1.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">arsenal</p>
                                                    </div>
                                                </div>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Manchester United Football Club Limited Icon undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Manchester United</p>
                                                         </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Barcelona Icon undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Barcelona</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Juventus Football Club Logo undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Juventus</p>
                                                             </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Chelsea Football Club Icon undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Chelsea</p>
                                                         </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Real Madrid C.F. Logo undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Real Madrid</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Aston Villa Logo undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Aston Villa</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Manchester City Logo undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Manchester City</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Liverpool FC Logo undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Liverpool FC</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Fcporto Logo undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Fc porto</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Sevilla FC Logo undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Sevilla</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Atlético de Madrid Icon undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Atlético de Madrid</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Roma F. C. Soccer Academy Logo undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Roma FC</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Ville de Lyon Icon undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Lyon</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Paris Saint-Germain F.C. Logo undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Paris Saint-Germain</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Realbetisbalompie Logo undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Real Betis</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Palmeiras Logo undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Palmeiras</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Cariverplate Logo undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Cariverplate</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Argentina F.C. Icon undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Argentina F.C</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/AFC Ajax Logo undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">AFC Ajax</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Sporting CP Academy Toronto Icon undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Sporting</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Sou_Flamengo Icon undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2"> Flamengo</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Tottenham Hotspur Icon undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Tottenham</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/West Ham United Football Club Logo undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">West Ham United </p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Borussia Dortmund Logo undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Borussia Dortmund</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Napoli Icon undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">SSC Napoli</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Crystal Palace F.C. Logo undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Crystal Palace</p>
                                                    </div>
                                                </button>
                                                <button class="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                                                    <div class="mb-8">
                                                        <img class="object-center object-cover rounded-full h-26 w-26" src="/img/Celtics Blog Logo undefined.png" alt="club" />
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="text-sm text-gray-700 font-normal mb-2">Celtics</p>
                                                    </div>
                                                </button>
                                            </div>
                                        </section>
                                    </div>

                                    <div class=" p-2 mt-10 justify-center border-b border-gray-200 pb-10">
                                        <button class="text-base hover:scale-110 focus:outline-none flex justify-center px-20 py-2  font-bold cursor-pointer                                 
                                            hover:bg-blue-500 shadow-inner 
                                            bg-gray-200 text-gray-500
                                            duration-200 ease-in-out 
                                            transition mx-auto"><div class="font-sans text-sm font-bold px-10">Load more clubs</div></button> 

                                    </div>

                                    <div class=" p-2 mt-10 justify-center">
                                        <button class="text-base hover:scale-110 focus:outline-none flex justify-center px-10 py-2 rounded font-bold cursor-pointer                                 
                                            hover:bg-blue-500 shadow-inner rounded-lg
                                            bg-violet-500 text-gray-200
                                            duration-200 ease-in-out 
                                            transition mx-auto"><div class="font-sans text-sm font-bold px-10">Next</div></button> 
                                        <button type="button"
                                        class="flex items-center text-gray-500 rounded py-2 focus:outline-none mx-auto">
                                        <span class=" -mr-20 material-icons hover:text-green-500">
                                            arrow_backward
                                        </span>Back to favourites</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                </div>            
            </div>


      <MainFooter />
  </div>
  )
}
