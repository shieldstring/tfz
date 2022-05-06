import React from 'react';
import Header from '../components/Header';
import MainBreadCrumb from '../components/MainBreadCrumb';
import MainFooter from '../components/MainFooter';

function CreateLeauge() {
  return (
    <div className="bg-[#E5ECFA]/100 h-3/4">
        <Header />
        <MainBreadCrumb />


        



            <div class="container max-w-3xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 md:w-3/5 ml-24 mt-10 mb-20  px-4 py-6 lg:px-20  w-auto">          
        
                {/* <div class="rounded-2xl border shadow-xl py-20 px-20 w-full " style={{backgroundImage: 'url("/img/Pitch Background.png")'}}>
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
                </div> */}
                            
            </div>

        <MainFooter />
    </div>
  )
}

export default CreateLeauge