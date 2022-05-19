import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Header from "../components/Header";
import MainFooter from "../components/MainFooter";

function SquadSelection() {
	return (
		<div className="bg-[#E5ECFA]/100 h-3/4">
			<Header />
			<BreadCrumb />

			<div className="container max-w-6xl mx-auto  pt-10  lg:px-2 flex items-center  justify-between flex-wrap">
				<div className="flex items-center flex-shrink-0 text-gray-600 mr-6">
					<h1 className="font-bold text-4xl text-gray-700  text-center">
						Squad Selection
					</h1>
				</div>
				<div className="w-full items-center block flex-grow md:flex md:justify-end md:w-auto">
					<div>
						<button
							className="text-base hover:scale-110 focus:outline-none flex justify-center px-3 py-2 rounded font-bold cursor-pointer                                 
                                    hover:bg-blue-500 shadow-inner 
                                    bg-teal-400 text-gray-200
                                    duration-200 ease-in-out 
                                    transition"
							type="submit"
						>
							<div className="font-sans text-sm font-medium ">Next</div>
						</button>
					</div>
				</div>
			</div>

			<hr className="my-5 max-w-6xl rounded-lg border-b-2 border-violet-500 mx-auto" />

			<div className="container max-w-6xl mx-auto bg-[#6E4BEC7D]/70 py-4 mb-10  rounded-md shadow-2xl shadow-gray-700/90 lg:px-2 flex items-center  justify-between flex-wrap">
				<div className="flex items-center flex-shrink-0 text-gray-600 mr-6">
					<h1 className="font-normal px-4 text-2xl text-gray-100/80  text-center">
						Players: (0/15)
					</h1>
				</div>
				<div className="w-full items-center block flex-grow md:flex md:justify-end md:w-auto">
					<div>
						<button
							className=" hover:scale-110 focus:outline-none flex justify-center px-6 py-3   cursor-pointer                                 
                                hover:bg-blue-500 
                                text-gray-100/80 border border-[#ffffff]/50
                                 duration-200 ease-in-out 
                                 transition"
						>
							<div className="font-sans text-sm font-medium ">Auto Complete</div>
						</button>
					</div>
					<div>
						<button
							className=" hover:scale-110 focus:outline-none flex justify-center px-6 py-3  ml-5 cursor-pointer                                 
                                hover:bg-blue-500 
                                text-gray-100/50 
                                 duration-200 ease-in-out 
                                 transition"
						>
							<div className="font-sans text-sm font-medium ">Clear Team</div>
						</button>
					</div>
				</div>
			</div>

			<div className="container">
				<p className="text-sm text-gray-800 font-normal text-center max-w-3xl -mb-8 py-3 bg-[#6E4BEC7D]/70 ml-24 tracking-wider px-2  lg:px-1 ">
					C. Ronaldo has been added to your Squad
				</p>
				<div className="flex">
					<div
						className="container  max-w-4xl h-3/4  ml-24 mt-10 mb-20  px-2 py-6 lg:px-1  "
						style={{
							backgroundImage: 'url("/img/pitch-md.png")',
							backgroundRepeat: "no-repeat",
							backgroundSize: "fit",
						}}
					>
						<div className="flex justify-center items-center mb-3  mx-auto mt-12">
							<div className="inline-flex rounded">
								<input
									type="radio"
									name="room_type"
									id="fixtures"
									checked
									hidden
								/>
								<label
									for="fixtures"
									className="radio text-center text-gray-100 self-center py-3 px-12 border cursor-pointer bg-red-800 hover:opacity-75"
								>
									Pitch View
								</label>
							</div>
							<div className="inline-flex rounded -ml-1">
								<input type="radio" name="room_type" id="fdr" hidden />
								<label
									for="fdr"
									className="radio text-center text-gray-100 self-center py-3 px-12 border rounded-sm cursor-pointer bg-red-800  hover:opacity-75"
								>
									List View
								</label>
							</div>
						</div>

						<div className="flex   py-10 mx-auto">
							<div class="p-3 bg-gray-800/90 rounded mt-24 mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<svg
										width="52"
										height="51"
										viewBox="0 0 52 51"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="mx-auto"
									>
										<path
											d="M6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599L46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60398 6.83159 5.66999Z"
											fill="#276556"
										/>
										<path
											d="M10.5718 25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60399 6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599C42.3641 4.73599 45.1693 7.53798 46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839ZM10.5718 25.2839V22.4819"
											stroke="white"
											stroke-width="0.5"
										/>
										<path
											d="M27.0071 19.5599L25.6397 19.5599V24.9746L20.2188 24.9746V26.3404L25.6397 26.3404V31.7551L27.0071 31.7551L27.0071 26.3404H32.4279V24.9746H27.0071L27.0071 19.5599Z"
											fill="white"
										/>
									</svg>
								</div>

								<div>
									<h1 class="text-md -ml-3 font-normal text-gray-100 mt-1 -mb-2 ">
										GK
									</h1>
								</div>
							</div>
						</div>

						<div className="flex   py-10 mx-auto w-1/2">
							<div class="p-3 bg-gray-800/90 rounded  mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<svg
										width="52"
										height="51"
										viewBox="0 0 52 51"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="mx-auto"
									>
										<path
											d="M6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599L46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60398 6.83159 5.66999Z"
											fill="#276556"
										/>
										<path
											d="M10.5718 25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60399 6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599C42.3641 4.73599 45.1693 7.53798 46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839ZM10.5718 25.2839V22.4819"
											stroke="white"
											stroke-width="0.5"
										/>
										<path
											d="M27.0071 19.5599L25.6397 19.5599V24.9746L20.2188 24.9746V26.3404L25.6397 26.3404V31.7551L27.0071 31.7551L27.0071 26.3404H32.4279V24.9746H27.0071L27.0071 19.5599Z"
											fill="white"
										/>
									</svg>
								</div>

								<div>
									<h1 class="text-md -ml-3 font-normal text-gray-100 mt-1 -mb-2 ">
										DEF
									</h1>
								</div>
							</div>

							<div class="p-3 bg-gray-800/90 rounded  mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<svg
										width="52"
										height="51"
										viewBox="0 0 52 51"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="mx-auto"
									>
										<path
											d="M6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599L46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60398 6.83159 5.66999Z"
											fill="#276556"
										/>
										<path
											d="M10.5718 25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60399 6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599C42.3641 4.73599 45.1693 7.53798 46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839ZM10.5718 25.2839V22.4819"
											stroke="white"
											stroke-width="0.5"
										/>
										<path
											d="M27.0071 19.5599L25.6397 19.5599V24.9746L20.2188 24.9746V26.3404L25.6397 26.3404V31.7551L27.0071 31.7551L27.0071 26.3404H32.4279V24.9746H27.0071L27.0071 19.5599Z"
											fill="white"
										/>
									</svg>
								</div>

								<div>
									<h1 class="text-md -ml-3 font-normal text-gray-100 mt-1 -mb-2 ">
										DEF
									</h1>
								</div>
							</div>

							<div class="p-3 bg-gray-800/90 rounded  mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<svg
										width="52"
										height="51"
										viewBox="0 0 52 51"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="mx-auto"
									>
										<path
											d="M6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599L46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60398 6.83159 5.66999Z"
											fill="#276556"
										/>
										<path
											d="M10.5718 25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60399 6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599C42.3641 4.73599 45.1693 7.53798 46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839ZM10.5718 25.2839V22.4819"
											stroke="white"
											stroke-width="0.5"
										/>
										<path
											d="M27.0071 19.5599L25.6397 19.5599V24.9746L20.2188 24.9746V26.3404L25.6397 26.3404V31.7551L27.0071 31.7551L27.0071 26.3404H32.4279V24.9746H27.0071L27.0071 19.5599Z"
											fill="white"
										/>
									</svg>
								</div>

								<div>
									<h1 class="text-md -ml-3 font-normal text-gray-100 mt-1 -mb-2 ">
										DEF
									</h1>
								</div>
							</div>
						</div>

						<div className="flex   py-10 mx-auto w-3/4">
							<div class="p-3 bg-gray-800/90 rounded  mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<svg
										width="52"
										height="51"
										viewBox="0 0 52 51"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="mx-auto"
									>
										<path
											d="M6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599L46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60398 6.83159 5.66999Z"
											fill="#276556"
										/>
										<path
											d="M10.5718 25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60399 6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599C42.3641 4.73599 45.1693 7.53798 46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839ZM10.5718 25.2839V22.4819"
											stroke="white"
											stroke-width="0.5"
										/>
										<path
											d="M27.0071 19.5599L25.6397 19.5599V24.9746L20.2188 24.9746V26.3404L25.6397 26.3404V31.7551L27.0071 31.7551L27.0071 26.3404H32.4279V24.9746H27.0071L27.0071 19.5599Z"
											fill="white"
										/>
									</svg>
								</div>

								<div>
									<h1 class="text-md -ml-3 font-normal text-gray-100 mt-1 -mb-2 ">
										MID
									</h1>
								</div>
							</div>

							<div class="p-3 bg-gray-800/90 rounded  mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<svg
										width="52"
										height="51"
										viewBox="0 0 52 51"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="mx-auto"
									>
										<path
											d="M6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599L46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60398 6.83159 5.66999Z"
											fill="#276556"
										/>
										<path
											d="M10.5718 25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60399 6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599C42.3641 4.73599 45.1693 7.53798 46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839ZM10.5718 25.2839V22.4819"
											stroke="white"
											stroke-width="0.5"
										/>
										<path
											d="M27.0071 19.5599L25.6397 19.5599V24.9746L20.2188 24.9746V26.3404L25.6397 26.3404V31.7551L27.0071 31.7551L27.0071 26.3404H32.4279V24.9746H27.0071L27.0071 19.5599Z"
											fill="white"
										/>
									</svg>
								</div>

								<div>
									<h1 class="text-md -ml-3 font-normal text-gray-100 mt-1 -mb-2 ">
										MID
									</h1>
								</div>
							</div>

							<div class="p-3 bg-gray-800/90 rounded  mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<svg
										width="52"
										height="51"
										viewBox="0 0 52 51"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="mx-auto"
									>
										<path
											d="M6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599L46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60398 6.83159 5.66999Z"
											fill="#276556"
										/>
										<path
											d="M10.5718 25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60399 6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599C42.3641 4.73599 45.1693 7.53798 46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839ZM10.5718 25.2839V22.4819"
											stroke="white"
											stroke-width="0.5"
										/>
										<path
											d="M27.0071 19.5599L25.6397 19.5599V24.9746L20.2188 24.9746V26.3404L25.6397 26.3404V31.7551L27.0071 31.7551L27.0071 26.3404H32.4279V24.9746H27.0071L27.0071 19.5599Z"
											fill="white"
										/>
									</svg>
								</div>

								<div>
									<h1 class="text-md -ml-3 font-normal text-gray-100 mt-1 -mb-2 ">
										MID
									</h1>
								</div>
							</div>

							<div class="p-3 bg-gray-800/90 rounded  mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<svg
										width="52"
										height="51"
										viewBox="0 0 52 51"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="mx-auto"
									>
										<path
											d="M6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599L46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60398 6.83159 5.66999Z"
											fill="#276556"
										/>
										<path
											d="M10.5718 25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60399 6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599C42.3641 4.73599 45.1693 7.53798 46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839ZM10.5718 25.2839V22.4819"
											stroke="white"
											stroke-width="0.5"
										/>
										<path
											d="M27.0071 19.5599L25.6397 19.5599V24.9746L20.2188 24.9746V26.3404L25.6397 26.3404V31.7551L27.0071 31.7551L27.0071 26.3404H32.4279V24.9746H27.0071L27.0071 19.5599Z"
											fill="white"
										/>
									</svg>
								</div>

								<div>
									<h1 class="text-md -ml-3 font-normal text-gray-100 mt-1 -mb-2 ">
										MID
									</h1>
								</div>
							</div>
						</div>

						<div className="flex   py-10 mx-auto w-1/2">
							<div class="p-3  rounded -mt-2 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<button>
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											className="absolute ml-2  z-10"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle cx="10" cy="10" r="10" fill="white" />
											<path
												d="M15.0012 6.00714L13.9929 5L10.0046 8.99285L6.00714 5L5.00115 6.00714L8.99857 10L5.01027 13.9929L6.01856 15L10.0069 11.0071L14.0043 15L15.0103 13.9929L11.0129 10L15.0012 6.00714Z"
												fill="#FF6B00"
												stroke="#FF4B26"
											/>
										</svg>
									</button>

									<svg
										width="53"
										height="51"
										viewBox="0 0 53 51"
										fill="none"
										className=" mx-auto z-0"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334L46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475Z"
											fill="#03A9F4"
										/>
										<path
											d="M11.2572 24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334C42.9614 4.36334 45.7588 7.15757 46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544ZM11.2572 24.8544V22.0601"
											stroke="white"
											stroke-width="0.5"
										/>
									</svg>
								</div>
								<div className="w-full mx-auto -mt-1 -ml-8   mb-2">
									<p
										tabindex="0"
										className="focus:outline-none text-sm font-light pt-2 mt-1 -ml-9 pl-4 leading-5 rounded text-gray-100 bg-[#33175A]"
									>
										C. Ronaldo
									</p>
									<p
										tabindex="0"
										className="focus:outline-none text-xs text-center pb-1 -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A]/50 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
									>
										11.9
									</p>
								</div>
							</div>

							<div class="p-3 bg-gray-800/90 rounded mt-8 mx-auto space-x-6 h-8 align-baseline shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<svg
										width="52"
										height="51"
										viewBox="0 0 52 51"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="mx-auto"
									>
										<path
											d="M6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599L46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60398 6.83159 5.66999Z"
											fill="#276556"
										/>
										<path
											d="M10.5718 25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60399 6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599C42.3641 4.73599 45.1693 7.53798 46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839ZM10.5718 25.2839V22.4819"
											stroke="white"
											stroke-width="0.5"
										/>
										<path
											d="M27.0071 19.5599L25.6397 19.5599V24.9746L20.2188 24.9746V26.3404L25.6397 26.3404V31.7551L27.0071 31.7551L27.0071 26.3404H32.4279V24.9746H27.0071L27.0071 19.5599Z"
											fill="white"
										/>
									</svg>
								</div>

								<div>
									<h1 class="text-md -ml-3 font-normal text-gray-100 mt-1 -mb-2 ">
										FWD
									</h1>
								</div>
							</div>

							<div class="p-3 bg-gray-800/90 rounded mt-8 mx-auto space-x-6 h-8 align-baseline shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<svg
										width="52"
										height="51"
										viewBox="0 0 52 51"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="mx-auto"
									>
										<path
											d="M6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599L46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60398 6.83159 5.66999Z"
											fill="#276556"
										/>
										<path
											d="M10.5718 25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60399 6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599C42.3641 4.73599 45.1693 7.53798 46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839ZM10.5718 25.2839V22.4819"
											stroke="white"
											stroke-width="0.5"
										/>
										<path
											d="M27.0071 19.5599L25.6397 19.5599V24.9746L20.2188 24.9746V26.3404L25.6397 26.3404V31.7551L27.0071 31.7551L27.0071 26.3404H32.4279V24.9746H27.0071L27.0071 19.5599Z"
											fill="white"
										/>
									</svg>
								</div>

								<div>
									<h1 class="text-md -ml-3 font-normal text-gray-100 mt-1 -mb-2 ">
										FWD
									</h1>
								</div>
							</div>
						</div>

						<div className="flex   py-10 mx-auto w-3/5">
							<div class="p-3 bg-gray-800/90 rounded mt-20 mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<svg
										width="52"
										height="51"
										viewBox="0 0 52 51"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="mx-auto"
									>
										<path
											d="M6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599L46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60398 6.83159 5.66999Z"
											fill="#276556"
										/>
										<path
											d="M10.5718 25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60399 6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599C42.3641 4.73599 45.1693 7.53798 46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839ZM10.5718 25.2839V22.4819"
											stroke="white"
											stroke-width="0.5"
										/>
										<path
											d="M27.0071 19.5599L25.6397 19.5599V24.9746L20.2188 24.9746V26.3404L25.6397 26.3404V31.7551L27.0071 31.7551L27.0071 26.3404H32.4279V24.9746H27.0071L27.0071 19.5599Z"
											fill="white"
										/>
									</svg>
								</div>

								<div>
									<h1 class="text-md -ml-3 font-normal text-gray-100 mt-1 -mb-2 ">
										GK
									</h1>
								</div>
							</div>

							<div class="p-3 bg-gray-800/90 rounded mt-20 mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<svg
										width="52"
										height="51"
										viewBox="0 0 52 51"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="mx-auto"
									>
										<path
											d="M6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599L46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60398 6.83159 5.66999Z"
											fill="#276556"
										/>
										<path
											d="M10.5718 25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60399 6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599C42.3641 4.73599 45.1693 7.53798 46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839ZM10.5718 25.2839V22.4819"
											stroke="white"
											stroke-width="0.5"
										/>
										<path
											d="M27.0071 19.5599L25.6397 19.5599V24.9746L20.2188 24.9746V26.3404L25.6397 26.3404V31.7551L27.0071 31.7551L27.0071 26.3404H32.4279V24.9746H27.0071L27.0071 19.5599Z"
											fill="white"
										/>
									</svg>
								</div>

								<div>
									<h1 class="text-md -ml-3 font-normal text-gray-100 mt-1 -mb-2 ">
										DEF
									</h1>
								</div>
							</div>

							<div class="p-3 bg-gray-800/90 rounded mt-20 mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<svg
										width="52"
										height="51"
										viewBox="0 0 52 51"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="mx-auto"
									>
										<path
											d="M6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599L46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60398 6.83159 5.66999Z"
											fill="#276556"
										/>
										<path
											d="M10.5718 25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60399 6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599C42.3641 4.73599 45.1693 7.53798 46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839ZM10.5718 25.2839V22.4819"
											stroke="white"
											stroke-width="0.5"
										/>
										<path
											d="M27.0071 19.5599L25.6397 19.5599V24.9746L20.2188 24.9746V26.3404L25.6397 26.3404V31.7551L27.0071 31.7551L27.0071 26.3404H32.4279V24.9746H27.0071L27.0071 19.5599Z"
											fill="white"
										/>
									</svg>
								</div>

								<div>
									<h1 class="text-md -ml-3 font-normal text-gray-100 mt-1 -mb-2 ">
										MID
									</h1>
								</div>
							</div>

							<div class="p-3 bg-gray-800/90 rounded mt-20 mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<svg
										width="52"
										height="51"
										viewBox="0 0 52 51"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="mx-auto"
									>
										<path
											d="M6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599L46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60398 6.83159 5.66999Z"
											fill="#276556"
										/>
										<path
											d="M10.5718 25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60399 6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599C42.3641 4.73599 45.1693 7.53798 46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839ZM10.5718 25.2839V22.4819"
											stroke="white"
											stroke-width="0.5"
										/>
										<path
											d="M27.0071 19.5599L25.6397 19.5599V24.9746L20.2188 24.9746V26.3404L25.6397 26.3404V31.7551L27.0071 31.7551L27.0071 26.3404H32.4279V24.9746H27.0071L27.0071 19.5599Z"
											fill="white"
										/>
									</svg>
								</div>

								<div>
									<h1 class="text-md -ml-3 font-normal text-gray-100 mt-1 -mb-2 ">
										FWD
									</h1>
								</div>
							</div>
						</div>
					</div>

					<div className="container max-w-sm   shadow-indigo-500/50 md:w-3/5 ml-12 mt-10 mb-20    w-auto">
						<div className="px-1">
							<div className="bg-gray-100 rounded-sm border shadow-xl p-5 w-full pb-10 ">
								<div className="max-w-md mx-autooverflow-hidden md:max-w-xl">
									<div className="md:flex">
										<div className="w-full">
											<div className="relative flex">
												<input
													type="text"
													className="bg-white h-10 w-full text-xs px-2 mr-3 focus:outline-none hover:cursor-pointer"
													name="search"
													placeholder="Search"
												/>

												<button
													className=" hover:scale-110 focus:outline-none flex justify-center px-6 py-2  -mt-2 mb-2 cursor-pointer                                 
                                hover:bg-blue-500 
                                text-gray-900 border border-[#8139E6]
                                 duration-200 ease-in-out 
                                 transition"
												>
													<div className="font-sans text-sm font-medium ">
														Reset
													</div>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div className="flex flex-col md:flex-row py-10 ">
									<div className=" flex-1 svelte-1l8159u">
										<button
											className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 py-2  cursor-pointer                                 
                                hover:bg-blue-500 
                                bg-white text-gray-900
                                 duration-200 ease-in-out 
                                 transition"
										>
											<div className="font-sans text-sm font-medium ">ALL</div>
										</button>
									</div>
									<div className=" flex-1 svelte-1l8159u">
										<button
											className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 py-2  cursor-pointer                                 
                                hover:bg-blue-500 
                                bg-white text-gray-900
                                 duration-200 ease-in-out 
                                 transition"
										>
											<div className="font-sans text-sm font-medium ">GK</div>
										</button>
									</div>
									<div className="flex-1 svelte-1l8159u">
										<button
											className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 py-2  cursor-pointer                                 
                                hover:bg-blue-500 
                                bg-white text-gray-900
                                 duration-200 ease-in-out 
                                 transition"
										>
											<div className="font-sans text-sm font-medium ">DEF</div>
										</button>
									</div>

									<div className="w-full flex-1 svelte-1l8159u">
										<button
											className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 py-2  cursor-pointer                                 
                                hover:bg-blue-500 
                                bg-white text-gray-900
                                 duration-200 ease-in-out 
                                 transition"
										>
											<div className="font-sans text-sm font-medium ">MID</div>
										</button>
									</div>

									<div className="w-full  flex-1 svelte-1l8159u">
										<button
											className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 py-2  cursor-pointer                                 
                                hover:bg-blue-500 
                                bg-white text-gray-900
                                 duration-200 ease-in-out 
                                 transition"
										>
											<div className="font-sans text-sm font-medium ">FWD</div>
										</button>
									</div>
								</div>

								<div className="flex flex-col md:flex-row">
									<div className="w-full mx-2 flex-1 svelte-1l8159u">
										<label className="text-gray-600 font-normal text-sm mb-2 ml-1">
											Sort by
										</label>
										<div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
											<select className="form-select w-full px-3 py-2   rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
												<option value="">Total Point</option>
												<option value="02">Goals</option>
												<option value="03">Female</option>
												<option value="04">Prefer not to state</option>
											</select>
										</div>
									</div>
									<div className="w-full mx-2 flex-1 svelte-1l8159u">
										<label className="text-gray-600 font-normal text-sm mb-2 ml-1">
											Max Cost
										</label>
										<div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
											<select className="form-select w-full px-3 py-2   rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
												<option value="">3.00</option>
												<option value="02">Free</option>
											</select>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="container bg-violet-700 border-inherit rounded-xl shadow-lg  px-4 py-3 lg:px-5">
							<div className=" pt-3 px-1 ">
								<div className="flex items-center border-b border-gray-300 ">
									<div className="flex items-start justify-between w-full ">
										<div className=" w-full flex">
											<p
												tabindex="0"
												className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex"
											>
												<span className=" align-middle  material-icons text-2xl text-red-500 ">
													info_outline
												</span>

												<div className="flex-shrink-0 w-10 h-10 ml-2 border-l border-gray-400 mb-2">
													<img
														className="w-full h-full rounded-full ml-2"
														src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
														alt=""
													/>
												</div>
											</p>

											<div className="ml-5 border-l border-gray-400 pl-3 mb-2">
												<p
													tabindex="0"
													className="focus:outline-none text-sm font-normal leading-5 text-gray-100"
												>
													C. Ronaldo
												</p>
												<p
													tabindex="0"
													className="focus:outline-none text-xs leading-normal  text-gray-100"
												>
													JUV <span className="ml-4">FWD</span>
												</p>
											</div>
										</div>

										<div className=" pt-3 border-l text-right">
											<p
												tabindex="0"
												className="focus:outline-none  text-md font-normal leading-5 ml-2 px-4 text-gray-100"
											>
												99
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className=" pt-3 px-1 ">
								<div className="flex items-center border-b border-gray-300 ">
									<div className="flex items-start justify-between w-full ">
										<div className=" w-full flex">
											<p
												tabindex="0"
												className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex"
											>
												<span className=" align-middle  material-icons text-2xl text-red-500 ">
													info_outline
												</span>

												<div className="flex-shrink-0 w-10 h-10 ml-2 border-l border-gray-400 mb-2">
													<img
														className="w-full h-full rounded-full ml-2"
														src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
														alt=""
													/>
												</div>
											</p>

											<div className="ml-5 border-l border-gray-400 pl-3 mb-2">
												<p
													tabindex="0"
													className="focus:outline-none text-sm font-normal leading-5 text-gray-100"
												>
													C. Ronaldo
												</p>
												<p
													tabindex="0"
													className="focus:outline-none text-xs leading-normal  text-gray-100"
												>
													JUV <span className="ml-4">FWD</span>
												</p>
											</div>
										</div>

										<div className=" pt-3 border-l text-right">
											<p
												tabindex="0"
												className="focus:outline-none  text-md font-normal leading-5 ml-2 px-4 text-gray-100"
											>
												99
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className=" pt-3 px-1 ">
								<div className="flex items-center border-b border-gray-300 ">
									<div className="flex items-start justify-between w-full ">
										<div className=" w-full flex">
											<p
												tabindex="0"
												className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex"
											>
												<span className=" align-middle  material-icons text-2xl text-red-500 ">
													info_outline
												</span>

												<div className="flex-shrink-0 w-10 h-10 ml-2 border-l border-gray-400 mb-2">
													<img
														className="w-full h-full rounded-full ml-2"
														src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
														alt=""
													/>
												</div>
											</p>

											<div className="ml-5 border-l border-gray-400 pl-3 mb-2">
												<p
													tabindex="0"
													className="focus:outline-none text-sm font-normal leading-5 text-gray-100"
												>
													C. Ronaldo
												</p>
												<p
													tabindex="0"
													className="focus:outline-none text-xs leading-normal  text-gray-100"
												>
													JUV <span className="ml-4">FWD</span>
												</p>
											</div>
										</div>

										<div className=" pt-3 border-l text-right">
											<p
												tabindex="0"
												className="focus:outline-none  text-md font-normal leading-5 ml-2 px-4 text-gray-100"
											>
												99
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className=" pt-3 px-1 ">
								<div className="flex items-center border-b border-gray-300 ">
									<div className="flex items-start justify-between w-full ">
										<div className=" w-full flex">
											<p
												tabindex="0"
												className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex"
											>
												<span className=" align-middle  material-icons text-2xl text-red-500 ">
													info_outline
												</span>

												<div className="flex-shrink-0 w-10 h-10 ml-2 border-l border-gray-400 mb-2">
													<img
														className="w-full h-full rounded-full ml-2"
														src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
														alt=""
													/>
												</div>
											</p>

											<div className="ml-5 border-l border-gray-400 pl-3 mb-2">
												<p
													tabindex="0"
													className="focus:outline-none text-sm font-normal leading-5 text-gray-100"
												>
													C. Ronaldo
												</p>
												<p
													tabindex="0"
													className="focus:outline-none text-xs leading-normal  text-gray-100"
												>
													JUV <span className="ml-4">FWD</span>
												</p>
											</div>
										</div>

										<div className=" pt-3 border-l text-right">
											<p
												tabindex="0"
												className="focus:outline-none  text-md font-normal leading-5 ml-2 px-4 text-gray-100"
											>
												99
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className=" pt-3 px-1 ">
								<div className="flex items-center border-b border-gray-300 ">
									<div className="flex items-start justify-between w-full ">
										<div className=" w-full flex">
											<p
												tabindex="0"
												className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex"
											>
												<span className=" align-middle  material-icons text-2xl text-red-500 ">
													info_outline
												</span>

												<div className="flex-shrink-0 w-10 h-10 ml-2 border-l border-gray-400 mb-2">
													<img
														className="w-full h-full rounded-full ml-2"
														src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
														alt=""
													/>
												</div>
											</p>

											<div className="ml-5 border-l border-gray-400 pl-3 mb-2">
												<p
													tabindex="0"
													className="focus:outline-none text-sm font-normal leading-5 text-gray-100"
												>
													C. Ronaldo
												</p>
												<p
													tabindex="0"
													className="focus:outline-none text-xs leading-normal  text-gray-100"
												>
													JUV <span className="ml-4">FWD</span>
												</p>
											</div>
										</div>

										<div className=" pt-3 border-l text-right">
											<p
												tabindex="0"
												className="focus:outline-none  text-md font-normal leading-5 ml-2 px-4 text-gray-100"
											>
												99
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className=" pt-3 px-1 ">
								<div className="flex items-center border-b border-gray-300 ">
									<div className="flex items-start justify-between w-full ">
										<div className=" w-full flex">
											<p
												tabindex="0"
												className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex"
											>
												<span className=" align-middle  material-icons text-2xl text-red-500 ">
													info_outline
												</span>

												<div className="flex-shrink-0 w-10 h-10 ml-2 border-l border-gray-400 mb-2">
													<img
														className="w-full h-full rounded-full ml-2"
														src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
														alt=""
													/>
												</div>
											</p>

											<div className="ml-5 border-l border-gray-400 pl-3 mb-2">
												<p
													tabindex="0"
													className="focus:outline-none text-sm font-normal leading-5 text-gray-100"
												>
													C. Ronaldo
												</p>
												<p
													tabindex="0"
													className="focus:outline-none text-xs leading-normal  text-gray-100"
												>
													JUV <span className="ml-4">FWD</span>
												</p>
											</div>
										</div>

										<div className=" pt-3 border-l text-right">
											<p
												tabindex="0"
												className="focus:outline-none  text-md font-normal leading-5 ml-2 px-4 text-gray-100"
											>
												99
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className=" pt-3 px-1 ">
								<div className="flex items-center border-b border-gray-300 ">
									<div className="flex items-start justify-between w-full ">
										<div className=" w-full flex">
											<p
												tabindex="0"
												className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex"
											>
												<span className=" align-middle  material-icons text-2xl text-red-500 ">
													info_outline
												</span>

												<div className="flex-shrink-0 w-10 h-10 ml-2 border-l border-gray-400 mb-2">
													<img
														className="w-full h-full rounded-full ml-2"
														src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
														alt=""
													/>
												</div>
											</p>

											<div className="ml-5 border-l border-gray-400 pl-3 mb-2">
												<p
													tabindex="0"
													className="focus:outline-none text-sm font-normal leading-5 text-gray-100"
												>
													C. Ronaldo
												</p>
												<p
													tabindex="0"
													className="focus:outline-none text-xs leading-normal  text-gray-100"
												>
													JUV <span className="ml-4">FWD</span>
												</p>
											</div>
										</div>

										<div className=" pt-3 border-l text-right">
											<p
												tabindex="0"
												className="focus:outline-none  text-md font-normal leading-5 ml-2 px-4 text-gray-100"
											>
												99
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className=" pt-3 px-1 ">
								<div className="flex items-center border-b border-gray-300 ">
									<div className="flex items-start justify-between w-full ">
										<div className=" w-full flex">
											<p
												tabindex="0"
												className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex"
											>
												<span className=" align-middle  material-icons text-2xl text-red-500 ">
													info_outline
												</span>

												<div className="flex-shrink-0 w-10 h-10 ml-2 border-l border-gray-400 mb-2">
													<img
														className="w-full h-full rounded-full ml-2"
														src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
														alt=""
													/>
												</div>
											</p>

											<div className="ml-5 border-l border-gray-400 pl-3 mb-2">
												<p
													tabindex="0"
													className="focus:outline-none text-sm font-normal leading-5 text-gray-100"
												>
													C. Ronaldo
												</p>
												<p
													tabindex="0"
													className="focus:outline-none text-xs leading-normal  text-gray-100"
												>
													JUV <span className="ml-4">FWD</span>
												</p>
											</div>
										</div>

										<div className=" pt-3 border-l text-right">
											<p
												tabindex="0"
												className="focus:outline-none  text-md font-normal leading-5 ml-2 px-4 text-gray-100"
											>
												99
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className=" pt-3 px-1 ">
								<div className="flex items-center border-b border-gray-300 ">
									<div className="flex items-start justify-between w-full ">
										<div className=" w-full flex">
											<p
												tabindex="0"
												className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex"
											>
												<span className=" align-middle  material-icons text-2xl text-red-500 ">
													info_outline
												</span>

												<div className="flex-shrink-0 w-10 h-10 ml-2 border-l border-gray-400 mb-2">
													<img
														className="w-full h-full rounded-full ml-2"
														src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
														alt=""
													/>
												</div>
											</p>

											<div className="ml-5 border-l border-gray-400 pl-3 mb-2">
												<p
													tabindex="0"
													className="focus:outline-none text-sm font-normal leading-5 text-gray-100"
												>
													C. Ronaldo
												</p>
												<p
													tabindex="0"
													className="focus:outline-none text-xs leading-normal  text-gray-100"
												>
													JUV <span className="ml-4">FWD</span>
												</p>
											</div>
										</div>

										<div className=" pt-3 border-l text-right">
											<p
												tabindex="0"
												className="focus:outline-none  text-md font-normal leading-5 ml-2 px-4 text-gray-100"
											>
												99
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-2  w-auto">
				<div className="flex flex-col  pt-10 space-y-4 max-w-3xl mx-auto">
					<div className="mx-auto flex-1 svelte-1l8159u ">
						<button
							className="text-base shadow-inner shadow-gray-200/50 border hover:scale-110 focus:outline-none flex justify-center px-5 py-2 rounded font-medium cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-white text-gray-700
                                 duration-200 ease-in-out 
                                 transition"
						>
							<div className="flex font-sans text-xs font-medium py-1">
								<span className=" material-icons hover:text-gray-100">
									calendar_month
								</span>
								<span className="pl-3  pt-1">Sync to Calendar</span>
							</div>
						</button>
					</div>
					<div className="flex flex-col md:flex-row py-10">
						<div className="w-full mx-2 flex-1 svelte-1l8159u">
							<button
								className="text-base  hover:scale-110 focus:outline-none flex justify-center px-5 py-2 rounded font-bold cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-violet-400 text-gray-200
                                 duration-200 ease-in-out 
                                 transition"
							>
								<div className="flex font-sans text-xs font-semibold ">
									<span className=" material-icons hover:text-gray-100">
										arrow_backward
									</span>{" "}
									<span className="pt-1">Previous</span>
								</div>
							</button>
						</div>
						<h1 className="font-bold text-sm text-center text-gray-700 w-4/6 pt-3 px-5 ">
							Gameweek 20 - Tue 26 Jan 17:30
						</h1>
						<div className="w-full mx-2 flex-1 svelte-1l8159u">
							<button
								className="text-base  hover:scale-110 focus:outline-none flex justify-center px-5 py-2 rounded font-bold cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-violet-400 text-gray-200
                                 duration-200 ease-in-out 
                                 transition"
							>
								<div className="flex font-sans text-xs font-semibold px-5">
									<span className="pt-1"> Next</span>
									<span className="ml-20 material-icons hover:text-gray-100 ">
										arrow_forward
									</span>{" "}
								</div>
							</button>
						</div>
					</div>
				</div>

				<div className="pt-10 ">
					<p className="text-xs text-gray-800 font-normal text-center  py-4 bg-stone-300 mx-auto tracking-wider">
						Sunday 21 February 2021
					</p>

					<div className="w-full leading-normal ">
						<div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
							<div className="flex items-center">
								<div className="mr-3">
									<p className="text-gray-900 whitespace-no-wrap">Team 1</p>
								</div>
								<div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
									<img
										className="w-full h-full rounded-full"
										src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
										alt=""
									/>
								</div>
							</div>
							<p className="mx-16 px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
								19 : 00
							</p>
							<div className="flex items-center float-right">
								<div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
									<img
										className="w-full h-full rounded-full"
										src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
										alt=""
									/>
								</div>
								<div className="">
									<p className="text-gray-900 whitespace-no-wrap text-right">
										Team 2
									</p>
								</div>
							</div>
						</div>
						<div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
							<div className="flex items-center">
								<div className="mr-3">
									<p className="text-gray-900 whitespace-no-wrap">Team 1</p>
								</div>
								<div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
									<img
										className="w-full h-full rounded-full"
										src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
										alt=""
									/>
								</div>
							</div>
							<p className="mx-16 px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
								19 : 00
							</p>
							<div className="flex items-center float-right">
								<div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
									<img
										className="w-full h-full rounded-full"
										src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
										alt=""
									/>
								</div>
								<div className="">
									<p className="text-gray-900 whitespace-no-wrap text-right">
										Team 2
									</p>
								</div>
							</div>
						</div>
						<div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
							<div className="flex items-center">
								<div className="mr-3">
									<p className="text-gray-900 whitespace-no-wrap">Team 1</p>
								</div>
								<div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
									<img
										className="w-full h-full rounded-full"
										src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
										alt=""
									/>
								</div>
							</div>
							<p className="mx-16 px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
								19 : 00
							</p>
							<div className="flex items-center float-right">
								<div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
									<img
										className="w-full h-full rounded-full"
										src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
										alt=""
									/>
								</div>
								<div className="">
									<p className="text-gray-900 whitespace-no-wrap text-right">
										Team 2
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="pt-10 ">
					<p className="text-xs text-gray-800 font-normal text-center  py-4 bg-stone-300 mx-auto tracking-wider">
						Monday 22 February 2021
					</p>

					<div className="w-full leading-normal ">
						<div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
							<div className="flex items-center">
								<div className="mr-3">
									<p className="text-gray-900 whitespace-no-wrap">Team 1</p>
								</div>
								<div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
									<img
										className="w-full h-full rounded-full"
										src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
										alt=""
									/>
								</div>
							</div>
							<p className="mx-16 px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
								19 : 00
							</p>
							<div className="flex items-center float-right">
								<div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
									<img
										className="w-full h-full rounded-full"
										src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
										alt=""
									/>
								</div>
								<div className="">
									<p className="text-gray-900 whitespace-no-wrap text-right">
										Team 2
									</p>
								</div>
							</div>
						</div>
						<div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
							<div className="flex items-center">
								<div className="mr-3">
									<p className="text-gray-900 whitespace-no-wrap">Team 1</p>
								</div>
								<div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
									<img
										className="w-full h-full rounded-full"
										src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
										alt=""
									/>
								</div>
							</div>
							<p className="mx-16 px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
								19 : 00
							</p>
							<div className="flex items-center float-right">
								<div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
									<img
										className="w-full h-full rounded-full"
										src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
										alt=""
									/>
								</div>
								<div className="">
									<p className="text-gray-900 whitespace-no-wrap text-right">
										Team 2
									</p>
								</div>
							</div>
						</div>
						<div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
							<div className="flex items-center">
								<div className="mr-3">
									<p className="text-gray-900 whitespace-no-wrap">Team 1</p>
								</div>
								<div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
									<img
										className="w-full h-full rounded-full"
										src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
										alt=""
									/>
								</div>
							</div>
							<p className="mx-16 px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
								19 : 00
							</p>
							<div className="flex items-center float-right">
								<div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
									<img
										className="w-full h-full rounded-full"
										src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
										alt=""
									/>
								</div>
								<div className="">
									<p className="text-gray-900 whitespace-no-wrap text-right">
										Team 2
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="pt-10 ">
					<p className="text-xs text-gray-800 font-normal text-center  py-4 bg-stone-300 mx-auto tracking-wider">
						Sunday 27 February 2021
					</p>

					<div className="w-full leading-normal ">
						<div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
							<div className="flex items-center">
								<div className="mr-3">
									<p className="text-gray-900 whitespace-no-wrap">Team 1</p>
								</div>
								<div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
									<img
										className="w-full h-full rounded-full"
										src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
										alt=""
									/>
								</div>
							</div>
							<p className="mx-16 px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
								19 : 00
							</p>
							<div className="flex items-center float-right">
								<div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
									<img
										className="w-full h-full rounded-full"
										src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
										alt=""
									/>
								</div>
								<div className="">
									<p className="text-gray-900 whitespace-no-wrap text-right">
										Team 2
									</p>
								</div>
							</div>
						</div>
						<div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
							<div className="flex items-center">
								<div className="mr-3">
									<p className="text-gray-900 whitespace-no-wrap">Team 1</p>
								</div>
								<div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
									<img
										className="w-full h-full rounded-full"
										src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
										alt=""
									/>
								</div>
							</div>
							<p className="mx-16 px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
								19 : 00
							</p>
							<div className="flex items-center float-right">
								<div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
									<img
										className="w-full h-full rounded-full"
										src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
										alt=""
									/>
								</div>
								<div className="">
									<p className="text-gray-900 whitespace-no-wrap text-right">
										Team 2
									</p>
								</div>
							</div>
						</div>
						<div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
							<div className="flex items-center">
								<div className="mr-3">
									<p className="text-gray-900 whitespace-no-wrap">Team 1</p>
								</div>
								<div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
									<img
										className="w-full h-full rounded-full"
										src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
										alt=""
									/>
								</div>
							</div>
							<p className="mx-16 px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
								19 : 00
							</p>
							<div className="flex items-center float-right">
								<div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
									<img
										className="w-full h-full rounded-full"
										src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
										alt=""
									/>
								</div>
								<div className="">
									<p className="text-gray-900 whitespace-no-wrap text-right">
										Team 2
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<MainFooter />
		</div>
	);
}

export default SquadSelection;
