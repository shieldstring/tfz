import React from 'react';

export default function BreadCrumb() {
  return (
    <div class="bg-violet-500 pt-20 lg:pt-[20px] md:pt-[5px] sm:pt-[2px] ">     
        <div class="flex justify-between ">
            <div class="ml-20 lg:w-1/2 mt-16  mb-12">
                <h2 class="text-gray-100 font-bold text-5xl tracking-tighter leading-tight" style={{fontFamily: "Roboto"}}>Tefzon Fantasy
                </h2>                    
            </div>
            <div class="lg:w-1/2 flex-row-reverse ">
                <div class="mt-3 ml-20">
                    <img src="/img/Header Image2.png"  alt='soccer' class="relative"  />
                </div>
            </div>
        </div>
    </div>
  )
}
