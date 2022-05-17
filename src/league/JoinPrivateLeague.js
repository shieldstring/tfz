import React from "react";
import Header from "../components/Header";
import MainBreadCrumb from "../components/MainBreadCrumb";
import MainFooter from "../components/MainFooter";

export default function JoinPrivateLeague() {
	return (
		<div className="bg-[##E5ECFA]/100 h-3/4">
			<Header />

			<MainBreadCrumb />

			<div class=" container max-w-6xl bg-gradient-to-br from-[##FFFFFF]/100 via-[##F2F6FF]/50 to-[##E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-20  w-auto">
				<div class="   py-1 px-1 w-full">
					<div class="flex flex-col space-y-4 mb-5">
						<h1 class="font-semibold text-3xl text-gray-800 w-4/6 ">
							Join private league
						</h1>

                        <div class="bg-red-800 w-1/2 text-center rounded shadow-md">
						<h1 class="font-medium text-lg py-2 text-gray-100  ">
							eRROR 502: Please enter the right league code
						</h1>
                        </div>
						<div class="flex flex-col md:flex-row pt-2">
							<div class="w-full mx-2 flex-1 svelte-1l8159u">
								<label class="text-gray-600 font-bold text-lg mb-2 ml-1">
									Search league to join
								</label>
								<div class=" my-2  flex border border-gray-200 rounded svelte-1l8159u">
									<form class=" flex w-full">
										<input
											class="p-1 px-2 appearance-none outline-none w-full font-sm text-xs text-gray-700"
											placeholder="Live league"
										/>
										<button class="px-8 rounded-r bg-indigo-500  text-gray-100 font-normal p-2 border-indigo-500">
											Search
										</button>
									</form>
								</div>
							</div>

							<div class="w-full mx-2 flex-1 svelte-1l8159u">
								<label class="text-gray-600 font-bold text-lg mb-2 ml-1">
									Join league with a code
								</label>
								<div class=" my-2  flex border border-gray-200 rounded svelte-1l8159u">
									<form class=" flex w-full">
										<input
											class="p-1 px-2 appearance-none outline-none w-full font-sm text-xs text-gray-700"
											placeholder="Enter league code"
										/>
										<button class="px-1 rounded-r bg-indigo-500  text-gray-100 font-normal p-2 border-indigo-500 w-1/2">
											Join League
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex">
					<div class=" w-3/4 ">
						<h1 class="font-semibold text-lg  text-gray-800 w-4/6 ">
							List of live leagues
						</h1>

						<div class="-ml-6 relative overflow-x-auto  sm:rounded-lg">
							<table class="w-full text-sm text-left text-gray-500 ">
								<tbody>
									<tr >
										<th
											scope="row"
											class="px-6 py-4 font-normal text-gray-500 "
										>
											Gameweek24"
										</th>
										<td class="px-6 py-4">Private</td>
										<td class="px-6 py-4">Paid</td>
										<td class="px-6 py-4">12 August, 2021</td>
										<td class="px-6 py-4 text-right">
											<a
												href="##"
												class="font-medium text-indigo-900 dark:text-indigo-500 hover:underline"
											>
												Join League
											</a>
										</td>
									</tr>
									<tr >
										<th
											scope="row"
											class="px-6 py-4 font-normal text-gray-500 "
										>
											Gameweek24"
										</th>
										<td class="px-6 py-4">Private</td>
										<td class="px-6 py-4">Paid</td>
										<td class="px-6 py-4">12 August, 2021</td>
										<td class="px-6 py-4 text-right">
											<a
												href="##"
												class="font-medium text-indigo-900 dark:text-indigo-500 hover:underline"
											>
												Join League
											</a>
										</td>
									</tr>
									<tr >
										<th
											scope="row"
											class="px-6 py-4 font-normal text-gray-500 "
										>
											Gameweek24"
										</th>
										<td class="px-6 py-4">Private</td>
										<td class="px-6 py-4">Paid</td>
										<td class="px-6 py-4">12 August, 2021</td>
										<td class="px-6 py-4 text-right">
											<a
												href="##"
												class="font-medium text-indigo-900 dark:text-indigo-500 hover:underline"
											>
												Join League
											</a>
										</td>
									</tr>
									<tr >
										<th
											scope="row"
											class="px-6 py-4 font-normal text-gray-500 "
										>
											Gameweek24"
										</th>
										<td class="px-6 py-4">Private</td>
										<td class="px-6 py-4">Paid</td>
										<td class="px-6 py-4">12 August, 2021</td>
										<td class="px-6 py-4 text-right">
											<a
												href="##"
												class="font-medium text-indigo-900 dark:text-indigo-500 hover:underline"
											>
												Join League
											</a>
										</td>
									</tr>
									<tr >
										<th
											scope="row"
											class="px-6 py-4 font-normal text-gray-500 "
										>
											Gameweek24"
										</th>
										<td class="px-6 py-4">Private</td>
										<td class="px-6 py-4">Paid</td>
										<td class="px-6 py-4">12 August, 2021</td>
										<td class="px-6 py-4 text-right">
											<a
												href="##"
												class="font-medium text-indigo-900 dark:text-indigo-500 hover:underline"
											>
												Join League
											</a>
										</td>
									</tr>
									<tr >
										<th
											scope="row"
											class="px-6 py-4 font-normal text-gray-500 "
										>
											Gameweek24"
										</th>
										<td class="px-6 py-4">Private</td>
										<td class="px-6 py-4">Paid</td>
										<td class="px-6 py-4">12 August, 2021</td>
										<td class="px-6 py-4 text-right">
											<a
												href="##"
												class="font-medium text-indigo-900 dark:text-indigo-500 hover:underline"
											>
												Join League
											</a>
										</td>
									</tr>
									<tr >
										<th
											scope="row"
											class="px-6 py-4 font-normal text-gray-500 "
										>
											Gameweek24"
										</th>
										<td class="px-6 py-4">Private</td>
										<td class="px-6 py-4">Paid</td>
										<td class="px-6 py-4">12 August, 2021</td>
										<td class="px-6 py-4 text-right">
											<a
												href="##"
												class="font-medium text-indigo-900 dark:text-indigo-500 hover:underline"
											>
												Join League
											</a>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<button
							type="button"
							class="flex items-center font-semibold text-sm  text-gray-800 rounded  focus:outline-none"
						>
							See more
						</button>
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
