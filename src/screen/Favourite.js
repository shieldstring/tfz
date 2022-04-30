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
                                    <div>                                    
                                        <div class="flex flex-col md:flex-row">
                                            <div class="w-full flex-1 mx-2 svelte-1l8159u">
                                                <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                                    <input placeholder="First Name" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" /> </div>
                                            </div>
                                            <div class="w-full flex-1 mx-2 svelte-1l8159u">
                                                <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                                    <input placeholder="Last Name" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" /> </div>
                                            </div>
                                        </div>

                                        <div class="flex flex-col md:flex-row pt-8">
                                            <div class="w-full mx-2 flex-1 svelte-1l8159u">
                                                
                                                <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                                    <input placeholder="E-mail" class="p-1 px-2 appearance-none outline-none w-full text-gray-700" /> </div>
                                            </div>
                                            <div class="w-full mx-2 flex-1 svelte-1l8159u">
                                                {/* <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Your Email</div> */}
                                                <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                                    <input placeholder="password" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" type="password" /> 
                                                    <div class="flex -mr-px">
                                                    <span
                                                        class="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600"
                                                        >
                                                        <button class="text-base hover:scale-110 focus:outline-none flex justify-center py-1 rounded cursor-pointer                                 
                                                        hover:bg-gray-300 shadow-inner rounded-lg
                                                        bg-gray-200 text-gray-500
                                                        duration-200 ease-in-out 
                                                        transition">
                                                            <div class="font-sans text-sm font-light  px-3">Show</div>
                                                        </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="flex flex-col md:flex-row pt-4">
                                            <div class="w-full mx-2 flex-1 svelte-1l8159u">
                                            <label class="text-gray-600 font-normal text-sm mb-2 ml-1"></label>
                                                <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                                    <select class="form-select w-full px-3 py-2   rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                                <option value="">Select Gender</option>
                                                                <option value="02">Male</option>
                                                                <option value="03">Female</option>
                                                                <option value="04">Prefer not to state</option>                                                  
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="w-full mx-2 flex-1 mt-2 svelte-1l8159u">
                                                <label class="text-gray-600 font-normal text-sm mb-9 ml-1">Mobile number</label>
                                                <div class="bg-white  border border-gray-200  rounded svelte-1l8159u">                                                                                         
                                                    <div class="flex items-end -mb-1">
                                                        <div class="w-1/3">                                                                                                         
                                                            <div>
                                                                <select class="form-select w-full px-3 py-3 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                                    <option value="">Date </option>
                                                                    <option value="01">01 </option>
                                                                    <option value="02">02 </option>
                                                                    <option value="03">03 </option>
                                                                    <option value="04">04 </option>
                                                                    <option value="05">05 </option>
                                                                    <option value="06">06 </option>
                                                                    <option value="07">07 </option>
                                                                    <option value="08">08 </option>
                                                                    <option value="09">09 </option>
                                                                    <option value="10">10 </option>
                                                                    <option value="11">11 </option>
                                                                    <option value="12">12 </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="px-2 w-1/3">                                                        
                                                            <div>
                                                                <select class="form-select w-full px-3 py-3 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                                    <option value="">Month</option>
                                                                    <option value="01">January</option>
                                                                    <option value="02">February</option>
                                                                    <option value="03">March</option>
                                                                    <option value="04">April</option>
                                                                    <option value="05">May</option>
                                                                    <option value="06">June</option>
                                                                    <option value="07">July</option>
                                                                    <option value="08">August</option>
                                                                    <option value="09">September</option>
                                                                    <option value="10">October</option>
                                                                    <option value="11">November</option>
                                                                    <option value="12">December</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class=" w-1/3">
                                                            <select class="form-select w-full px-3 py-3 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                                <option value="">Year</option>
                                                                <option value="2021">2021</option>
                                                                <option value="2022">2022</option>
                                                                <option value="2023">2023</option>
                                                                <option value="2024">2024</option>
                                                                <option value="2025">2025</option>
                                                                <option value="2026">2026</option>
                                                                <option value="2027">2027</option>
                                                                <option value="2028">2028</option>
                                                                <option value="2029">2029</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="flex flex-col md:flex-row pt-7">
                                            <div class="w-full mx-2 flex-1 svelte-1l8159u">
                                                
                                                <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                                    <select class="form-select w-full px-3 py-2   rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                                <option value="">Select Country</option>
                                                                <option value="02">Niger</option>
                                                                <option value="03">Boni</option>
                                                                <option value="04">PAmerica</option>                                                  
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="w-full mx-2 flex-1 svelte-1l8159u">
                                                {/* <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">                                                 */}
                                                    <div class="mb-3 -mx-2 flex items-end ">
                                                        <div class="px-2 w-1/4">                                                        
                                                            <div>
                                                            <label class="text-gray-600 font-normal text-sm mb-2 ml-1">Mobile number</label>
                                                                <select class="form-select w-full px-3 py-3 mb-1 border border-gray-200 rounded focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                                    <option value="01">Code</option>
                                                                    <option value="02">+222</option>
                                                                    <option value="03">+223</option>
                                                                    <option value="04">+234</option>                                                                
                                                                </select>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="px-2 w-3/4">                                                        
                                                            <div>
                                                                <input class="w-full px-2 py-2 mb-1 border border-gray-200 rounded focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Enter number" type="text"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                {/* </div> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex p-2 mt-4 justify-center">

                                        <button class="text-base hover:scale-110 focus:outline-none flex justify-center px-10 py-2 rounded font-bold cursor-pointer 
                                    
                                    hover:bg-blue-500 shadow-inner rounded-lg
                                    bg-violet-500 text-gray-200
                                    duration-200 ease-in-out 
                                    transition"><div class="font-sans text-sm font-semibold px-10">Next</div></button>
                                        
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
