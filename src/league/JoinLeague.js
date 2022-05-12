import React from "react";
import Header from "../components/Header";
import MainBreadCrumb from "../components/MainBreadCrumb";
import MainFooter from "../components/MainFooter";

export default function JoinLeague() {
	return (
		<div className="bg-[#E5ECFA]/100 h-3/4">
			<Header />
			<MainBreadCrumb />

			<div class=" container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-20  w-auto">
				<div className="flex">
					<div class=" w-3/4 ">
						<div class="   py-1 px-1 w-full">
							<div class="flex flex-col space-y-4 mb-5">
								<h1 class="font-semibold text-3xl text-gray-800 w-4/6 ">
									Choose a league type to join
								</h1>
								<p class="text-xs px-8 py-2  text-gray-800  w-full">
									Join a private or public league to compete against friends and
									other game players.
								</p>
							</div>

							<div class="flex flex-col space-y-2 mb-5">
								<h1 class="font-bold text-2xl text-gray-800 w-4/6 ">
									Private leagues
								</h1>
								<p class="text-sm px-8 py-2 text-gray-500  w-full">
									Join a private league if somebody has given you a code to
									enter
								</p>
								<button
									type="button"
									class="flex items-center text-gray-600 rounded  focus:outline-none"
								>
									Join private league
									<span class="ml-2 material-icons text-indigo-600 hover:text-green-500">
										arrow_forward
									</span>
								</button>
							</div>

							<div class="flex flex-col space-y-2 ">
								<h1 class="font-bold text-2xl text-gray-800 w-4/6 ">
									Public leagues
								</h1>
								<p class="text-sm px-8 py-2 text-gray-500  w-full">
									Join a public league to play a small randomly selected group
									of game players
								</p>
								<button
									type="button"
									class="flex items-center text-gray-600 rounded  focus:outline-none"
								>
									Create public league
									<span class="ml-2 material-icons text-indigo-600 hover:text-green-500">
										arrow_forward
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="container  max-w-6xl">
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
			</div>

			<MainFooter />
		</div>
	);
}
