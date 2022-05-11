import React from "react";
import Header from "../components/Header";
import MainBreadCrumb from "../components/MainBreadCrumb";
import MainFooter from "../components/MainFooter";

function Wallet() {
	return (
		<div className="bg-[#E5ECFA]/100 h-3/4">
			<Header />
			<MainBreadCrumb />

			<div className="container">
				<div className="flex">
					<div class="container max-w-3xl h-3/4  bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-lg shadow-indigo-500/50 md:w-3/5 ml-24 mt-10 mb-20  px-2 py-6 lg:px-10  w-auto">
						<div class="flex flex-col  pt-10 space-y-4 max-w-2xl mx-2">
							<h1 class="font-bold text-3xl text-gray-700 w-4/6 ">Wallet</h1>
							<p class="text-sm text-gray-500 mb-20 w-5/6">
								There are many variations of passages of Lorem Ipsum available
								but the majority have suffered alteration in same form by
								injected.
							</p>

							<div class="lg:w-3/5 md:w-3/4 h-48  bg-red-100 rounded-xl relative text-white shadow-lg transition-transform transform hover:scale-110">
								<img
									class="relative object-cover w-full h-full rounded-xl"
									src="/img/cardbg.png"
									alt="cardbg"
								/>

								<div class="w-full px-8 absolute top-8">
									<div class="flex justify-between">
										<div class="">
											<p class="font-light text-sm">Tefzone Wallet</p>
										</div>
									</div>
									<div class="pt-4">
										<p class="font-medium tracking-more-wider text-2xl">
											₦5,000
										</p>
									</div>
									<div class="pt-8 pr-6">
										<div class="flex justify-between">
											<div class="">
												<p class="font-light text-xs">Number</p>
												<p class="font-medium tracking-wider text-sm">
													1234 5678 9012 9012
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="flex flex-col md:flex-row py-10">
								<div class="w-full mx-2 flex-1 svelte-1l8159u">
									<button
										class="text-base shadow-lg shadow-indigo-500/50 hover:scale-110 focus:outline-none flex justify-center px-20 py-2 rounded font-bold cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-violet-500 text-gray-200
                                 duration-200 ease-in-out 
                                 transition"
									>
										<div class="font-sans text-sm font-semibold px-10">
											Next
										</div>
									</button>
								</div>

								<div class="w-full mx-2 flex-1 svelte-1l8159u">
									<button
										class="text-base shadow-lg shadow-indigo-500/50 hover:scale-110 focus:outline-none flex justify-center px-20 py-2 rounded font-bold cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-violet-500 text-gray-200
                                 duration-200 ease-in-out 
                                 transition"
									>
										<div class="font-sans text-sm font-semibold px-10">
											Next
										</div>
									</button>
								</div>
							</div>
						</div>
					</div>

					<div class="container max-w-sm bg-violet-700  border-inherit rounded-xl shadow-lg shadow-indigo-500/50 md:w-3/5 ml-24 mt-10 mb-20  px-4 py-6 lg:px-5  w-auto">
						<div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
							<div class="md:flex">
								<div class="w-full">
									<div class="relative">
										<i class="absolute fa fa-search text-gray-400 top-3 left-4"></i>
										<input
											type="text"
											class="bg-gray-100 h-10 w-full text-xs px-12 rounded-lg focus:outline-none hover:cursor-pointer"
											name="sesrch"
											placeholder="search transantions"
										/>
									</div>
								</div>
							</div>
						</div>

						<div class="w-full  ">
							<h1 class="font-bold text-lg  text-gray-100  mt-5 py-4 ">
								Recent Transactions
							</h1>
							<div class="  px-1  ">
								<div class="bg-gray-100 rounded-sm border shadow-xl p-5 w-full pb-10 ">
									<div class="flex items-center border-b border-gray-300 py-3">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">
												<p
													tabindex="0"
													class="focus:outline-none text-sm font-medium leading-5 text-gray-800"
												>
													Deposite
												</p>
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													To: Tefzone wallet
												</p>
											</div>

											<div class=" pl-24 w-full text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-gray-800"
												>
													₦5,000
												</p>
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													10/08/2021
												</p>
											</div>
										</div>
									</div>
									<div class="flex items-center border-b border-gray-300 py-3">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">
												<p
													tabindex="0"
													class="focus:outline-none text-sm font-medium leading-5 text-gray-800"
												>
													Withdraw
												</p>
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													To: Access bank
												</p>
											</div>

											<div class=" pl-24 w-full text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-gray-800"
												>
													₦5,000
												</p>
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													10/08/2021
												</p>
											</div>
										</div>
									</div>
									<div class="flex items-center border-b border-gray-300 py-3">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">
												<p
													tabindex="0"
													class="focus:outline-none text-sm font-medium leading-5 text-gray-800"
												>
													Deposite
												</p>
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													To: Tefzone wallet
												</p>
											</div>

											<div class=" pl-24 w-full text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-gray-800"
												>
													₦5,000
												</p>
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													10/08/2021
												</p>
											</div>
										</div>
									</div>
									<div class="flex items-center border-b border-gray-300 py-3">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">
												<p
													tabindex="0"
													class="focus:outline-none text-sm font-medium leading-5 text-gray-800"
												>
													Withdraw
												</p>
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													To: Tefzone wallet
												</p>
											</div>

											<div class=" pl-24 w-full text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-gray-800"
												>
													₦5,000
												</p>
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													10/08/2021
												</p>
											</div>
										</div>
									</div>
									<div class="flex items-center border-b border-gray-300 py-3">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">
												<p
													tabindex="0"
													class="focus:outline-none text-sm font-medium leading-5 text-gray-800"
												>
													Deposite
												</p>
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													To: Tefzone wallet
												</p>
											</div>

											<div class=" pl-24 w-full text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-gray-800"
												>
													₦5,000
												</p>
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													10/08/2021
												</p>
											</div>
										</div>
									</div>
									<div class="flex items-center border-b border-gray-300 py-3">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">
												<p
													tabindex="0"
													class="focus:outline-none text-sm font-medium leading-5 text-gray-800"
												>
													Withdraw
												</p>
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													To: Tefzone wallet
												</p>
											</div>

											<div class=" pl-24 w-full text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-gray-800"
												>
													₦5,000
												</p>
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													10/08/2021
												</p>
											</div>
										</div>
									</div>
									<div class="flex items-center border-b border-gray-300 py-3">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">
												<p
													tabindex="0"
													class="focus:outline-none text-sm font-medium leading-5 text-gray-800"
												>
													Deposite
												</p>
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													To: Tefzone wallet
												</p>
											</div>

											<div class=" pl-24 w-full text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-gray-800"
												>
													₦5,000
												</p>
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													10/08/2021
												</p>
											</div>
										</div>
									</div>

									<div class="flex items-center border-b border-gray-300 py-3">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">
												<p
													tabindex="0"
													class="focus:outline-none text-sm font-medium leading-5 text-gray-800"
												>
													Deposite
												</p>
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													To: Tefzone wallet
												</p>
											</div>

											<div class=" pl-24 w-full  text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-gray-800"
												>
													₦5,000
												</p>
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													10/08/2021
												</p>
											</div>
										</div>
									</div>
								</div>
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

export default Wallet;
