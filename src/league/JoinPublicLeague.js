import React from "react";
import Header from "../components/Header";
import MainBreadCrumb from "../components/MainBreadCrumb";
import MainFooter from "../components/MainFooter";

function JoinPublicLeague() {
	return (
		<div className="bg-[#E5ECFA]/100 h-3/4">
			<Header />
			<MainBreadCrumb />

			<div class=" container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-20  w-auto">
				<div className="flex">
					<div class=" w-3/4 ">
						<div class="py-1 px-1 w-full">
							<div class="flex flex-col space-y-4 mb-5">
								<h1 class="font-semibold text-3xl text-gray-800 w-4/6 ">
									Join public league
								</h1>
								<p class="text-sm  py-2  text-gray-800  w-full">
									Public leagues allow you to compete against 20 randomly
									assigned game players in a classic league and up to 16 in
									head-to-head leagues. You can join up to 5 public leagues.
								</p>
							</div>

							<div class="flex flex-col space-y-2 mb-10">
								<h1 class="font-bold text-2xl text-gray-800 w-4/6 ">
									Paid leagues
								</h1>
								<p class="text-sm  py-2 text-gray-800   w-full">
									Note, you can't remove your team from a public league after
									the league has started, once the challenge is on there's no
									quitting.
								</p>
								<button
									class="text-base shadow-xl shadow-indigo-500/50 hover:scale-110 focus:outline-none flex justify-center px-5 py-2 rounded font-bold cursor-pointer w-1/5                               
                                hover:bg-blue-500 
                                bg-violet-400 text-gray-200
                                 duration-200 ease-in-out 
                                 transition"
								>
									<div class="flex font-sans text-xs font-semibold ">
										<span className="pt-1">Join Paid League</span>
									</div>
								</button>
							</div>

							<div class="flex flex-col space-y-2  mb-10">
								<h1 class="font-bold text-2xl text-gray-800 w-4/6 ">
									Free leagues
								</h1>
								<p class="text-sm py-2 text-gray-800   w-full">
									Note, you can't remove your team from a public league after
									the league has started, once the challenge is on there's no
									quitting.
								</p>

								<button
									class="text-base shadow-xl shadow-indigo-500/50 hover:scale-110 focus:outline-none flex justify-center px-5 py-2 rounded font-bold cursor-pointer w-1/4                                
                                hover:bg-blue-500 
                                bg-violet-400 text-gray-200
                                 duration-200 ease-in-out 
                                 transition"
								>
									<div class="flex font-sans text-xs font-semibold ">
										<span className="pt-1">Join Free League</span>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container ml-24 max-w-6xl">
				<hr class="mt-20 max-w-6xl rounded-lg border-b-2 border-violet-500 mx-auto " />

				<div class="w-full flex mb-5">
					<div class="rounded-2xl bg-gray-200 border mt-5  py-5 px-3 w-1/6 h-24">
						{" "}
					</div>
					<div class="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
						{" "}
					</div>
					<div class="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
						{" "}
					</div>
					<div class="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
						{" "}
					</div>
					<div class="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
						{" "}
					</div>
					<div class="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
						{" "}
					</div>
				</div>
			</div>

			<MainFooter />
		</div>
	);
}

export default JoinPublicLeague;
