import React from "react";
import Header from "../components/Header";
import MainBreadCrumb from "../components/MainBreadCrumb";
import MainFooter from "../components/MainFooter";

function Fixtures() {
	return (
		<div className="bg-[#E5ECFA]/100 h-3/4">
			<Header />
			<MainBreadCrumb />

			<div className="container">
				<div class="flex justify-center items-center  mt-12">
					<div class="inline-flex rounded">
						<input
							type="radio"
							name="room_type"
							id="fixtures"
							checked
							hidden
						/>
						<label
							for="fixtures"
							class="radio text-center text-gray-100 self-center py-3 px-16 border cursor-pointer bg-red-800 hover:opacity-75"
						>
							Fixtures
						</label>
					</div>
					<div class="inline-flex rounded -ml-1">
						<input type="radio" name="room_type" id="fdr" hidden />
						<label
							for="fdr"
							class="radio text-center text-gray-100 self-center py-3 px-20 border rounded-sm cursor-pointer bg-red-800  hover:opacity-75"
						>
							FDR
						</label>
					</div>
				</div>
				<h1 class="font-medium text-xl text-gray-900 w-4/6 ml-24 mt-10 px-2 w-auto">
					Fixtures & Results
				</h1>
				<div class="container max-w-4xl h-3/4 bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-lg shadow-indigo-500/50  ml-24 mt-5 mb-20  px-2 py-6 lg:px-10  ">
					<div class="flex flex-col  pt-10 space-y-4 max-w-3xl mx-2">
						<div class="mx-auto flex-1 svelte-1l8159u ">
							<button
								class="text-base shadow-inner shadow-gray-200/50 border hover:scale-110 focus:outline-none flex justify-center px-5 py-2 rounded font-medium cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-white text-gray-700
                                 duration-200 ease-in-out 
                                 transition"
							>
								<div class="flex font-sans text-xs font-medium py-1">
									<span class=" material-icons hover:text-gray-100">
                                    calendar_month
									</span>
									<span className="pl-3  pt-1">Sync to Calendar</span>
								</div>
							</button>
						</div>
						<div class="flex flex-col md:flex-row py-10">
							<div class="w-full mx-2 flex-1 svelte-1l8159u">
								<button
									class="text-base shadow-xl shadow-indigo-500/50 hover:scale-110 focus:outline-none flex justify-center px-5 py-2 rounded font-bold cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-violet-400 text-gray-200
                                 duration-200 ease-in-out 
                                 transition"
								>
									<div class="flex font-sans text-xs font-semibold ">
										<span class=" material-icons hover:text-gray-100">
											arrow_backward
										</span>{" "}
										<span className="pt-1">Previous</span>
									</div>
								</button>
							</div>
							<h1 class="font-bold text-sm text-center text-gray-700 w-4/6 pt-3 px-5 ">
								Gameweek 20 - Tue 26 Jan 17:30
							</h1>
							<div class="w-full mx-2 flex-1 svelte-1l8159u">
								<button
									class="text-base shadow-xl shadow-indigo-500/50 hover:scale-110 focus:outline-none flex justify-center px-5 py-2 rounded font-bold cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-violet-400 text-gray-200
                                 duration-200 ease-in-out 
                                 transition"
								>
									<div class="flex font-sans text-xs font-semibold px-5">
										<span className="pt-1"> Next</span>
										<span class="ml-20 material-icons hover:text-gray-100 ">
											arrow_forward
										</span>{" "}
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container mb-5">
				<hr class="mt-20 max-w-6xl rounded-lg border-b-2 border-violet-500 mx-auto " />

				<div class="ml-16 max-w-6xl flex mb-5">
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

export default Fixtures;
