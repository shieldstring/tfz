import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Header from '../components/Header'
import MainFooter from '../components/MainFooter'


function NameTeam() {
  return (
    <div className="bg-[#E5ECFA]/100 h-3/4">
        <Header />
        <BreadCrumb />


        <form>
            <div class="container  mx-auto px-6 pt-10  lg:px-20 flex items-center  justify-between flex-wrap">
                <div class="flex items-center flex-shrink-0 text-gray-600 mr-6">                             
                    <h1 class="font-bold text-4xl text-gray-700  text-center">Name Your Team</h1>                
                </div>
                <div             
                    class="w-full items-center block flex-grow md:flex md:justify-end md:w-auto">
                    <div>
                    <button class="text-base hover:scale-110 focus:outline-none flex justify-center px-2 py-2 rounded font-bold cursor-pointer                                 
                                    hover:bg-blue-500 shadow-inner 
                                    bg-teal-400 text-gray-200
                                    duration-200 ease-in-out 
                                    transition" type='submit'><div class="font-sans text-sm font-semibold px-2">Next</div></button>
                                
                    </div>
                </div>
            </div>

            <hr class="my-6 max-w-6xl rounded-lg border-b-2 border-violet-500 mx-auto" />


            <div class="container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-20  w-auto">          
        
                <div class="rounded-2xl border shadow-xl py-20 px-20 w-full " style={{backgroundImage: 'url("/img/Pitch Background.png")'}}>
                    <div class="bg-violet-700 flex items-center justify-center pb-20 "> 
                        <div class="flex flex-col items-center space-y-4 py-20">
                            <h1 class="font-normal text-2xl text-gray-100 w-4/6 text-center">Choose A Team Name</h1>
                            <p class="text-xs text-gray-100 text-center w-full">You can not change your team name after the first matchday you play in</p>
                                <div class=" my-2  flex border border-gray-200 rounded svelte-1l8159u w-full">
                                    <input placeholder="Enter Team Name" class="p-2 px-2 appearance-none outline-none w-full text-gray-800 bg-50 bg-violet-50"  required/> 
                                </div>                                              
                                <h3 class="text-bold text-gray-100 text-center w-full">Maximum of 25 Characters</h3>
                        </div>
                    </div> 
                </div>
                            
            </div>
        </form>

        <MainFooter />
    </div>
  )
}

export default NameTeam;