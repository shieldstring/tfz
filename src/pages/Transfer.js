import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Header from "../components/Header";
import MainFooter from "../components/MainFooter";

function Transfer() {
	const [openTab, setOpenTab] = React.useState(1);

	return (
		<div className="bg-[#E5ECFA]/100 h-3/4">
			<Header />
			<BreadCrumb />

			<div className="container  mx-auto  pt-10  lg:px-2 flex">
				<div className="container max-w-4xl mt-10 ">
					<div className="flex items-center flex-shrink-0 text-gray-600 mr-6">
						<h1 className="font-semibold text-3xl text-gray-700  text-center">
							Transfer
						</h1>
					</div>

					<hr className="my-5 rounded-lg border-b-2 border-gray-300 mx-auto" />

					<div className="container  mx-auto  py-4   rounded-md lg:px-2 flex items-center  justify-between flex-wrap">
						<h1 className="font-medium text-sm text-center mx-auto text-gray-700 w-full py-2 px-2">
							To change your captain use the menu which appears when clicking on
							the players's shirt
						</h1>

						<h1 className="font-bold text-xl text-center text-gray-100 w-full py-3 px-2 shadow-xl shadow-[#4f38a4] bg-[#6E4BEC]/50">
							Gameweek 27:{" "}
							<span className="pl-3 font-normal">Sat 6 Mar 12:00</span>
						</h1>

						<div className="w-full items-center block mt-10 flex-grow md:flex md:justify-between mx-auto md:w-auto">
							<div>
								<button
									className=" hover:scale-110 focus:outline-none flex justify-center px-24 py-5 cursor-pointer                                
                                hover:bg-blue-500 bg-[#E2E2E2]  rounded-md
                                text-gray-800/80 
                                 duration-200 ease-in-out 
                                 transition"
								>
									<div className="font-sans text-sm font-medium ">
										Auto Pick
									</div>
								</button>
							</div>
							<div>
								<button
									className=" hover:scale-110 focus:outline-none flex justify-center px-28 py-5 cursor-pointer                                
                                hover:bg-blue-500 bg-[#E2E2E2]  rounded-md
                                text-gray-800/80 
                                 duration-200 ease-in-out 
                                 transition"
								>
									<div className="font-sans text-sm font-medium ">Reset</div>
								</button>
							</div>
							<div>
								<button
									className=" hover:scale-110 focus:outline-none flex justify-center px-20 py-5 cursor-pointer                                 
                                hover:bg-blue-500 bg-[#6E4BEC]/50 shadow-lg shadow-[#5e42c3]/50 rounded-md
                                text-gray-100 
                                 duration-200 ease-in-out 
                                 transition"
								>
									<div className="font-sans text-sm font-medium ">
										Play Wildcard
									</div>
								</button>
							</div>
						</div>
					</div>

					<div className="flex justify-between mt-5">
						<div class="  px-1  ">
							<div class="rounded-sm border-y-2 py-2 px-20 w-full border-gray-400">
								<div class="flex items-center    ">
									<div class="justify-center w-full pb-2">
										<div class=" w-full">
											<p
												tabindex="0"
												class="focus:outline-none text-md leading-normal font-medium pt-2 text-gray-700"
											>
												Free Transfer
											</p>
										</div>

										<div class=" text-center pt-3">
											<p
												tabindex="0"
												class="focus:outline-none  text-2xl font-medium leading-5 text-gray-800"
											>
												2
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="  px-1  ">
							<div class=" rounded-sm border-y-2  py-2 px-24 w-full border-gray-400">
								<div class="flex items-center  border-gray-400 border-xl ">
									<div class="justify-center w-full pb-2">
										<div class=" w-full">
											<p
												tabindex="0"
												class="focus:outline-none text-md leading-normal font-medium pt-2 text-gray-700"
											>
												Cost
											</p>
										</div>

										<div class=" text-center pt-3">
											<p
												tabindex="0"
												class="focus:outline-none  text-2xl font-medium leading-5 text-gray-800"
											>
												0 pts
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="  px-1  ">
							<div class=" rounded-sm border-y-2  py-2 px-16 w-full border-gray-400">
								<div class="flex items-center  border-gray-400  ">
									<div class="justify-center w-full pb-2">
										<div class=" w-full">
											<p
												tabindex="0"
												class="focus:outline-none text-md font-medium leading-normal pt-2 text-gray-700"
											>
												Money Remaining
											</p>
										</div>

										<div class=" text-center pt-3">
											<p
												tabindex="0"
												class="focus:outline-none  text-2xl font-medium leading-5 text-[#6544DE]"
											>
												13.7
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						className="  h-[30%]  mt-5 mb-10  px-2 py-3 lg:px-1  "
						style={{
							backgroundImage: 'url("/img/pitch-lg.png")',
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							backgroundPosition: "center center",
						}}
					>
						<div className="flex justify-center items-center  mb-8 mx-auto mt-10">
							<div className="inline-flex rounded">
								<input
									type="radio"
									name="room_type"
									id="fixtures"
									hidden
									onClick={(e) => {
										e.preventDefault();
										setOpenTab(1);
									}}
									data-toggle="tab"
									role="tablist"
								/>
								<label
									for="fixtures"
									className={
										"radio text-center  self-center py-3 px-12 border cursor-pointer  hover:opacity-75 " +
										(openTab === 1
											? "text-[#6645DE] bg-white border-[#6645DE]"
											: "text-white bg-[#6645DE] border-[#6645DE]")
									}
								>
									Pitch View
								</label>
							</div>
							<div className="inline-flex rounded -ml-1">
								<input
									type="radio"
									name="room_type"
									id="fdr"
									hidden
									onClick={(e) => {
										e.preventDefault();
										setOpenTab(2);
									}}
									data-toggle="tab"
									role="tablist"
								/>
								<label
									for="fdr"
									className={
										"radio text-center  self-center py-3 px-12 border rounded-sm cursor-pointer   hover:opacity-75 " +
										(openTab === 2
											? "text-[#6645DE] bg-white border-[#6645DE]"
											: "text-white bg-[#6645DE] border-[#6645DE]")
									}
								>
									List View
								</label>
							</div>
						</div>

						<div className="flex flex-wrap ">
							<div className="w-full">
								<div className="relative flex flex-col min-w-0 break-words  w-full  rounded">
									<div className="px-4 flex-auto">
										<div className="tab-content tab-space">
											<div
												className={openTab === 1 ? "block" : "hidden"}
												id="link1"
											>
												<div className="flex   py-10 mx-auto">
													<div class="p-3  rounded mt-10 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
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
																width="52"
																height="49"
																viewBox="0 0 52 49"
																fill="none"
																className=" mx-auto z-0"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M6.9677 4.87723C8.79608 3.96408 19.7664 0.311493 19.7664 0.311493C24.2007 2.39564 26.6146 3.83476 32.5651 0.311493L41.707 3.96408L45.3637 7.61668C46.2779 8.52982 48.1063 11.2693 49.0205 13.0956C49.9347 14.9219 50.8489 24.0533 50.8489 24.0533L49.0205 24.9665H40.7928L39.8786 21.3139V48.7083H10.6245V24.0533H0.568359V21.3139L3.31093 9.44297C3.31093 9.44297 5.13932 5.79038 6.9677 4.87723Z"
																	fill="url(#paint0_linear_3175_906)"
																/>
																<path
																	d="M10.6245 24.0533H0.568359V21.3139L3.31093 9.44297C3.31093 9.44297 5.13932 5.79038 6.9677 4.87723C8.79608 3.96408 19.7664 0.311493 19.7664 0.311493C24.2007 2.39564 26.6146 3.83476 32.5651 0.311493L41.707 3.96408C41.707 3.96408 44.4495 6.70353 45.3637 7.61668C46.2779 8.52982 48.1063 11.2693 49.0205 13.0956C49.9347 14.9219 50.8489 24.0533 50.8489 24.0533L49.0205 24.9665H40.7928L39.8786 21.3139V48.7083H10.6245V24.0533ZM10.6245 24.0533V21.3139"
																	stroke="white"
																	stroke-width="0.5"
																/>
																<defs>
																	<linearGradient
																		id="paint0_linear_3175_906"
																		x1="25.7086"
																		y1="0.311493"
																		x2="25.7086"
																		y2="48.7083"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#FFD500" />
																		<stop offset="1" stop-color="#CFAD00" />
																	</linearGradient>
																</defs>
															</svg>
														</div>
														<div className="w-full mx-auto -mt-1    mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 "
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A] via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
															>
																11.9
															</p>
														</div>
													</div>
												</div>

												<div className="flex   py-10 mx-auto w-1/2">
													<div class="p-3  rounded mt-2  mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
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
														<div className="w-full mx-auto -mt-1    mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 "
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A] via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
															>
																11.9
															</p>
														</div>
													</div>

													<div class="p-3  rounded mt-2 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
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
														<div className="w-full mx-auto -mt-1    mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 "
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A] via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
															>
																11.9
															</p>
														</div>
													</div>

													<div class="p-3  rounded mt-2 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
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
														<div className="w-full mx-auto -mt-1    mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 "
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A] via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
															>
																11.9
															</p>
														</div>
													</div>
												</div>

												<div className="flex   py-10 mx-auto w-3/4">
													<div class="p-3  rounded mt-5 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
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
														<div className="w-full mx-auto -mt-1    mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 "
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A] via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
															>
																11.9
															</p>
														</div>
													</div>

													<div class="p-3  rounded mt-1 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
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
														<div className="w-full mx-auto -mt-1    mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 "
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A] via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
															>
																11.9
															</p>
														</div>
													</div>

													<div class="p-3  rounded mt-1 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
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
														<div className="w-full mx-auto -mt-1    mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 "
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A] via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
															>
																11.9
															</p>
														</div>
													</div>

													<div class="p-3  rounded mt-5 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
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
														<div className="w-full mx-auto -mt-1    mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 "
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A] via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
															>
																11.9
															</p>
														</div>
													</div>
												</div>

												<div className="flex   py-10 mx-auto w-1/2">
													<div class="p-3  rounded -mt-5 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
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
														<div className="w-full mx-auto -mt-1    mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 "
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A] via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
															>
																11.9
															</p>
														</div>
													</div>

													<div class="p-3  rounded mt-2 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
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
														<div className="w-full mx-auto -mt-1    mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 "
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A] via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
															>
																11.9
															</p>
														</div>
													</div>

													<div class="p-3  rounded -mt-5 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
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
														<div className="w-full mx-auto -mt-1    mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-xs font-light py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 "
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-light leading-normal  text-gray-100 bg-[#33175A] via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
															>
																11.9
															</p>
														</div>
													</div>
												</div>
											</div>
											<div
												className={openTab === 2 ? "block" : "hidden"}
												id="link2"
											>
												<div class=" mx-auto">
													<div class="pt-4">
														<div class=" px-1 sm:px-8 py-4 overflow-x-auto">
															<div class="inline-block min-w-full shadow rounded-lg overflow-y-scroll   overflow-x-auto  w-full h-[36rem]">
																<table class="min-w-full leading-normal">
																	<thead>
																		<tr className="bg-red-700">
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider">
																				Goal Keeper
																			</th>
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider">
																				₦
																			</th>
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider hidden lg:table-cell">
																				SB
																			</th>
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider hidden lg:table-cell">
																				TP
																			</th>
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider hidden lg:table-cell">
																				Fix
																			</th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<div className=" w-full flex">
																					<p
																						tabindex="0"
																						className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																					>
																						<svg
																							width="26"
																							height="26"
																							viewBox="0 0 26 26"
																							fill="none"
																							xmlns="http://www.w3.org/2000/svg"
																							className="align-middle mt-2"
																						>
																							<circle
																								cx="12"
																								cy="12"
																								r="10"
																								fill="#A7030A"
																							/>
																							<path
																								d="M11 7H13V9H11V7Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								d="M11 11H13V17H11V11Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								fill-rule="evenodd"
																								clip-rule="evenodd"
																								d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																						</svg>

																						<div className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
																							<svg
																								width="43"
																								height="40"
																								viewBox="0 0 43 40"
																								fill="none"
																								xmlns="http://www.w3.org/2000/svg"
																							>
																								<path
																									d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
																									fill="#276556"
																								/>
																								<path
																									d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
																									stroke="white"
																									stroke-width="0.5"
																								/>
																							</svg>
																						</div>
																					</p>

																					<div className="ml-5 pl-3 mb-2">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
																						>
																							C. Ronaldo
																						</p>
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs leading-normal  text-gray-900"
																						>
																							JUV
																							<span className="ml-4">FWD</span>
																						</p>
																					</div>
																				</div>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<p class="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
																					5.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					15.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					84
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					AVL (H)
																				</p>
																			</td>
																		</tr>
																		<tr>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<div className=" w-full flex">
																					<p
																						tabindex="0"
																						className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																					>
																						<svg
																							width="26"
																							height="26"
																							viewBox="0 0 26 26"
																							fill="none"
																							xmlns="http://www.w3.org/2000/svg"
																							className="align-middle mt-2"
																						>
																							<circle
																								cx="12"
																								cy="12"
																								r="10"
																								fill="#A7030A"
																							/>
																							<path
																								d="M11 7H13V9H11V7Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								d="M11 11H13V17H11V11Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								fill-rule="evenodd"
																								clip-rule="evenodd"
																								d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																						</svg>

																						<div className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
																							<svg
																								width="43"
																								height="40"
																								viewBox="0 0 43 40"
																								fill="none"
																								xmlns="http://www.w3.org/2000/svg"
																							>
																								<path
																									d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
																									fill="#276556"
																								/>
																								<path
																									d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
																									stroke="white"
																									stroke-width="0.5"
																								/>
																							</svg>
																						</div>
																					</p>

																					<div className="ml-5 pl-3 mb-2">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
																						>
																							C. Ronaldo
																						</p>
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs leading-normal  text-gray-900"
																						>
																							JUV
																							<span className="ml-4">FWD</span>
																						</p>
																					</div>
																				</div>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<p class="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
																					5.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					15.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					84
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					AVL (H)
																				</p>
																			</td>
																		</tr>
																	</tbody>
																</table>
																<table class="min-w-full leading-normal">
																	<thead>
																		<tr className="bg-[#347E25]">
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider">
																				Defenders
																			</th>
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider">
																				₦
																			</th>
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider hidden lg:table-cell">
																				SB
																			</th>
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider hidden lg:table-cell">
																				TP
																			</th>
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider hidden lg:table-cell">
																				Fix
																			</th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<div className=" w-full flex">
																					<p
																						tabindex="0"
																						className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																					>
																						<svg
																							width="26"
																							height="26"
																							viewBox="0 0 26 26"
																							fill="none"
																							xmlns="http://www.w3.org/2000/svg"
																							className="align-middle mt-2"
																						>
																							<circle
																								cx="12"
																								cy="12"
																								r="10"
																								fill="#199300"
																							/>
																							<path
																								d="M11 7H13V9H11V7Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								d="M11 11H13V17H11V11Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								fill-rule="evenodd"
																								clip-rule="evenodd"
																								d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																						</svg>

																						<div className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
																							<svg
																								width="43"
																								height="40"
																								viewBox="0 0 43 40"
																								fill="none"
																								xmlns="http://www.w3.org/2000/svg"
																							>
																								<path
																									d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
																									fill="#276556"
																								/>
																								<path
																									d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
																									stroke="white"
																									stroke-width="0.5"
																								/>
																							</svg>
																						</div>
																					</p>

																					<div className="ml-5 pl-3 mb-2">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
																						>
																							C. Ronaldo
																						</p>
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs leading-normal  text-gray-900"
																						>
																							JUV
																							<span className="ml-4">FWD</span>
																						</p>
																					</div>
																				</div>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<p class="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
																					5.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					15.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					84
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					AVL (H)
																				</p>
																			</td>
																		</tr>
																		<tr>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<div className=" w-full flex">
																					<p
																						tabindex="0"
																						className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																					>
																						<svg
																							width="26"
																							height="26"
																							viewBox="0 0 26 26"
																							fill="none"
																							xmlns="http://www.w3.org/2000/svg"
																							className="align-middle mt-2"
																						>
																							<circle
																								cx="12"
																								cy="12"
																								r="10"
																								fill="#199300"
																							/>
																							<path
																								d="M11 7H13V9H11V7Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								d="M11 11H13V17H11V11Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								fill-rule="evenodd"
																								clip-rule="evenodd"
																								d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																						</svg>

																						<div className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
																							<svg
																								width="43"
																								height="40"
																								viewBox="0 0 43 40"
																								fill="none"
																								xmlns="http://www.w3.org/2000/svg"
																							>
																								<path
																									d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
																									fill="#276556"
																								/>
																								<path
																									d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
																									stroke="white"
																									stroke-width="0.5"
																								/>
																							</svg>
																						</div>
																					</p>

																					<div className="ml-5 pl-3 mb-2">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
																						>
																							C. Ronaldo
																						</p>
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs leading-normal  text-gray-900"
																						>
																							JUV
																							<span className="ml-4">FWD</span>
																						</p>
																					</div>
																				</div>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<p class="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
																					5.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					15.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					84
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					AVL (H)
																				</p>
																			</td>
																		</tr>
																		<tr>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<div className=" w-full flex">
																					<p
																						tabindex="0"
																						className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																					>
																						<svg
																							width="26"
																							height="26"
																							viewBox="0 0 26 26"
																							fill="none"
																							xmlns="http://www.w3.org/2000/svg"
																							className="align-middle mt-2"
																						>
																							<circle
																								cx="12"
																								cy="12"
																								r="10"
																								fill="#199300"
																							/>
																							<path
																								d="M11 7H13V9H11V7Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								d="M11 11H13V17H11V11Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								fill-rule="evenodd"
																								clip-rule="evenodd"
																								d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																						</svg>

																						<div className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
																							<svg
																								width="43"
																								height="40"
																								viewBox="0 0 43 40"
																								fill="none"
																								xmlns="http://www.w3.org/2000/svg"
																							>
																								<path
																									d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
																									fill="#276556"
																								/>
																								<path
																									d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
																									stroke="white"
																									stroke-width="0.5"
																								/>
																							</svg>
																						</div>
																					</p>

																					<div className="ml-5 pl-3 mb-2">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
																						>
																							C. Ronaldo
																						</p>
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs leading-normal  text-gray-900"
																						>
																							JUV
																							<span className="ml-4">FWD</span>
																						</p>
																					</div>
																				</div>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<p class="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
																					5.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					15.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					84
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					AVL (H)
																				</p>
																			</td>
																		</tr>
																		<tr>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<div className=" w-full flex">
																					<p
																						tabindex="0"
																						className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																					>
																						<svg
																							width="26"
																							height="26"
																							viewBox="0 0 26 26"
																							fill="none"
																							xmlns="http://www.w3.org/2000/svg"
																							className="align-middle mt-2"
																						>
																							<circle
																								cx="12"
																								cy="12"
																								r="10"
																								fill="#199300"
																							/>
																							<path
																								d="M11 7H13V9H11V7Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								d="M11 11H13V17H11V11Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								fill-rule="evenodd"
																								clip-rule="evenodd"
																								d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																						</svg>

																						<div className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
																							<svg
																								width="43"
																								height="40"
																								viewBox="0 0 43 40"
																								fill="none"
																								xmlns="http://www.w3.org/2000/svg"
																							>
																								<path
																									d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
																									fill="#276556"
																								/>
																								<path
																									d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
																									stroke="white"
																									stroke-width="0.5"
																								/>
																							</svg>
																						</div>
																					</p>

																					<div className="ml-5 pl-3 mb-2">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
																						>
																							C. Ronaldo
																						</p>
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs leading-normal  text-gray-900"
																						>
																							JUV
																							<span className="ml-4">FWD</span>
																						</p>
																					</div>
																				</div>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<p class="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
																					5.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					15.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					84
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					AVL (H)
																				</p>
																			</td>
																		</tr>
																	</tbody>
																</table>
																<table class="min-w-full leading-normal">
																	<thead>
																		<tr className="bg-[#513C9D]">
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider">
																				Midfelders
																			</th>
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider">
																				₦
																			</th>
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider hidden lg:table-cell">
																				SB
																			</th>
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider hidden lg:table-cell">
																				TP
																			</th>
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider hidden lg:table-cell">
																				Fix
																			</th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<div className=" w-full flex">
																					<p
																						tabindex="0"
																						className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																					>
																						<svg
																							width="26"
																							height="26"
																							viewBox="0 0 26 26"
																							fill="none"
																							xmlns="http://www.w3.org/2000/svg"
																							className="align-middle mt-2"
																						>
																							<circle
																								cx="12"
																								cy="12"
																								r="10"
																								fill="#513C9D"
																							/>
																							<path
																								d="M11 7H13V9H11V7Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								d="M11 11H13V17H11V11Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								fill-rule="evenodd"
																								clip-rule="evenodd"
																								d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																						</svg>

																						<div className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
																							<svg
																								width="43"
																								height="40"
																								viewBox="0 0 43 40"
																								fill="none"
																								xmlns="http://www.w3.org/2000/svg"
																							>
																								<path
																									d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
																									fill="#276556"
																								/>
																								<path
																									d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
																									stroke="white"
																									stroke-width="0.5"
																								/>
																							</svg>
																						</div>
																					</p>

																					<div className="ml-5 pl-3 mb-2">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
																						>
																							C. Ronaldo
																						</p>
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs leading-normal  text-gray-900"
																						>
																							JUV
																							<span className="ml-4">FWD</span>
																						</p>
																					</div>
																				</div>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<p class="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
																					5.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					15.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					84
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					AVL (H)
																				</p>
																			</td>
																		</tr>
																		<tr>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<div className=" w-full flex">
																					<p
																						tabindex="0"
																						className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																					>
																						<svg
																							width="26"
																							height="26"
																							viewBox="0 0 26 26"
																							fill="none"
																							xmlns="http://www.w3.org/2000/svg"
																							className="align-middle mt-2"
																						>
																							<circle
																								cx="12"
																								cy="12"
																								r="10"
																								fill="#513C9D"
																							/>
																							<path
																								d="M11 7H13V9H11V7Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								d="M11 11H13V17H11V11Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								fill-rule="evenodd"
																								clip-rule="evenodd"
																								d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																						</svg>

																						<div className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
																							<svg
																								width="43"
																								height="40"
																								viewBox="0 0 43 40"
																								fill="none"
																								xmlns="http://www.w3.org/2000/svg"
																							>
																								<path
																									d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
																									fill="#276556"
																								/>
																								<path
																									d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
																									stroke="white"
																									stroke-width="0.5"
																								/>
																							</svg>
																						</div>
																					</p>

																					<div className="ml-5 pl-3 mb-2">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
																						>
																							C. Ronaldo
																						</p>
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs leading-normal  text-gray-900"
																						>
																							JUV
																							<span className="ml-4">FWD</span>
																						</p>
																					</div>
																				</div>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<p class="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
																					5.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					15.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					84
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					AVL (H)
																				</p>
																			</td>
																		</tr>
																		<tr>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<div className=" w-full flex">
																					<p
																						tabindex="0"
																						className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																					>
																						<svg
																							width="26"
																							height="26"
																							viewBox="0 0 26 26"
																							fill="none"
																							xmlns="http://www.w3.org/2000/svg"
																							className="align-middle mt-2"
																						>
																							<circle
																								cx="12"
																								cy="12"
																								r="10"
																								fill="#513C9D"
																							/>
																							<path
																								d="M11 7H13V9H11V7Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								d="M11 11H13V17H11V11Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								fill-rule="evenodd"
																								clip-rule="evenodd"
																								d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																						</svg>

																						<div className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
																							<svg
																								width="43"
																								height="40"
																								viewBox="0 0 43 40"
																								fill="none"
																								xmlns="http://www.w3.org/2000/svg"
																							>
																								<path
																									d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
																									fill="#276556"
																								/>
																								<path
																									d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
																									stroke="white"
																									stroke-width="0.5"
																								/>
																							</svg>
																						</div>
																					</p>

																					<div className="ml-5 pl-3 mb-2">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
																						>
																							C. Ronaldo
																						</p>
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs leading-normal  text-gray-900"
																						>
																							JUV
																							<span className="ml-4">FWD</span>
																						</p>
																					</div>
																				</div>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<p class="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
																					5.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					15.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					84
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					AVL (H)
																				</p>
																			</td>
																		</tr>
																		<tr>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<div className=" w-full flex">
																					<p
																						tabindex="0"
																						className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																					>
																						<svg
																							width="26"
																							height="26"
																							viewBox="0 0 26 26"
																							fill="none"
																							xmlns="http://www.w3.org/2000/svg"
																							className="align-middle mt-2"
																						>
																							<circle
																								cx="12"
																								cy="12"
																								r="10"
																								fill="#513C9D"
																							/>
																							<path
																								d="M11 7H13V9H11V7Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								d="M11 11H13V17H11V11Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								fill-rule="evenodd"
																								clip-rule="evenodd"
																								d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																						</svg>

																						<div className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
																							<svg
																								width="43"
																								height="40"
																								viewBox="0 0 43 40"
																								fill="none"
																								xmlns="http://www.w3.org/2000/svg"
																							>
																								<path
																									d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
																									fill="#276556"
																								/>
																								<path
																									d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
																									stroke="white"
																									stroke-width="0.5"
																								/>
																							</svg>
																						</div>
																					</p>

																					<div className="ml-5 pl-3 mb-2">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
																						>
																							C. Ronaldo
																						</p>
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs leading-normal  text-gray-900"
																						>
																							JUV
																							<span className="ml-4">FWD</span>
																						</p>
																					</div>
																				</div>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<p class="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
																					5.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					15.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					84
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					AVL (H)
																				</p>
																			</td>
																		</tr>
																	</tbody>
																</table>
																<table class="min-w-full leading-normal">
																	<thead>
																		<tr className="bg-red-700">
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider">
																				Forwards
																			</th>
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider">
																				₦
																			</th>
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider hidden lg:table-cell">
																				SB
																			</th>
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider hidden lg:table-cell">
																				TP
																			</th>
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider hidden lg:table-cell">
																				Fix
																			</th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<div className=" w-full flex">
																					<p
																						tabindex="0"
																						className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																					>
																						<svg
																							width="26"
																							height="26"
																							viewBox="0 0 26 26"
																							fill="none"
																							xmlns="http://www.w3.org/2000/svg"
																							className="align-middle mt-2"
																						>
																							<circle
																								cx="12"
																								cy="12"
																								r="10"
																								fill="#A7030A"
																							/>
																							<path
																								d="M11 7H13V9H11V7Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								d="M11 11H13V17H11V11Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								fill-rule="evenodd"
																								clip-rule="evenodd"
																								d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																						</svg>

																						<div className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
																							<svg
																								width="43"
																								height="40"
																								viewBox="0 0 43 40"
																								fill="none"
																								xmlns="http://www.w3.org/2000/svg"
																							>
																								<path
																									d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
																									fill="#276556"
																								/>
																								<path
																									d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
																									stroke="white"
																									stroke-width="0.5"
																								/>
																							</svg>
																						</div>
																					</p>

																					<div className="ml-5 pl-3 mb-2">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
																						>
																							C. Ronaldo
																						</p>
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs leading-normal  text-gray-900"
																						>
																							JUV
																							<span className="ml-4">FWD</span>
																						</p>
																					</div>
																				</div>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<p class="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
																					5.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					15.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					84
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					AVL (H)
																				</p>
																			</td>
																		</tr>
																		<tr>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<div className=" w-full flex">
																					<p
																						tabindex="0"
																						className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																					>
																						<svg
																							width="26"
																							height="26"
																							viewBox="0 0 26 26"
																							fill="none"
																							xmlns="http://www.w3.org/2000/svg"
																							className="align-middle mt-2"
																						>
																							<circle
																								cx="12"
																								cy="12"
																								r="10"
																								fill="#A7030A"
																							/>
																							<path
																								d="M11 7H13V9H11V7Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								d="M11 11H13V17H11V11Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								fill-rule="evenodd"
																								clip-rule="evenodd"
																								d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																						</svg>

																						<div className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
																							<svg
																								width="43"
																								height="40"
																								viewBox="0 0 43 40"
																								fill="none"
																								xmlns="http://www.w3.org/2000/svg"
																							>
																								<path
																									d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
																									fill="#276556"
																								/>
																								<path
																									d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
																									stroke="white"
																									stroke-width="0.5"
																								/>
																							</svg>
																						</div>
																					</p>

																					<div className="ml-5 pl-3 mb-2">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
																						>
																							C. Ronaldo
																						</p>
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs leading-normal  text-gray-900"
																						>
																							JUV
																							<span className="ml-4">FWD</span>
																						</p>
																					</div>
																				</div>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<p class="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
																					5.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					15.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					84
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					AVL (H)
																				</p>
																			</td>
																		</tr>
																		<tr>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<div className=" w-full flex">
																					<p
																						tabindex="0"
																						className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																					>
																						<svg
																							width="26"
																							height="26"
																							viewBox="0 0 26 26"
																							fill="none"
																							xmlns="http://www.w3.org/2000/svg"
																							className="align-middle mt-2"
																						>
																							<circle
																								cx="12"
																								cy="12"
																								r="10"
																								fill="#A7030A"
																							/>
																							<path
																								d="M11 7H13V9H11V7Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								d="M11 11H13V17H11V11Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								fill-rule="evenodd"
																								clip-rule="evenodd"
																								d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																						</svg>

																						<div className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
																							<svg
																								width="43"
																								height="40"
																								viewBox="0 0 43 40"
																								fill="none"
																								xmlns="http://www.w3.org/2000/svg"
																							>
																								<path
																									d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
																									fill="#276556"
																								/>
																								<path
																									d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
																									stroke="white"
																									stroke-width="0.5"
																								/>
																							</svg>
																						</div>
																					</p>

																					<div className="ml-5 pl-3 mb-2">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
																						>
																							C. Ronaldo
																						</p>
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs leading-normal  text-gray-900"
																						>
																							JUV
																							<span className="ml-4">FWD</span>
																						</p>
																					</div>
																				</div>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<p class="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
																					5.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					15.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					84
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					AVL (H)
																				</p>
																			</td>
																		</tr>
																		<tr>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<div className=" w-full flex">
																					<p
																						tabindex="0"
																						className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																					>
																						<svg
																							width="26"
																							height="26"
																							viewBox="0 0 26 26"
																							fill="none"
																							xmlns="http://www.w3.org/2000/svg"
																							className="align-middle mt-2"
																						>
																							<circle
																								cx="12"
																								cy="12"
																								r="10"
																								fill="#A7030A"
																							/>
																							<path
																								d="M11 7H13V9H11V7Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								d="M11 11H13V17H11V11Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								fill-rule="evenodd"
																								clip-rule="evenodd"
																								d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																						</svg>

																						<div className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
																							<svg
																								width="43"
																								height="40"
																								viewBox="0 0 43 40"
																								fill="none"
																								xmlns="http://www.w3.org/2000/svg"
																							>
																								<path
																									d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
																									fill="#276556"
																								/>
																								<path
																									d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
																									stroke="white"
																									stroke-width="0.5"
																								/>
																							</svg>
																						</div>
																					</p>

																					<div className="ml-5 pl-3 mb-2">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
																						>
																							C. Ronaldo
																						</p>
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs leading-normal  text-gray-900"
																						>
																							JUV
																							<span className="ml-4">FWD</span>
																						</p>
																					</div>
																				</div>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<p class="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
																					5.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					15.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					84
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					AVL (H)
																				</p>
																			</td>
																		</tr>
																	</tbody>
																</table>
																<table class="min-w-full leading-normal">
																	<thead>
																		<tr className="bg-[#347E25]">
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider">
																				Subs
																			</th>
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider">
																				₦
																			</th>
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider hidden lg:table-cell">
																				SB
																			</th>
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider hidden lg:table-cell">
																				TP
																			</th>
																			<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal text-gray-100 uppercase tracking-wider hidden lg:table-cell">
																				Fix
																			</th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<div className=" w-full flex">
																					<p
																						tabindex="0"
																						className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																					>
																						<svg
																							width="26"
																							height="26"
																							viewBox="0 0 26 26"
																							fill="none"
																							xmlns="http://www.w3.org/2000/svg"
																							className="align-middle mt-2"
																						>
																							<circle
																								cx="12"
																								cy="12"
																								r="10"
																								fill="#199300"
																							/>
																							<path
																								d="M11 7H13V9H11V7Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								d="M11 11H13V17H11V11Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								fill-rule="evenodd"
																								clip-rule="evenodd"
																								d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																						</svg>

																						<div className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
																							<svg
																								width="43"
																								height="40"
																								viewBox="0 0 43 40"
																								fill="none"
																								xmlns="http://www.w3.org/2000/svg"
																							>
																								<path
																									d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
																									fill="#276556"
																								/>
																								<path
																									d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
																									stroke="white"
																									stroke-width="0.5"
																								/>
																							</svg>
																						</div>
																					</p>

																					<div className="ml-5 pl-3 mb-2">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
																						>
																							C. Ronaldo
																						</p>
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs leading-normal  text-gray-900"
																						>
																							JUV
																							<span className="ml-4">FWD</span>
																						</p>
																					</div>
																				</div>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<p class="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
																					5.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					15.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					84
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					AVL (H)
																				</p>
																			</td>
																		</tr>
																		<tr>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<div className=" w-full flex">
																					<p
																						tabindex="0"
																						className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																					>
																						<svg
																							width="26"
																							height="26"
																							viewBox="0 0 26 26"
																							fill="none"
																							xmlns="http://www.w3.org/2000/svg"
																							className="align-middle mt-2"
																						>
																							<circle
																								cx="12"
																								cy="12"
																								r="10"
																								fill="#199300"
																							/>
																							<path
																								d="M11 7H13V9H11V7Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								d="M11 11H13V17H11V11Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								fill-rule="evenodd"
																								clip-rule="evenodd"
																								d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																						</svg>

																						<div className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
																							<svg
																								width="43"
																								height="40"
																								viewBox="0 0 43 40"
																								fill="none"
																								xmlns="http://www.w3.org/2000/svg"
																							>
																								<path
																									d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
																									fill="#276556"
																								/>
																								<path
																									d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
																									stroke="white"
																									stroke-width="0.5"
																								/>
																							</svg>
																						</div>
																					</p>

																					<div className="ml-5 pl-3 mb-2">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
																						>
																							C. Ronaldo
																						</p>
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs leading-normal  text-gray-900"
																						>
																							JUV
																							<span className="ml-4">FWD</span>
																						</p>
																					</div>
																				</div>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<p class="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
																					5.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					15.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					84
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					AVL (H)
																				</p>
																			</td>
																		</tr>
																		<tr>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<div className=" w-full flex">
																					<p
																						tabindex="0"
																						className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																					>
																						<svg
																							width="26"
																							height="26"
																							viewBox="0 0 26 26"
																							fill="none"
																							xmlns="http://www.w3.org/2000/svg"
																							className="align-middle mt-2"
																						>
																							<circle
																								cx="12"
																								cy="12"
																								r="10"
																								fill="#199300"
																							/>
																							<path
																								d="M11 7H13V9H11V7Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								d="M11 11H13V17H11V11Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								fill-rule="evenodd"
																								clip-rule="evenodd"
																								d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																						</svg>

																						<div className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
																							<svg
																								width="43"
																								height="40"
																								viewBox="0 0 43 40"
																								fill="none"
																								xmlns="http://www.w3.org/2000/svg"
																							>
																								<path
																									d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
																									fill="#276556"
																								/>
																								<path
																									d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
																									stroke="white"
																									stroke-width="0.5"
																								/>
																							</svg>
																						</div>
																					</p>

																					<div className="ml-5 pl-3 mb-2">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
																						>
																							C. Ronaldo
																						</p>
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs leading-normal  text-gray-900"
																						>
																							JUV
																							<span className="ml-4">FWD</span>
																						</p>
																					</div>
																				</div>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<p class="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
																					5.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					15.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					84
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					AVL (H)
																				</p>
																			</td>
																		</tr>
																		<tr>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<div className=" w-full flex">
																					<p
																						tabindex="0"
																						className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																					>
																						<svg
																							width="26"
																							height="26"
																							viewBox="0 0 26 26"
																							fill="none"
																							xmlns="http://www.w3.org/2000/svg"
																							className="align-middle mt-2"
																						>
																							<circle
																								cx="12"
																								cy="12"
																								r="10"
																								fill="#199300"
																							/>
																							<path
																								d="M11 7H13V9H11V7Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								d="M11 11H13V17H11V11Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																							<path
																								fill-rule="evenodd"
																								clip-rule="evenodd"
																								d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																								fill="white"
																								fill-opacity="0.54"
																							/>
																						</svg>

																						<div className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
																							<svg
																								width="43"
																								height="40"
																								viewBox="0 0 43 40"
																								fill="none"
																								xmlns="http://www.w3.org/2000/svg"
																							>
																								<path
																									d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
																									fill="#276556"
																								/>
																								<path
																									d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
																									stroke="white"
																									stroke-width="0.5"
																								/>
																							</svg>
																						</div>
																					</p>

																					<div className="ml-5 pl-3 mb-2">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
																						>
																							C. Ronaldo
																						</p>
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs leading-normal  text-gray-900"
																						>
																							JUV
																							<span className="ml-4">FWD</span>
																						</p>
																					</div>
																				</div>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																				<p class="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
																					5.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					15.4
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					84
																				</p>
																			</td>
																			<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
																				<p class="text-gray-900 whitespace-no-wrap text-center">
																					AVL (H)
																				</p>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="w-full mx-auto  py-5 flex-1 svelte-1l8159u">
						<button
							class="text-base shadow hover:scale-110 focus:outline-none flex mx-auto justify-center px-28 py-5 rounded font-bold cursor-pointer 
                                
										hover:bg-blue-500 
										bg-[#E2E2E2] text-gray-600
										duration-200 ease-in-out 
										transition"
						>
							<div class="font-sans text-sm font-normal px-8">
								Make Transfer
							</div>
						</button>
					</div>

					<hr class="my-5 rounded-lg border-b-2 border-[#dbdbdb] mx-auto " />

					<div className="  h-[43%] bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50  mt-10 mb-10  px-4 py-6 lg:px-2  ">
						<h1 class="font-bold text-3xl mx-auto text-center text-gray-900 mt-10  ">
							Fixtures
						</h1>
						<div className="flex flex-col  pt-5 space-y-4 max-w-3xl mx-auto">
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
										className="text-base  hover:scale-110 focus:outline-none flex justify-center px-5 py-3 rounded font-bold cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-[#5B3CBF]/50 text-gray-200 shadow-md
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
										className="text-base  hover:scale-110 focus:outline-none flex justify-center px-5 py-3 rounded font-bold cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-[#5B3CBF]/50 text-gray-200 shadow-md
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

						<div>
							<p className="text-xs text-gray-800 font-normal text-center  py-4 bg-stone-300 mx-auto tracking-wider">
								Sunday 21 February 2021
							</p>

							<div className="w-full leading-normal ">
								<div className="px-5 py-3 border-b border-gray-300  text-sm  flex justify-center mx-auto">
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
										<div>
											<p className="text-gray-900 whitespace-no-wrap text-right">
												Team 2
											</p>
										</div>
									</div>
								</div>
								<div className="px-5 py-3 border-b border-gray-300  text-sm  flex justify-center mx-auto">
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
										<div>
											<p className="text-gray-900 whitespace-no-wrap text-right">
												Team 2
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="pt-5 ">
							<p className="text-xs text-gray-800 font-normal text-center  py-4 bg-stone-300 mx-auto tracking-wider">
								Monday 22 February 2021
							</p>

							<div className="w-full leading-normal ">
								<div className="px-5 py-3 border-b border-gray-300  text-sm  flex justify-center mx-auto">
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
										<div>
											<p className="text-gray-900 whitespace-no-wrap text-right">
												Team 2
											</p>
										</div>
									</div>
								</div>
								<div className="px-5 py-3 border-b border-gray-300  text-sm  flex justify-center mx-auto">
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
										<div>
											<p className="text-gray-900 whitespace-no-wrap text-right">
												Team 2
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="pt-5 ">
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
										<div>
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
										<div>
											<p className="text-gray-900 whitespace-no-wrap text-right">
												Team 2
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container max-w-sm   shadow-indigo-500/50 md:w-3/5 ml-12 mt-10 mb-20    w-auto">
					<div className="px-1">
						<div className="p-5 w-full pb-10 ">
							<h1 className="font-semibold text-xl text-gray-700  ">
								Player Selection
							</h1>
							<h1 className="font-medium text-sm mb-10 text-gray-700  ">
								View
							</h1>

							<div className="w-full  flex-1 svelte-1l8159u">
								<label className="text-gray-700 font-medium text-sm mb-2 ">
									Sorted by
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

							<div className="w-full  flex-1 svelte-1l8159u">
								<label className="text-gray-700 font-medium text-sm mb-2 ">
									Search
								</label>
								<div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
									<select className="form-select w-full px-3 py-2   rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
										<option value=""></option>
										<option value="02">Goals</option>
										<option value="03">Female</option>
										<option value="04">Prefer not to state</option>
									</select>
								</div>
							</div>

							<div className="w-full  flex-1 svelte-1l8159u">
								<label className="text-gray-700 font-medium text-sm mb-2 ">
									Max cost{" "}
									<span className="block font-normal text-gray-500">
										Between 3.8 and 12.5
									</span>
								</label>
								<div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
									<select className="form-select w-full px-3 py-2   rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
										<option value="">12.5</option>
										<option value="02">Goals</option>
										<option value="03">Female</option>
										<option value="04">Prefer not to state</option>
									</select>
								</div>
							</div>
						</div>
					</div>

					<div class=" mx-auto">
						<div>
							<div class=" px-1 sm:px-6 py-2 overflow-x-auto">
								<div class="inline-block min-w-full   overflow-x-auto  w-full ">
									<h1 className="font-normal text-sm mb-1 text-center text-gray-700  ">
										563 players shown
									</h1>
									<table class="min-w-full leading-normal">
										<thead>
											<tr className="bg-[#A7030A]">
												<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-semibold italic text-gray-100 uppercase tracking-wider">
													Goal Keeper
												</th>
												<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal italic  text-gray-100/90 uppercase tracking-wider">
													**
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="px-5 py-3 border-b border-gray-200  text-sm align-middle">
													<div className=" w-full flex">
														<p
															tabindex="0"
															className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
														>
															<svg
																width="26"
																height="26"
																viewBox="0 0 26 26"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																className="align-middle mt-2"
															>
																<circle cx="12" cy="12" r="10" fill="#A7030A" />
																<path
																	d="M11 7H13V9H11V7Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	d="M11 11H13V17H11V11Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
															</svg>

															<div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
																<img
																	className="w-full h-full rounded-full"
																	src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
																	alt=""
																/>
															</div>
														</p>

														<div className="ml-2 pl-2 mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-xs leading-normal  text-gray-900"
															>
																JUV
																<span className="ml-4">FWD</span>
															</p>
														</div>
													</div>
												</td>
												<td class="px-5 py-1 border-b border-gray-200  text-sm align-middle">
													<p class="text-gray-900 whitespace-no-wrap  py-2 text-center">
														5.4
													</p>
												</td>
											</tr>
											<tr>
												<td class="px-5 py-3 border-b border-gray-200  text-sm align-middle">
													<div className=" w-full flex">
														<p
															tabindex="0"
															className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
														>
															<svg
																width="26"
																height="26"
																viewBox="0 0 26 26"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																className="align-middle mt-2"
															>
																<circle cx="12" cy="12" r="10" fill="#A7030A" />
																<path
																	d="M11 7H13V9H11V7Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	d="M11 11H13V17H11V11Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
															</svg>

															<div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
																<img
																	className="w-full h-full rounded-full"
																	src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
																	alt=""
																/>
															</div>
														</p>

														<div className="ml-2 pl-2 mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-xs leading-normal  text-gray-900"
															>
																JUV
																<span className="ml-4">FWD</span>
															</p>
														</div>
													</div>
												</td>
												<td class="px-5 py-1 border-b border-gray-200  text-sm align-middle">
													<p class="text-gray-900 whitespace-no-wrap  py-2 text-center">
														5.4
													</p>
												</td>
											</tr>
											<tr>
												<td class="px-5 py-3 border-b border-gray-200  text-sm align-middle">
													<div className=" w-full flex">
														<p
															tabindex="0"
															className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
														>
															<svg
																width="26"
																height="26"
																viewBox="0 0 26 26"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																className="align-middle mt-2"
															>
																<circle cx="12" cy="12" r="10" fill="#A7030A" />
																<path
																	d="M11 7H13V9H11V7Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	d="M11 11H13V17H11V11Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
															</svg>

															<div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
																<img
																	className="w-full h-full rounded-full"
																	src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
																	alt=""
																/>
															</div>
														</p>

														<div className="ml-2 pl-2 mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-xs leading-normal  text-gray-900"
															>
																JUV
																<span className="ml-4">FWD</span>
															</p>
														</div>
													</div>
												</td>
												<td class="px-5 py-1 border-b border-gray-200  text-sm align-middle">
													<p class="text-gray-900 whitespace-no-wrap  py-2 text-center">
														5.4
													</p>
												</td>
											</tr>
											<tr>
												<td class="px-5 py-3 border-b border-gray-200  text-sm align-middle">
													<div className=" w-full flex">
														<p
															tabindex="0"
															className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
														>
															<svg
																width="26"
																height="26"
																viewBox="0 0 26 26"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																className="align-middle mt-2"
															>
																<circle cx="12" cy="12" r="10" fill="#A7030A" />
																<path
																	d="M11 7H13V9H11V7Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	d="M11 11H13V17H11V11Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
															</svg>

															<div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
																<img
																	className="w-full h-full rounded-full"
																	src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
																	alt=""
																/>
															</div>
														</p>

														<div className="ml-2 pl-2 mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-xs leading-normal  text-gray-900"
															>
																JUV
																<span className="ml-4">FWD</span>
															</p>
														</div>
													</div>
												</td>
												<td class="px-5 py-1 border-b border-gray-200  text-sm align-middle">
													<p class="text-gray-900 whitespace-no-wrap  py-2 text-center">
														5.4
													</p>
												</td>
											</tr>
										</tbody>
									</table>
									<table class="min-w-full leading-normal">
										<thead>
											<tr className="bg-[#347E25]">
												<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-semibold italic text-gray-100 uppercase tracking-wider">
													Defenders
												</th>
												<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal italic  text-gray-100/90 uppercase tracking-wider">
													**
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="px-5 py-3 border-b border-gray-200  text-sm align-middle">
													<div className=" w-full flex">
														<p
															tabindex="0"
															className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
														>
															<svg
																width="26"
																height="26"
																viewBox="0 0 26 26"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																className="align-middle mt-2"
															>
																<circle cx="12" cy="12" r="10" fill="#A7030A" />
																<path
																	d="M11 7H13V9H11V7Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	d="M11 11H13V17H11V11Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
															</svg>

															<div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
																<img
																	className="w-full h-full rounded-full"
																	src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
																	alt=""
																/>
															</div>
														</p>

														<div className="ml-2 pl-2 mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-xs leading-normal  text-gray-900"
															>
																JUV
																<span className="ml-4">FWD</span>
															</p>
														</div>
													</div>
												</td>
												<td class="px-5 py-1 border-b border-gray-200  text-sm align-middle">
													<p class="text-gray-900 whitespace-no-wrap  py-2 text-center">
														5.4
													</p>
												</td>
											</tr>
											<tr>
												<td class="px-5 py-3 border-b border-gray-200  text-sm align-middle">
													<div className=" w-full flex">
														<p
															tabindex="0"
															className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
														>
															<svg
																width="26"
																height="26"
																viewBox="0 0 26 26"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																className="align-middle mt-2"
															>
																<circle cx="12" cy="12" r="10" fill="#A7030A" />
																<path
																	d="M11 7H13V9H11V7Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	d="M11 11H13V17H11V11Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
															</svg>

															<div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
																<img
																	className="w-full h-full rounded-full"
																	src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
																	alt=""
																/>
															</div>
														</p>

														<div className="ml-2 pl-2 mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-xs leading-normal  text-gray-900"
															>
																JUV
																<span className="ml-4">FWD</span>
															</p>
														</div>
													</div>
												</td>
												<td class="px-5 py-1 border-b border-gray-200  text-sm align-middle">
													<p class="text-gray-900 whitespace-no-wrap  py-2 text-center">
														5.4
													</p>
												</td>
											</tr>
											<tr>
												<td class="px-5 py-3 border-b border-gray-200  text-sm align-middle">
													<div className=" w-full flex">
														<p
															tabindex="0"
															className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
														>
															<svg
																width="26"
																height="26"
																viewBox="0 0 26 26"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																className="align-middle mt-2"
															>
																<circle cx="12" cy="12" r="10" fill="#A7030A" />
																<path
																	d="M11 7H13V9H11V7Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	d="M11 11H13V17H11V11Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
															</svg>

															<div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
																<img
																	className="w-full h-full rounded-full"
																	src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
																	alt=""
																/>
															</div>
														</p>

														<div className="ml-2 pl-2 mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-xs leading-normal  text-gray-900"
															>
																JUV
																<span className="ml-4">FWD</span>
															</p>
														</div>
													</div>
												</td>
												<td class="px-5 py-1 border-b border-gray-200  text-sm align-middle">
													<p class="text-gray-900 whitespace-no-wrap  py-2 text-center">
														5.4
													</p>
												</td>
											</tr>
											<tr>
												<td class="px-5 py-3 border-b border-gray-200  text-sm align-middle">
													<div className=" w-full flex">
														<p
															tabindex="0"
															className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
														>
															<svg
																width="26"
																height="26"
																viewBox="0 0 26 26"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																className="align-middle mt-2"
															>
																<circle cx="12" cy="12" r="10" fill="#A7030A" />
																<path
																	d="M11 7H13V9H11V7Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	d="M11 11H13V17H11V11Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
															</svg>

															<div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
																<img
																	className="w-full h-full rounded-full"
																	src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
																	alt=""
																/>
															</div>
														</p>

														<div className="ml-2 pl-2 mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-xs leading-normal  text-gray-900"
															>
																JUV
																<span className="ml-4">FWD</span>
															</p>
														</div>
													</div>
												</td>
												<td class="px-5 py-1 border-b border-gray-200  text-sm align-middle">
													<p class="text-gray-900 whitespace-no-wrap  py-2 text-center">
														5.4
													</p>
												</td>
											</tr>
										</tbody>
									</table>
									<table class="min-w-full leading-normal">
										<thead>
											<tr className="bg-[#513C9D]">
												<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-semibold italic text-gray-100 uppercase tracking-wider">
													Midfelders
												</th>
												<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal italic  text-gray-100/90  uppercase tracking-wider">
													**
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="px-5 py-3 border-b border-gray-200  text-sm align-middle">
													<div className=" w-full flex">
														<p
															tabindex="0"
															className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
														>
															<svg
																width="26"
																height="26"
																viewBox="0 0 26 26"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																className="align-middle mt-2"
															>
																<circle cx="12" cy="12" r="10" fill="#A7030A" />
																<path
																	d="M11 7H13V9H11V7Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	d="M11 11H13V17H11V11Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
															</svg>

															<div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
																<img
																	className="w-full h-full rounded-full"
																	src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
																	alt=""
																/>
															</div>
														</p>

														<div className="ml-2 pl-2 mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-xs leading-normal  text-gray-900"
															>
																JUV
																<span className="ml-4">FWD</span>
															</p>
														</div>
													</div>
												</td>
												<td class="px-5 py-1 border-b border-gray-200  text-sm align-middle">
													<p class="text-gray-900 whitespace-no-wrap  py-2 text-center">
														5.4
													</p>
												</td>
											</tr>
											<tr>
												<td class="px-5 py-3 border-b border-gray-200  text-sm align-middle">
													<div className=" w-full flex">
														<p
															tabindex="0"
															className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
														>
															<svg
																width="26"
																height="26"
																viewBox="0 0 26 26"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																className="align-middle mt-2"
															>
																<circle cx="12" cy="12" r="10" fill="#A7030A" />
																<path
																	d="M11 7H13V9H11V7Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	d="M11 11H13V17H11V11Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
															</svg>

															<div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
																<img
																	className="w-full h-full rounded-full"
																	src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
																	alt=""
																/>
															</div>
														</p>

														<div className="ml-2 pl-2 mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-xs leading-normal  text-gray-900"
															>
																JUV
																<span className="ml-4">FWD</span>
															</p>
														</div>
													</div>
												</td>
												<td class="px-5 py-1 border-b border-gray-200  text-sm align-middle">
													<p class="text-gray-900 whitespace-no-wrap  py-2 text-center">
														5.4
													</p>
												</td>
											</tr>
											<tr>
												<td class="px-5 py-3 border-b border-gray-200  text-sm align-middle">
													<div className=" w-full flex">
														<p
															tabindex="0"
															className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
														>
															<svg
																width="26"
																height="26"
																viewBox="0 0 26 26"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																className="align-middle mt-2"
															>
																<circle cx="12" cy="12" r="10" fill="#A7030A" />
																<path
																	d="M11 7H13V9H11V7Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	d="M11 11H13V17H11V11Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
															</svg>

															<div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
																<img
																	className="w-full h-full rounded-full"
																	src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
																	alt=""
																/>
															</div>
														</p>

														<div className="ml-2 pl-2 mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-xs leading-normal  text-gray-900"
															>
																JUV
																<span className="ml-4">FWD</span>
															</p>
														</div>
													</div>
												</td>
												<td class="px-5 py-1 border-b border-gray-200  text-sm align-middle">
													<p class="text-gray-900 whitespace-no-wrap  py-2 text-center">
														5.4
													</p>
												</td>
											</tr>
											<tr>
												<td class="px-5 py-3 border-b border-gray-200  text-sm align-middle">
													<div className=" w-full flex">
														<p
															tabindex="0"
															className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
														>
															<svg
																width="26"
																height="26"
																viewBox="0 0 26 26"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																className="align-middle mt-2"
															>
																<circle cx="12" cy="12" r="10" fill="#A7030A" />
																<path
																	d="M11 7H13V9H11V7Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	d="M11 11H13V17H11V11Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
															</svg>

															<div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
																<img
																	className="w-full h-full rounded-full"
																	src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
																	alt=""
																/>
															</div>
														</p>

														<div className="ml-2 pl-2 mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-xs leading-normal  text-gray-900"
															>
																JUV
																<span className="ml-4">FWD</span>
															</p>
														</div>
													</div>
												</td>
												<td class="px-5 py-1 border-b border-gray-200  text-sm align-middle">
													<p class="text-gray-900 whitespace-no-wrap  py-2 text-center">
														5.4
													</p>
												</td>
											</tr>
										</tbody>
									</table>

									<table class="min-w-full leading-normal">
										<thead>
											<tr className="bg-[#A7030A]">
												<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-semibold italic text-gray-100 uppercase tracking-wider">
													Forwarders
												</th>
												<th class="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal italic  text-gray-100/90 uppercase tracking-wider">
													**
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="px-5 py-3 border-b border-gray-200  text-sm align-middle">
													<div className=" w-full flex">
														<p
															tabindex="0"
															className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
														>
															<svg
																width="26"
																height="26"
																viewBox="0 0 26 26"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																className="align-middle mt-2"
															>
																<circle cx="12" cy="12" r="10" fill="#A7030A" />
																<path
																	d="M11 7H13V9H11V7Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	d="M11 11H13V17H11V11Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
															</svg>

															<div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
																<img
																	className="w-full h-full rounded-full"
																	src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
																	alt=""
																/>
															</div>
														</p>

														<div className="ml-2 pl-2 mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-xs leading-normal  text-gray-900"
															>
																JUV
																<span className="ml-4">FWD</span>
															</p>
														</div>
													</div>
												</td>
												<td class="px-5 py-1 border-b border-gray-200  text-sm align-middle">
													<p class="text-gray-900 whitespace-no-wrap  py-2 text-center">
														5.4
													</p>
												</td>
											</tr>
											<tr>
												<td class="px-5 py-3 border-b border-gray-200  text-sm align-middle">
													<div className=" w-full flex">
														<p
															tabindex="0"
															className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
														>
															<svg
																width="26"
																height="26"
																viewBox="0 0 26 26"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																className="align-middle mt-2"
															>
																<circle cx="12" cy="12" r="10" fill="#A7030A" />
																<path
																	d="M11 7H13V9H11V7Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	d="M11 11H13V17H11V11Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
															</svg>

															<div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
																<img
																	className="w-full h-full rounded-full"
																	src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
																	alt=""
																/>
															</div>
														</p>

														<div className="ml-2 pl-2 mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-xs leading-normal  text-gray-900"
															>
																JUV
																<span className="ml-4">FWD</span>
															</p>
														</div>
													</div>
												</td>
												<td class="px-5 py-1 border-b border-gray-200  text-sm align-middle">
													<p class="text-gray-900 whitespace-no-wrap  py-2 text-center">
														5.4
													</p>
												</td>
											</tr>
											<tr>
												<td class="px-5 py-3 border-b border-gray-200  text-sm align-middle">
													<div className=" w-full flex">
														<p
															tabindex="0"
															className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
														>
															<svg
																width="26"
																height="26"
																viewBox="0 0 26 26"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																className="align-middle mt-2"
															>
																<circle cx="12" cy="12" r="10" fill="#A7030A" />
																<path
																	d="M11 7H13V9H11V7Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	d="M11 11H13V17H11V11Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
															</svg>

															<div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
																<img
																	className="w-full h-full rounded-full"
																	src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
																	alt=""
																/>
															</div>
														</p>

														<div className="ml-2 pl-2 mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-xs leading-normal  text-gray-900"
															>
																JUV
																<span className="ml-4">FWD</span>
															</p>
														</div>
													</div>
												</td>
												<td class="px-5 py-1 border-b border-gray-200  text-sm align-middle">
													<p class="text-gray-900 whitespace-no-wrap  py-2 text-center">
														5.4
													</p>
												</td>
											</tr>
											<tr>
												<td class="px-5 py-3 border-b border-gray-200  text-sm align-middle">
													<div className=" w-full flex">
														<p
															tabindex="0"
															className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
														>
															<svg
																width="26"
																height="26"
																viewBox="0 0 26 26"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																className="align-middle mt-2"
															>
																<circle cx="12" cy="12" r="10" fill="#A7030A" />
																<path
																	d="M11 7H13V9H11V7Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	d="M11 11H13V17H11V11Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
																	fill="white"
																	fill-opacity="0.54"
																/>
															</svg>

															<div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
																<img
																	className="w-full h-full rounded-full"
																	src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
																	alt=""
																/>
															</div>
														</p>

														<div className="ml-2 pl-2 mb-2">
															<p
																tabindex="0"
																className="focus:outline-none text-sm font-normal leading-5 text-gray-900"
															>
																C. Ronaldo
															</p>
															<p
																tabindex="0"
																className="focus:outline-none text-xs leading-normal  text-gray-900"
															>
																JUV
																<span className="ml-4">FWD</span>
															</p>
														</div>
													</div>
												</td>
												<td class="px-5 py-1 border-b border-gray-200  text-sm align-middle">
													<p class="text-gray-900 whitespace-no-wrap  py-2 text-center">
														5.4
													</p>
												</td>
											</tr>
										</tbody>
									</table>
									<div className="flex w-full mx-auto md:flex-row py-2 justify-between">
										<div className="flex">
											<div className="w-full mx-2  svelte-1l8159u pt-2">
												<button
													className="text-base  hover:scale-110 focus:outline-none flex text-center px-1 py-1 rounded-3xl font-bold cursor-pointer 
												
												hover:bg-blue-500 
												bg-[#C4C4C4] text-gray-500 shadow-xs
												duration-200 ease-in-out 
												transition"
												>
													<span class="material-icons">
														keyboard_double_arrow_left
													</span>
												</button>
											</div>
											<div className="w-full mx-2  svelte-1l8159u">
												<button
													className="text-base  hover:scale-110 focus:outline-none flex text-center px-3 py-3 rounded-3xl font-bold cursor-pointer 
												
												hover:bg-blue-500 
												bg-[#C4C4C4] text-gray-500 shadow-xs
												duration-200 ease-in-out 
												transition"
												>
													<span class="material-icons">arrow_back_ios</span>
												</button>
											</div>
										</div>

										<h1 className="font-normal text-sm text-center text-gray-700  pt-4 ">
											1 of 19
										</h1>

										<div className="flex">
											<div className="w-full mx-2  svelte-1l8159u">
												<button
													className="text-base  hover:scale-110 focus:outline-none flex text-center px-3 py-3 rounded-3xl font-bold cursor-pointer 
												
												hover:bg-blue-500 
												bg-[#FFF] text-[#5B3CBF]/50 shadow-md
												duration-200 ease-in-out 
												transition"
												>
													<span class="material-icons">arrow_forward_ios</span>
												</button>
											</div>
											<div className="w-full mx-2  svelte-1l8159u pt-2">
												<button
													className="text-base  hover:scale-110 focus:outline-none flex text-center px-1 py-1 rounded-3xl font-bold cursor-pointer 
												
												hover:bg-blue-500 
												bg-[#FFF] text-[#5B3CBF]/50 shadow-md
												duration-200 ease-in-out 
												transition"
												>
													<span class="material-icons">
														keyboard_double_arrow_right
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
			</div>

			<div className="container mx-auto mb-5">
				<hr class="mt-10 max-w-6xl rounded-lg border-b-2 border-violet-500 mx-auto " />

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

export default Transfer;
