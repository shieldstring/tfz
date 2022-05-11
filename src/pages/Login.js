import React from 'react'
import MainFooter from '../components/MainFooter';
import MainHeader from '../components/MainHeader';

function Login() {
  return (
    <div className="bg-[#E5ECFA]/100 h-3/4">
			<MainHeader />

			<div class="container bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-20  w-auto">
				<h1 class="font-bold text-2xl text-gray-700 pb-10 text-center">
					Create Your Account
				</h1>

				
			</div>

			<MainFooter />
		</div>
  )
}

export default Login;