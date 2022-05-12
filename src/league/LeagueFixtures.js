import React from "react";
import Header from "../components/Header";
import MainBreadCrumb from "../components/MainBreadCrumb";
import MainFooter from "../components/MainFooter";

function LeagueFixtures() {
	return (
		<div className="bg-[#E5ECFA]/100 h-3/4">
			<Header />
			<MainBreadCrumb />

			<div className="container">
				<div className="flex">
					<div class="container flex max-w-4xl h-3/4 bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-lg shadow-indigo-500/50  ml-24 mt-10 mb-20  px-2 py-6 lg:px-10  ">
						<div class="flex flex-col  pt-10 space-y-4 w-full mx-2">
							<h1 class="font-medium text-3xl text-gray-700 mb-5 ">
								League 1842968
							</h1>
							<p class="text-xs text-gray-700 font-medium text-center mt-24 w-full py-4 bg-violet-300">
								League scoring started in the Gameweek 24.
							</p>

							<div class="w-full mx-2  flex svelte-1l8159u">
								<h1 class="font-bold text-xl text-gray-700 mb-5  mt-3">
									Select Phase
								</h1>
								<div class="bg-white mx-3 mb-10 p-1 flex border border-gray-200 rounded svelte-1l8159u w-1/3">
									<select class="form-select w-full px-3 py-2  text-gray-400 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
										<option value="">Overall</option>
										<option value="02">Male</option>
										<option value="03">Female</option>
										<option value="04">Prefer not to state</option>
									</select>
								</div>
							</div>

							<table class="w-full">
								<tr class="w-1/2 bg-stone-200 ">
									<th class="p-2 text-center">Rank</th>
									<th class="p-2 text-left w-2/3">Team & Manager</th>
									<th class="p-2 text-center">GW</th>
									<th class="p-2 text-center pr-4">TOT</th>
								</tr>
								<tr class="border-b border-gray-300 py-3">
									<td class="p-2 text-sm font-normal">
										1
										<span class=" align-middle  material-icons text-5xl text-green-500 ">
											arrow_drop_up
										</span>
									</td>
									<td class="p-2 text-left ">
										<p
											tabindex="0"
											class="focus:outline-none text-sm font-medium leading-5 text-indigo-800"
										>
											Aswinram
										</p>
										<p
											tabindex="0"
											class="focus:outline-none text-xs leading-normal  text-gray-500"
										>
											Aswinram R
										</p>
									</td>

									<td class="p-2 text-center text-gray-600">56</td>
									<td class="p-2 text-center text-gray-600">316</td>
								</tr>
                                <tr class="border-b border-gray-300 py-3">
									<td class="p-2 text-sm font-normal">
										2
										<span class=" align-middle  material-icons text-5xl text-green-500 ">
											arrow_drop_up
										</span>
									</td>
									<td class="p-2 text-left ">
										<p
											tabindex="0"
											class="focus:outline-none text-sm font-medium leading-5 text-indigo-800"
										>
											The Frontalobotomies
										</p>
										<p
											tabindex="0"
											class="focus:outline-none text-xs leading-normal  text-gray-500"
										>
											Scott McCash
										</p>
									</td>

									<td class="p-2 text-center text-gray-600">56</td>
									<td class="p-2 text-center text-gray-600">316</td>
								</tr>
                                <tr class="border-b border-gray-300 py-3">
									<td class="p-2 text-sm font-normal">
										3
										<span class=" align-middle  material-icons text-5xl text-orange-500 ">
											arrow_drop_down
										</span>
									</td>
									<td class="p-2 text-left ">
										<p
											tabindex="0"
											class="focus:outline-none text-sm font-medium leading-5 text-indigo-800"
										>
											Rainbow F.C
										</p>
										<p
											tabindex="0"
											class="focus:outline-none text-xs leading-normal  text-gray-500"
										>
											Kevin Kagame
										</p>
									</td>

									<td class="p-2 text-center text-gray-600">56</td>
									<td class="p-2 text-center text-gray-600">316</td>
								</tr>
                                <tr class="border-b border-gray-300 py-3">
									<td class="p-2 text-sm font-normal">
										4
										<span class=" align-middle  material-icons text-5xl text-green-500 ">
											arrow_drop_up
										</span>
									</td>
									<td class="p-2 text-left ">
										<p
											tabindex="0"
											class="focus:outline-none text-sm font-medium leading-5 text-indigo-800"
										>
											Aswinram
										</p>
										<p
											tabindex="0"
											class="focus:outline-none text-xs leading-normal  text-gray-500"
										>
											Aswinram R
										</p>
									</td>

									<td class="p-2 text-center text-gray-600">56</td>
									<td class="p-2 text-center text-gray-600">316</td>
								</tr>
                                <tr class="border-b border-gray-300 py-3">
									<td class="p-2 text-sm font-normal">
										5
										<span class=" align-middle  material-icons text-5xl text-green-500 ">
											arrow_drop_up
										</span>
									</td>
									<td class="p-2 text-left ">
										<p
											tabindex="0"
											class="focus:outline-none text-sm font-medium leading-5 text-indigo-800"
										>
											hesoka22
										</p>
										<p
											tabindex="0"
											class="focus:outline-none text-xs leading-normal  text-gray-500"
										>
											Aymen Kamel
										</p>
									</td>

									<td class="p-2 text-center text-gray-600">56</td>
									<td class="p-2 text-center text-gray-600">316</td>
								</tr>
                                <tr class="border-b border-gray-300 py-3">
									<td class="p-2 text-sm font-normal">
										6
										<span class=" align-middle  material-icons text-5xl text-green-500 ">
											arrow_drop_up
										</span>
									</td>
									<td class="p-2 text-left ">
										<p
											tabindex="0"
											class="focus:outline-none text-sm font-medium leading-5 text-indigo-800"
										>
											Aswinram
										</p>
										<p
											tabindex="0"
											class="focus:outline-none text-xs leading-normal  text-gray-500"
										>
											Aswinram R
										</p>
									</td>

									<td class="p-2 text-center text-gray-600">56</td>
									<td class="p-2 text-center text-gray-600">316</td>
								</tr>
                                <tr class="border-b border-gray-300 py-3">
									<td class="p-2 text-sm font-normal">
										7
										<span class=" align-middle  material-icons text-5xl text-orange-500 ">
											arrow_drop_down
										</span>
									</td>
									<td class="p-2 text-left ">
										<p
											tabindex="0"
											class="focus:outline-none text-sm font-medium leading-5 text-indigo-800"
										>
											Travis
										</p>
										<p
											tabindex="0"
											class="focus:outline-none text-xs leading-normal  text-gray-500"
										>
											Benn
										</p>
									</td>

									<td class="p-2 text-center text-gray-600">56</td>
									<td class="p-2 text-center text-gray-600">316</td>
								</tr>
                                <tr class="bg-violet-300 border-b border-gray-300 py-3">
									<td class="p-2 text-sm font-normal text-gray-100">
										8
										<span class=" align-middle  material-icons text-5xl text-green-500 ">
											arrow_drop_up
										</span>
									</td>
									<td class="p-2 text-left ">
										<p
											tabindex="0"
											class="focus:outline-none text-sm font-medium leading-5 text-lime-600"
										>
											Aswinram
										</p>
										<p
											tabindex="0"
											class="focus:outline-none text-xs leading-normal  text-gray-100"
										>
											Aswinram R
										</p>
									</td>

									<td class="p-2 text-center text-gray-100">56</td>
									<td class="p-2 text-center text-gray-100">316</td>
								</tr>
                                <tr class="border-b border-gray-300 py-3">
									<td class="p-2 text-sm font-normal">
										9
										<span class=" align-middle  material-icons text-5xl text-green-500 ">
											arrow_drop_up
										</span>
									</td>
									<td class="p-2 text-left ">
										<p
											tabindex="0"
											class="focus:outline-none text-sm font-medium leading-5 text-indigo-800"
										>
											Aswinram
										</p>
										<p
											tabindex="0"
											class="focus:outline-none text-xs leading-normal  text-gray-500"
										>
											Aswinram R
										</p>
									</td>

									<td class="p-2 text-center text-gray-600">56</td>
									<td class="p-2 text-center text-gray-600">316</td>
								</tr>
                                <tr class="border-b border-gray-300 py-3">
									<td class="p-2 text-sm font-normal">
										10
										<span class=" align-middle  material-icons text-5xl text-orange-500 ">
											arrow_drop_down
										</span>
									</td>
									<td class="p-2 text-left ">
										<p
											tabindex="0"
											class="focus:outline-none text-sm font-medium leading-5 text-indigo-800"
										>
											Aswinram
										</p>
										<p
											tabindex="0"
											class="focus:outline-none text-xs leading-normal  text-gray-500"
										>
											Aswinram R
										</p>
									</td>

									<td class="p-2 text-center text-gray-600">56</td>
									<td class="p-2 text-center text-gray-600">316</td>
								</tr>
                                <tr class="border-b border-gray-300 py-3">
									<td class="p-2 text-sm font-normal">
										11
										<span class=" align-middle  material-icons text-5xl text-green-500 ">
											arrow_drop_up
										</span>
									</td>
									<td class="p-2 text-left ">
										<p
											tabindex="0"
											class="focus:outline-none text-sm font-medium leading-5 text-indigo-800"
										>
											Aswinram
										</p>
										<p
											tabindex="0"
											class="focus:outline-none text-xs leading-normal  text-gray-500"
										>
											Aswinram R
										</p>
									</td>

									<td class="p-2 text-center text-gray-600">56</td>
									<td class="p-2 text-center text-gray-600">316</td>
								</tr>
                                <tr class="border-b border-gray-300 py-3">
									<td class="p-2 text-sm font-normal">
										12
										<span class=" align-middle  material-icons text-5xl text-green-500 ">
											arrow_drop_up
										</span>
									</td>
									<td class="p-2 text-left ">
										<p
											tabindex="0"
											class="focus:outline-none text-sm font-medium leading-5 text-indigo-800"
										>
											Aswinram
										</p>
										<p
											tabindex="0"
											class="focus:outline-none text-xs leading-normal  text-gray-500"
										>
											Aswinram R
										</p>
									</td>

									<td class="p-2 text-center text-gray-600">56</td>
									<td class="p-2 text-center text-gray-600">316</td>
								</tr>
                                <tr class="border-b border-gray-300 py-3">
									<td class="p-2 text-sm font-normal">
										13
										<span class=" align-middle  material-icons text-5xl text-green-500 ">
											arrow_drop_up
										</span>
									</td>
									<td class="p-2 text-left ">
										<p
											tabindex="0"
											class="focus:outline-none text-sm font-medium leading-5 text-indigo-800"
										>
											Aswinram
										</p>
										<p
											tabindex="0"
											class="focus:outline-none text-xs leading-normal  text-gray-500"
										>
											Aswinram R
										</p>
									</td>

									<td class="p-2 text-center text-gray-600">56</td>
									<td class="p-2 text-center text-gray-600">316</td>
								</tr>
                                <tr class="border-b border-gray-300 py-3">
									<td class="p-2 text-sm font-normal">
										14
										<span class=" align-middle  material-icons text-5xl text-green-500 ">
											arrow_drop_up
										</span>
									</td>
									<td class="p-2 text-left ">
										<p
											tabindex="0"
											class="focus:outline-none text-sm font-medium leading-5 text-indigo-800"
										>
											Aswinram
										</p>
										<p
											tabindex="0"
											class="focus:outline-none text-xs leading-normal  text-gray-500"
										>
											Aswinram R
										</p>
									</td>

									<td class="p-2 text-center text-gray-600">56</td>
									<td class="p-2 text-center text-gray-600">316</td>
								</tr>
                                <tr class="">
									<td class="p-2 text-sm font-normal">
										15
										<span class=" align-middle  material-icons text-5xl text-green-500 ">
											arrow_drop_up
										</span>
									</td>
									<td class="p-2 text-left ">
										<p
											tabindex="0"
											class="focus:outline-none text-sm font-medium leading-5 text-indigo-800"
										>
											Aswinram
										</p>
										<p
											tabindex="0"
											class="focus:outline-none text-xs leading-normal  text-gray-500"
										>
											Aswinram R
										</p>
									</td>

									<td class="p-2 text-center text-gray-600">56</td>
									<td class="p-2 text-center text-gray-600">316</td>
								</tr>
							</table>
						</div>
					</div>

					<div class="w-full mx-4 flex-1 svelte-1l8159u pt-10">
						<button
							class="text-base  hover:scale-110 focus:outline-none flex justify-center px-5 py-2 rounded font-bold cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-stone-200 text-gray-700
                                 duration-200 ease-in-out 
                                 transition"
						>
							<div class="flex font-sans text-xs font-semibold px-2">
								<span className="pt-1"> Report Offensive Name</span>
								<span class="ml-10 material-icons hover:text-gray-100">
									arrow_forward
								</span>
							</div>
						</button>
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

export default LeagueFixtures;
