import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Header from "../components/Header";
import MainFooter from "../components/MainFooter";

function SelectCaptain() {
	return (
		<div className="bg-[#E5ECFA]/100 h-3/4">
			<Header />
			<BreadCrumb />

			<form>
				<div class="container  mx-auto px-6 pt-10  lg:px-20 flex items-center  justify-between flex-wrap">
					<div class="flex items-center flex-shrink-0 text-gray-600 mr-6">
						<h1 class="font-bold text-4xl text-gray-700  text-center">
							Select Your Captain
						</h1>
					</div>
					<div class="w-full items-center block flex-grow md:flex md:justify-end md:w-auto">
						<div>
							<button
								class="text-base hover:scale-110 focus:outline-none flex justify-center px-2 py-2 rounded font-bold cursor-pointer                                 
                                    hover:bg-blue-500 shadow-inner 
                                    bg-teal-400 text-gray-200
                                    duration-200 ease-in-out 
                                    transition"
								type="submit"
							>
								<div class="font-sans text-sm font-semibold px-2">Next</div>
							</button>
						</div>
					</div>
				</div>

				<hr class="my-6 max-w-6xl rounded-lg border-b-2 border-violet-500 mx-auto" />

				<div class="container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-5  w-auto">
					<div
						class="rounded-2xl border shadow-xl py-20 px-5 w-full "
						style={{
							backgroundImage: 'url("/img/pitch-lg.png")',
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							backgroundPosition: "center center",
						}}
					>
						<p className="text-sm text-gray-100 font-normal text-center  max-w-3xl mb-8 py-5 bg-[#6E4BEC7D]/70 tracking-wider px-2 mx-auto lg:px-1 ">
							Your Captain's point will be doubled
						</p>
						<div className="flex   py-4 mx-auto">
							<div class="p-3  rounded mt-20 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[3rem] ">
									<svg
										width="43"
										height="41"
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
								<div className="w-full mx-auto -mt-1    mb-1">
									<p
										tabindex="0"
										className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]"
									>
										C. Ronaldo
									</p>
									<p
										tabindex="0"
										className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
									>
										11.9
									</p>
								</div>
							</div>
						</div>

						<div className="flex   py-10 mx-auto w-1/2">
							<div class="p-3  rounded mt-2 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[3rem] ">
									<svg
										width="43"
										height="41"
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
								<div className="w-full mx-auto -mt-1    mb-2">
									<p
										tabindex="0"
										className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]"
									>
										C. Ronaldo
									</p>
									<p
										tabindex="0"
										className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
									>
										11.9
									</p>
								</div>
							</div>

							<div class="p-3  rounded mt-2 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[3rem] ">
									<svg
										width="43"
										height="41"
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
								<div className="w-full mx-auto -mt-1    mb-2">
									<p
										tabindex="0"
										className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]"
									>
										C. Ronaldo
									</p>
									<p
										tabindex="0"
										className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
									>
										11.9
									</p>
								</div>
							</div>

							<div class="p-3  rounded mt-2 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[3rem] ">
									<svg
										width="43"
										height="41"
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
								<div className="w-full mx-auto -mt-1    mb-2">
									<p
										tabindex="0"
										className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]"
									>
										C. Ronaldo
									</p>
									<p
										tabindex="0"
										className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
									>
										11.9
									</p>
								</div>
							</div>
						</div>

						<div className="flex   py-10 mx-auto w-3/4">
							<div class="p-3  rounded mt-5 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<svg
										width="43"
										height="41"
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
								<div className="w-full mx-auto -mt-1    mb-2">
									<p
										tabindex="0"
										className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]"
									>
										C. Ronaldo
									</p>
									<p
										tabindex="0"
										className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
									>
										11.9
									</p>
								</div>
							</div>

							<div class="p-3  rounded mt-1 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<svg
										width="43"
										height="41"
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
								<div className="w-full mx-auto -mt-1    mb-2">
									<p
										tabindex="0"
										className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]"
									>
										C. Ronaldo
									</p>
									<p
										tabindex="0"
										className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
									>
										11.9
									</p>
								</div>
							</div>

							<div class="p-3  rounded mt-1 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<svg
										width="43"
										height="41"
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
								<div className="w-full mx-auto -mt-1    mb-2">
									<p
										tabindex="0"
										className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]"
									>
										C. Ronaldo
									</p>
									<p
										tabindex="0"
										className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
									>
										11.9
									</p>
								</div>
							</div>

							<div class="p-3  rounded mt-5 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<svg
										width="43"
										height="41"
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
								<div className="w-full mx-auto -mt-1    mb-2">
									<p
										tabindex="0"
										className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]"
									>
										C. Ronaldo
									</p>
									<p
										tabindex="0"
										className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
									>
										11.9
									</p>
								</div>
							</div>
						</div>

						<div className="flex   py-10 mx-auto w-1/2">
							<div class="p-3  rounded -mt-5 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<svg
										width="43"
										height="41"
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
								<div className="w-full mx-auto -mt-1    mb-2">
									<p
										tabindex="0"
										className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]"
									>
										C. Ronaldo
									</p>
									<p
										tabindex="0"
										className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
									>
										11.9
									</p>
								</div>
							</div>

							<div class="p-3  rounded mt-2 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<svg
										width="43"
										height="41"
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
								<div className="w-full mx-auto -mt-1    mb-2">
									<p
										tabindex="0"
										className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]"
									>
										C. Ronaldo
									</p>
									<p
										tabindex="0"
										className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
									>
										11.9
									</p>
								</div>
							</div>

							<div class="p-3  rounded -mt-5 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
								<div className="-mt-[4rem] ">
									<svg
										width="43"
										height="41"
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
								<div className="w-full mx-auto -mt-1    mb-2">
									<p
										tabindex="0"
										className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]"
									>
										C. Ronaldo
									</p>
									<p
										tabindex="0"
										className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
									>
										11.9
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>

			<MainFooter />
		</div>
	);
}

export default SelectCaptain;
