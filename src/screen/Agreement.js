import React from 'react'
import MainFooter from '../components/MainFooter'
import MainHeader from '../components/MainHeader'

export default function Agreement() {
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
                                        <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3  bg-[#240155]/100 border-2 border-[#240155]/100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark ">
                                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                            </svg>
                                        </div>                                        
                                    </div>
                                    <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-[#240155]/50"></div>
                                   
                                    <div class="flex items-center text-white relative">
                                        <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 bg-[#240155]/100 border-2 border-[#240155]/100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail ">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                        </div>                                        
                                    </div>

                                </div>
                            </div>

                            <div class="flex flex-col items-center pt-10 space-y-4 max-w-lg mx-auto">
                                <h1 class="font-bold text-lg text-gray-700 w-4/6 text-center">Subscription & Agreement</h1>
                                <p class="text-sm text-gray-500 text-center w-5/6">Please type carefully and fill out the form with Personal details. You can't edit these details once you submit the form.</p>
                            </div> 

                            <div class="mt-8 p-4">
                                <div className='border-b border-gray-200'> 
                                        <div class="py-2 bg-white text-gray-700 font-bold uppercase">
                                        Newsletter
                                        </div>
                                        
                                        <div class="text-gray-400 bg-white font-medium text-xs leading-loose w-5/6">                                            
                                        This apartment is an inviting choice. Created as a space to spend time in, there's extra room in the open-plan living area, allowing guests to stretch out; whether relaxing on the sofa or enjoying the kitchen. The bedroom and bathroom are also spacious, and continue the sense of warm yet contemporary design, with touches of colour. This apartment is an inviting choice. Created as a space to spend time in, there's extra room in the open-plan living area, allowing guests to stretch out; whether relaxing on the sofa or enjoying the kitchen. 
                                        </div>    

                                        <div class="flex items-center py-10 ">
                                            <input type="checkbox" class="w-8 h-8 text-black bg-gray-300 border-none rounded-md focus:ring-transparent" /><label for="News" class="block ml-2 text-sm font-bold text-gray-900">I agree to recieve football related news</label>
                                        </div>

                                        <div class="py-2 bg-white text-gray-700 font-bold uppercase">
                                        Our Privacy Policy
                                        </div>
                                        
                                        <div class="text-gray-400 bg-white font-medium text-xs leading-loose w-5/6">                                            
                                        This apartment is an inviting choice. Created as a space to spend time in, there's extra room in the open-plan living area, allowing guests to stretch out; whether relaxing on the sofa or enjoying the kitchen. The bedroom and bathroom are also spacious, and continue the sense of warm yet contemporary design, with touches of colour. This apartment is an inviting choice. Created as a space to spend time in, there's extra room in the open-plan living area, allowing guests to stretch out; whether relaxing on the sofa or enjoying the kitchen. 
                                        </div> 

                                        <div class="flex items-center  py-10">
                                            <input type="checkbox" class="w-8 h-8 text-black bg-gray-300 border-none rounded-md focus:ring-transparent" /><label for="Terms" class="block ml-2 text-sm font-bold text-gray-900">I have agreed to the <a href='##' className='text-violet-800'>Terms & Conditions</a></label>
                                        </div>
                                </div>

                                <div class=" p-2 mt-4 justify-center">

                                    <button class="text-base hover:scale-110 focus:outline-none flex justify-center px-10 py-2 rounded font-bold cursor-pointer                                 
                                        hover:bg-blue-500 shadow-inner rounded-lg
                                        bg-violet-500 text-gray-200
                                        duration-200 ease-in-out 
                                        transition mx-auto"><div class="font-sans text-sm font-bold px-10">Complete Registration</div></button> 
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
