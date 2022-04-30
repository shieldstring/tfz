import React from 'react'
import MainFooter from '../components/MainFooter'
import MainHeader from '../components/MainHeader'

export default function Thanks() {
  return (
<div className='h-full bg-[#E5ECFA]/100'>
        <MainHeader />


        <div class="container bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-20  w-auto">
             <h1 class="font-bold text-2xl text-gray-700 pb-10 text-center">Your Account</h1>

            <div class="flex items-center justify-center pb-20 ">
    
                    <div class="bg-white rounded-2xl border shadow-xl p-10 max-w-lg pb-10 ">
                        <div class="mt-10 -translate-y-1/2 transform">
                            <img src="/img/edit.png" alt="edit" title="edit" class="mx-auto" />
                        </div>

                        <div class="flex flex-col items-center space-y-4">
                            <h1 class="font-bold text-2xl text-gray-700 w-4/6 text-center">Thanks For Registering</h1>
                            <p class="text-sm text-gray-500 text-center w-5/6">Please check the message sent to kolagk@gmail.com. Confirming the message allow you to complete the process.</p>
                            <a href="#" class="w-full sm:w-auto bg-indigo-500 text-gray-200 shadow-inner rounded hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                    <div class="font-sans text-sm font-semibold px-10">Go To Email</div>
                            </a>

                        </div>
                    </div>
            </div>            
        </div>

  
        <hr class="my-60 max-w-lg my-6 rounded-lg border-b-2 border-violet-500 mx-auto" />

        
        <MainFooter />
    </div>
  )
}
