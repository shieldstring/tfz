import React from 'react';
import Header from '../components/Header';
import MainBreadCrumb from '../components/MainBreadCrumb';
import MainFooter from '../components/MainFooter';

function CreateLeague() {
  return (
    <div className="bg-[#E5ECFA]/100 h-3/4">
        <Header />
        <MainBreadCrumb />


        



            <div class="container max-w-4xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 md:w-3/5 ml-24 mt-10 mb-20  px-4 py-6 lg:px-20  w-auto">          
        
                <form>
                    <div class="flex flex-col  pt-10 space-y-4 max-w-lg mx-2">
                        <h1 class="font-bold text-3xl text-gray-700 w-4/6 ">Create a League</h1>
                        <p class="text-sm text-gray-500  w-5/6">Please type carefully and fill out the form with Personal details. You can't edit these details once you submit the form.</p>
                    </div> 

                    <div class="mt-8 p-1">
                        <div>                                    
                            <div class="flex flex-col md:flex-row">
                                <div class="w-full mx-2 flex-1 svelte-1l8159u">
                                <label class="text-gray-600 font-normal text-sm mb-2 ml-1">League type</label>
                                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                        <select class="form-select w-full px-3 py-2   rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                    <option value="">Public</option>
                                                    <option value="02">Private</option>
                                                    <option value="03">Female</option>
                                                    <option value="04">Prefer not to state</option>                                                  
                                        </select>
                                    </div>
                                </div>
                                <div class="w-full mx-2 flex-1 svelte-1l8159u">
                                <label class="text-gray-600 font-normal text-sm mb-2 ml-1">Paid/Free</label>
                                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                        <select class="form-select w-full px-3 py-2   rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                            <option value="">Paid</option>
                                            <option value="02">Free</option>                                                                                                            
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row pt-2">
                                <div class="w-full mx-2 flex-1 svelte-1l8159u">
                                    <label class="text-gray-600 font-normal text-sm mb-2 ml-1">League title</label>
                                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                        <input  class="p-1 px-2 appearance-none outline-none w-full text-gray-700" /> </div>
                                </div>

                                <div class="w-full mx-2 flex-1 svelte-1l8159u">
                                    <label class="text-gray-600 font-normal text-sm mb-2 ml-1">League duration</label>
                                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                        <input  class="p-1 px-2 appearance-none outline-none w-full text-gray-700" /> </div>
                                </div>
                                
                            </div>

                            <div class="flex flex-col md:flex-row pt-2">
                                <div class="w-full mx-2 flex-1 svelte-1l8159u">
                                    <label class="text-gray-600 font-normal text-sm mb-2 ml-1">Amount</label>
                                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                        <input  class="p-1 px-2 appearance-none outline-none w-full text-gray-700" /> </div>
                                </div>

                                <div class="w-full mx-2 flex-1 svelte-1l8159u">
                                    <label class="text-gray-600 font-normal text-sm mb-2 ml-1">Winning type</label>
                                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                        <select class="form-select w-full px-3 py-2   rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                    <option value="">First - Third Position</option>                                                    
                                                    <option value="04">Prefer not to state</option>                                                  
                                        </select>
                                    </div>
                                </div> 
                            </div>  

                            <div class="flex flex-col md:flex-row pt-2">
                                <div class="w-full mx-2 flex-1 svelte-1l8159u">
                                    <label class="text-gray-600 font-normal text-sm mb-2 ml-1">League code</label>
                                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                        <input placeholder="E-mail" class="p-1 px-2 appearance-none outline-none w-full text-gray-700" /> </div>
                                </div>
                                
                            </div> 
                        </div>                               
                    </div>
                </form>

                <div class="w-full bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mt-5 py-6">
                    <h1 class="font-normal text-md  text-gray-700 px-5 pb-2 ">Your Account</h1>
                    <div class="  px-5  ">
                        <div class="bg-stone-200 rounded-sm border shadow-xl p-5 w-full pb-10 ">
                            <div class="flex flex-col  space-y-4">                            
                                <p class="text-sm text-gray-500 w-5/6">Please check the message sent to kolagk@gmail.com. Confirming the message allow you to complete the process.</p>
                                <div class="flex ">
                                    <div class="bg-white  flex border border-gray-200 svelte-1l8159u w-full">
                                        <input placeholder="Enter email" class="p-1 appearance-none outline-none w-full text-gray-700" /> </div>
                                        <button type="button" class="bg-indigo-500 text-gray-200 shadow-inner rounded hover:bg-blue-500 px-2 py-2 focus:outline-none w-1/4 ml-2">Sign Up</button>
                                </div>


                                <main class="w-full px-5">
                                    <content class="grid grid-cols-6">
                                        <div class="">
                                            <img src="https://picsum.photos/200/200" class="h-8 w-8 rounded-full" alt='pics' />
                                        </div>

                                        <div class="col-span-3 px-1 font-normal flex flex-col">
                                        <div class="text-sm py-1"> Sangwa Albine </div>                                    
                                        </div>

                                        <div class="col-span-2  justify-self-end">
                                        <button class=" text-gray-500 text-sm font-normal text-md rounded-full py-1 px-4">
                                            Organizer
                                        </button>
                                        </div>

                                    </content>


                                    <content class="grid grid-cols-6 mt-6">

                                        <div class=" ">
                                            <img src="https://picsum.photos/200/200?i=200" class="h-8 w-8 rounded-full" alt='pics'/>
                                        </div>

                                        <div class="col-span-3 px-1 font-normal flex flex-col ">
                                            <div class="text-sm"> Mbonyintege </div>                                    
                                        </div>

                                        <div class="col-span-2  justify-self-end">
                                            <button class=" text-gray-500 text-sm font-normal text-md rounded-full py-1 px-4">
                                                <span class="ml-2 material-icons hover:text-green-500">
                                                    more_vert
                                                </span>
                                            </button>
                                        </div>
                                    </content>
                                </main>
                            </div>       
                        </div> 
                        <div className='flex bg-white px-2 py-5 border'>
                            <p class="text-sm text-gray-500 w-5/6 font-sm">https://www.tefzon.com/c/MzcxODgzjNKUI?ctht</p>

                            <h2 className='text-indigo-800'>Copy link</h2>
                        </div>                    
                    </div>      
                </div>
                            
            </div>

            <div className='container mb-5'>
                <hr class="mt-20 max-w-6xl rounded-lg border-b-2 border-violet-500 mx-auto " />
                
                <div class="ml-16 max-w-6xl flex mb-5" >                
                    <div class="rounded-2xl bg-gray-200 border mt-5  py-5 px-3 w-1/6 h-24" > </div>
                    <div class="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24" > </div>
                    <div class="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24" > </div>
                    <div class="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24" > </div>
                    <div class="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24" > </div>
                    <div class="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24" > </div>
                    
                </div>
            </div>

        <MainFooter />
    </div>
  )
}

export default CreateLeague;