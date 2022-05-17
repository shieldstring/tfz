import React from "react";
import Header from "../components/Header";
import MainBreadCrumb from "../components/MainBreadCrumb";
import MainFooter from "../components/MainFooter";

function EntryHistory() {
	return (
		<div className="bg-[#E5ECFA]/100 h-3/4">
			<Header />
			<MainBreadCrumb />

			<div className="container">
				<div className="flex">
					<div class="container flex max-w-4xl h-3/4 bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-lg shadow-indigo-500/50  ml-24 mt-10 mb-20  px-2 py-6 lg:px-10  ">
						<div class="flex flex-col  pt-5  w-full mx-2">
							<h1 class="font-medium text-3xl text-gray-700  ">
								Entry History
							</h1>
							<p class="text-lg font-bold text-gray-700 mb-10 ">This Season</p>

							<table class="w-full">
								<tr class="w-1/2 bg-zinc-400 ">
									<th class="p-2 font-normal text-sm text-center">GW</th>
									<th class="p-2 font-normal text-sm text-center">GP</th>
									<th class="p-2 font-normal text-sm text-center">PB</th>
									<th class="p-2 font-normal text-sm text-left">GR</th>
									<th class="p-2 font-normal text-sm text-center">TM</th>
									<th class="p-2 font-normal text-sm text-center">TC</th>
									<th class="p-2 font-normal text-sm text-center">OP</th>
									<th class="p-2 font-normal text-sm text-left">OR</th>
									<th class="p-2 font-normal text-sm text-center">₦</th>
									<th class="p-2 font-normal text-sm text-center pr-4">#</th>
								</tr>
								<tr class="border-b border-gray-300 py-2">
									<td class="p-2 text-center text-gray-600">GW24</td>
									<td class="p-2 text-center text-gray-600">56</td>
									<td class="p-2 text-center text-gray-600">5</td>
									<td class="p-2 text-left text-gray-600">3.934.456</td>
									<td class="p-2 text-center text-gray-600">0</td>

									<td class="p-2 text-center text-gray-600">0</td>
									<td class="p-2 text-center text-gray-600">62</td>

									<td class="p-2 text-left text-gray-600">7.934.456</td>
									<td class="p-2 text-center text-gray-600">100</td>
									<td class="p-2 text-sm font-normal">
										<span class=" align-middle  material-icons text-5xl text-green-500 ">
											arrow_drop_up
										</span>
									</td>
								</tr>
								<tr class="border-b border-gray-300 py-2">
									<td class="p-2 text-center text-gray-600">GW25</td>
									<td class="p-2 text-center text-gray-600">56</td>
									<td class="p-2 text-center text-gray-600">5</td>
									<td class="p-2 text-left text-gray-600">3.934.456</td>
									<td class="p-2 text-center text-gray-600">0</td>

									<td class="p-2 text-center text-gray-600">0</td>
									<td class="p-2 text-center text-gray-600">62</td>

									<td class="p-2 text-left text-gray-600">7.934.456</td>
									<td class="p-2 text-center text-gray-600">100</td>
									<td class="p-2 text-sm font-normal">
										<span class=" align-middle  material-icons text-5xl text-red-500 ">
											arrow_drop_down
										</span>
									</td>
								</tr>
								<tr class="border-b border-gray-300 py-2">
									<td class="p-2 text-center text-gray-600">GW26</td>
									<td class="p-2 text-center text-gray-600">56</td>
									<td class="p-2 text-center text-gray-600">5</td>
									<td class="p-2 text-left text-gray-600">3.934.456</td>
									<td class="p-2 text-center text-gray-600">0</td>

									<td class="p-2 text-center text-gray-600">0</td>
									<td class="p-2 text-center text-gray-600">62</td>

									<td class="p-2 text-left text-gray-600">7.934.456</td>
									<td class="p-2 text-center text-gray-600">100</td>
									<td class="p-2 text-sm font-normal">
										<span class=" align-middle  material-icons text-5xl text-red-500 ">
											arrow_drop_down
										</span>
									</td>
								</tr>
							</table>

							<h1 class="font-normal text-xl text-gray-800  mt-5 py-5">
								Chips
							</h1>

							<table class="w-full">
								<tr class="w-1/2 bg-stone-300 ">
									<th class="p-2 font-medium text-sm text-left">Date</th>
									<th class="p-2 font-medium text-sm text-center">Name</th>
									<th class="p-2 font-medium text-sm text-center">Active</th>
								</tr>
							</table>

							<h1 class="font-normal text-xl text-gray-800 mt-5 py-5">
								Previous Seasons
							</h1>

							<table class="w-full mb-20">
								<tr class="w-1/2 bg-stone-300 ">
									<th class="p-2 font-medium text-sm text-left">Season</th>
									<th class="p-2 font-medium text-sm text-center">Points</th>
									<th class="p-2 font-medium text-sm text-center">Rank</th>
								</tr>
							</table>
						</div>
					</div>

					<div class="container max-w-sm bg-violet-700  border-inherit rounded-xl shadow-lg shadow-indigo-500/50 md:w-3/5 ml-12 mt-10 mb-20  px-4 py-6 lg:px-5  w-auto">
						<div class="w-full  ">
							<h1 class="font-normal text-lg  text-gray-100  py-2 ">
								Kolawole Olagoke!
							</h1>
							<div class="  px-1  ">
								<div class="bg-gray-100 rounded-sm border shadow-xl p-5 w-full pb-10 ">
									<div class="flex items-center border-b border-gray-300 py-2">
										<div class="flex items-center justify-between w-full ">
											<div class=" w-full">
												<p
													tabindex="0"
													class="focus:outline-none text-sm font-semibold  leading-normal pt-1 text-gray-700"
												>
													KingsMen City
												</p>
											</div>

											<div class=" pl-18 w-full  text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-4xl font-medium leading-5 text-gray-800"
												>
													🇬🇧
												</p>
											</div>
										</div>
									</div>
									<div class="flex items-center border-b border-gray-300 py-1">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full  text-left">
												<p
													tabindex="0"
													class="focus:outline-none  text-lg font-medium leading-5 text-gray-800"
												>
													Points/Rankings
												</p>
											</div>
										</div>
									</div>

									<div class="flex items-center border-b border-gray-300 py-1">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													Overall Points:
												</p>
											</div>

											<div class=" pl-20 w-full  text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-gray-800"
												>
													179
												</p>
											</div>
										</div>
									</div>
									<div class="flex items-center border-b border-gray-300 py-1">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													Overall Rank:
												</p>
											</div>

											<div class=" pl-20 w-full  text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-gray-800"
												>
													7,5934,000
												</p>
											</div>
										</div>
									</div>
									<div class="flex items-center border-b border-gray-300 py-1">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													Total Players:
												</p>
											</div>

											<div class=" pl-20 w-full  text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-gray-800"
												>
													8,793,000
												</p>
											</div>
										</div>
									</div>
									<div class="flex items-center border-b border-gray-300 py-1">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													Gameweek Points:
												</p>
											</div>

											<div class=" pl-18 w-full  text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-gray-800"
												>
													51
												</p>
											</div>
										</div>
									</div>

									<button
										type="button"
										class="flex ml-48 text-right text-indigo-700 text-sm   font-medium rounded  py-3 focus:outline-none"
									>
										Load more
										<span class="ml-2 text-sm material-icons hover:text-blue-500">
											arrow_forward
										</span>
									</button>
								</div>
							</div>

							<div class=" mt-10 px-1  ">
								<div class="bg-gray-100 rounded-sm border shadow-xl p-5 w-full pb-10 ">
									<div class="flex items-center border-b border-gray-300 py-1">
										<div class="flex items-start justify-between w-full ">
											<div class="w-full  text-left">
												<p
													tabindex="0"
													class="focus:outline-none  text-lg font-medium leading-5 text-gray-800"
												>
													Kits
												</p>
											</div>
										</div>
									</div>

									<div class="flex items-center border-b border-gray-300 py-1">
										<div class="w-full  p-4 flex flex-col justify-center items-center">
											<div class="">
												<img
													class="object-center object-cover rounded-full h-32 w-32"
													src="/img/Chelsea Football Club Icon undefined.png"
													alt="club"
												/>
											</div>
										</div>
									</div>

									<button
										type="button"
										class="flex ml-44 text-right text-indigo-700 text-sm   font-medium rounded  py-3 focus:outline-none"
									>
										Design your kit
										<span class="ml-2 text-sm material-icons hover:text-blue-500">
											arrow_forward
										</span>
									</button>
								</div>
							</div>

							<div class=" mt-10 px-1  ">
								<div class="bg-gray-100 rounded-sm border shadow-xl p-5 w-full pb-10 ">
									<div class="flex items-center border-b border-gray-300 py-1">
										<div class="flex items-start justify-between w-full ">
											<div class="w-full  text-left">
												<p
													tabindex="0"
													class="focus:outline-none  text-lg font-medium leading-5 text-gray-800"
												>
													Fan League
												</p>
											</div>
										</div>
									</div>

									<div class="flex items-center border-b border-gray-300 py-1">
										<div class="w-full  p-4 flex flex-col justify-center items-center">
											<div class="">
												<img
													class="object-center object-cover rounded-full h-32 w-32"
													src="/img/Chelsea Football Club Icon undefined.png"
													alt="club"
												/>
											</div>
										</div>
									</div>

									<button
										type="button"
										class="flex ml-44 text-right text-indigo-700 text-sm   font-medium rounded  py-3 focus:outline-none"
									>
										Design your kit
										<span class="ml-2 text-sm material-icons hover:text-blue-500">
											arrow_forward
										</span>
									</button>
								</div>
							</div>

							<div class=" mt-10 px-1  ">
								<div class="bg-gray-100 rounded-sm border shadow-xl p-5 w-full pb-10 ">
									<div class="flex items-center border-b border-gray-300 py-2">
										<div class="flex items-center justify-between w-full ">
											<div class=" w-full">
												<p
													tabindex="0"
													class="focus:outline-none text-sm font-semibold  leading-normal pt-1 text-gray-700"
												>
													Broadcaster League
												</p>
											</div>
										</div>
									</div>

									<div class="flex items-center border-b border-gray-300 py-1">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">												
												<p
													tabindex="0"
													class="focus:outline-none text-xs text-left leading-normal text-gray-500"
												>
													<span class=" align-middle  material-icons text-5xl text-green-500 ">
													arrow_drop_up
												</span>
													1,067,900
												</p>
											</div>

											<div class=" pl-20 w-full pt-3 text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-indigo-800"
												>
													SuperSport
												</p>
											</div>
										</div>
									</div>

									<div class="flex items-center border-b border-gray-300 pt-2 py-1">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full  text-left">
												<p
													tabindex="0"
													class="focus:outline-none  text-lg font-medium leading-5 text-gray-800"
												>
													Classic Leagues
												</p>
											</div>
										</div>
									</div>

									<div class="flex items-center border-b border-gray-300 py-1">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">
												
												<p
													tabindex="0"
													class="focus:outline-none text-xs text-left leading-normal  text-gray-500"
												>
													<span class=" align-middle  material-icons text-5xl text-gray-700 ">
													arrow_drop_down
												</span>
													1
												</p>
											</div>

											<div class=" pl-16 w-full pt-3 text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-indigo-800"
												>
													Champ League
												</p>
											</div>
										</div>
									</div>

									<div class="flex items-center border-b border-gray-300 pt-2 py-1">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full  text-left">
												<p
													tabindex="0"
													class="focus:outline-none  text-lg font-medium leading-5 text-gray-800"
												>
													Global Leagues
												</p>
											</div>
										</div>
									</div>

									<div class="flex items-center border-b border-gray-300 ">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">
												
												<p
													tabindex="0"
													class="focus:outline-none text-xs text-left leading-normal  text-gray-500"
												>
													<span class=" align-middle  material-icons text-5xl text-red-500 ">
													arrow_drop_down
												</span>
													100, 500
												</p>
											</div>

											<div class=" pl-20 w-full pt-3 text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-indigo-800"
												>
													Chelsea
												</p>
											</div>
										</div>
									</div>

									<div class="flex items-center border-b border-gray-300 ">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">
												
												<p
													tabindex="0"
													class="focus:outline-none text-xs text-left leading-normal text-gray-500"
												>
													<span class=" align-middle  material-icons text-5xl text-green-500 ">
												arrow_drop_up
											</span>
													432,456
												</p>
											</div>

											<div class=" pl-20 w-full pt-3 text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-indigo-800"
												>
													Nigeria
												</p>
											</div>
										</div>
									</div>

									<div class="flex items-center border-b border-gray-300 ">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">
												
												<p
													tabindex="0"
													class="focus:outline-none text-xs text-left leading-normal text-gray-500"
												>
													<span class=" align-middle  material-icons text-5xl text-green-500 ">
													arrow_drop_up
												</span>
													803,450
												</p>
											</div>

											<div class=" pl-20 w-full pt-3  text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-indigo-800"
												>
													Gameweek 24
												</p>
											</div>
										</div>
									</div>

									<div class="flex items-center border-b border-gray-300 ">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">
												
												<p
													tabindex="0"
													class="focus:outline-none text-xs text-left leading-normal text-gray-500"
												><span class=" align-middle  material-icons text-5xl text-green-500 ">
												arrow_drop_up
											</span>
													5,432,456
												</p>
											</div>

											<div class=" pl-20 w-full pt-3 text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-indigo-800"
												>
													Overall
												</p>
											</div>
										</div>
									</div>

									<button
										type="button"
										class="flex ml-28 text-right text-indigo-700 text-sm   font-medium rounded  py-3 focus:outline-none"
									>
										Create and join Leagues
										<span class="ml-2 text-sm material-icons hover:text-blue-500">
											arrow_forward
										</span>
									</button>
								</div>
							</div>

							<div class=" mt-10 px-1  ">
								<div class="bg-gray-100 rounded-sm border shadow-xl p-5 w-full pb-10 ">
									<div class="flex items-center border-b border-gray-300 py-1">
										<div class="flex items-start justify-between w-full ">
											<div class="w-full  text-left">
												<p
													tabindex="0"
													class="focus:outline-none  text-lg font-medium leading-5 text-gray-800"
												>
													Cup
												</p>
											</div>
										</div>
									</div>

									<div class="flex  border-b border-gray-300 py-1">
										<div class="w-full  p-2 flex flex-col  ">
											<div class="text-left">
												<p
													tabindex="0"
													class="focus:outline-none text-xs font-normal leading-5 text-gray-800"
												>
													KingsMen City didn't qualify
												</p>
											</div>
										</div>
									</div>

									<button
										type="button"
										class="flex ml-40 text-right text-indigo-700 text-sm   font-medium rounded  py-3 focus:outline-none"
									>
										View cup details
										<span class="ml-2 text-sm material-icons hover:text-blue-500">
											arrow_forward
										</span>
									</button>
								</div>
							</div>

							<div class="mt-10  px-1  ">
								<div class="bg-gray-100 rounded-sm border shadow-xl p-5 w-full pb-10 ">
									<div class="flex items-center border-b border-gray-300 py-2">
										<div class="flex items-center justify-between w-full ">
											<div class=" w-full">
												<p
													tabindex="0"
													class="focus:outline-none text-sm font-semibold  leading-normal pt-1 text-gray-700"
												>
													Transfer and Finance
												</p>
											</div>
										</div>
									</div>

									<div class="flex items-center border-b border-gray-300 py-1">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													Gameweek Transfer:
												</p>
											</div>

											<div class=" pl-20 w-full  text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-gray-800"
												>
													0
												</p>
											</div>
										</div>
									</div>
									<div class="flex items-center border-b border-gray-300 py-1">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													Total Transfer:
												</p>
											</div>

											<div class=" pl-20 w-full  text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-gray-800"
												>
													0
												</p>
											</div>
										</div>
									</div>
									<div class="flex items-center border-b border-gray-300 py-1">
										<div class="flex items-start justify-between w-full ">
											<button
												type="button"
												class="flex ml-40 text-right text-indigo-700 text-sm   font-medium rounded  py-3 focus:outline-none"
											>
												View cup details
												<span class="ml-2 text-sm material-icons hover:text-blue-500">
													arrow_forward
												</span>
											</button>
										</div>
									</div>

									<div class="flex items-center border-b border-gray-300 py-1">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													Squad Value:
												</p>
											</div>

											<div class=" pl-18 w-full  text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-gray-800"
												>
													50,000
												</p>
											</div>
										</div>
									</div>

                                    <div class="flex items-center border-b border-gray-300 py-1">
										<div class="flex items-start justify-between w-full ">
											<div class=" w-full">
												<p
													tabindex="0"
													class="focus:outline-none text-xs leading-normal pt-1 text-gray-500"
												>
													In the bank:
												</p>
											</div>

											<div class=" pl-18 w-full  text-right">
												<p
													tabindex="0"
													class="focus:outline-none  text-sm font-medium leading-5 text-gray-800"
												>
													349,023
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>

                            <div class="mt-10  px-1  ">
								<div class="bg-gray-100 rounded-sm border shadow-xl p-5 w-full pb-10 ">
									<div class="flex items-center border-b border-gray-300 py-3				">
										<div class="flex items-center justify-between w-full ">
											<div class=" w-full">
												<p
													tabindex="0"
													class="focus:outline-none text-sm font-semibold  leading-normal pt-1 text-gray-700"
												>
													Admin
												</p>
											</div>
										</div>
									</div>
									

									<div class="flex items-center border-b border-gray-300 py-1">
										<div class="flex items-start justify-between w-full ">
											<button
												type="button"
												class="flex  text-right text-indigo-700 text-sm   font-medium rounded  py-3 focus:outline-none"
											>
												Team details
												<span class="ml-2 text-sm material-icons hover:text-blue-500">
													arrow_forward
												</span>
											</button>
										</div>
									</div>
									<div class="flex items-center border-b border-gray-300 py-1">
										<div class="flex items-start justify-between w-full ">
											<button
												type="button"
												class="flex  text-right text-indigo-700 text-sm   font-medium rounded  py-3 focus:outline-none"
											>
												User Profile
												<span class="ml-2 text-sm material-icons hover:text-blue-500">
													arrow_forward
												</span>
											</button>
										</div>
									</div>

									

                                    
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container mx-auto mb-5">
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

export default EntryHistory;
