import React from "react";
import Header from "../components/Header";
import MainBreadCrumb from "../components/MainBreadCrumb";
import MainFooter from "../components/MainFooter";

function PickTeamHome() {
	const [openTab, setOpenTab] = React.useState(1);
	return (
		<div className="bg-[#E5ECFA]/100 h-3/4">
			<Header />
			<MainBreadCrumb />

			<div className="container">
				<div className="flex">
					<div className="container max-w-4xl mt-10  ">
						<div>
							<h1 class="font-medium text-xl ml-16 text-gray-700 mb-5  ">
								Pick Team - KingsMen City
							</h1>
							<div className="flex  md:flex-row justify-center ml-16 rounded shadow-xl shadow-violet-800 bg-[#6E4BEC]">
								<h1 className="font-bold text-xl text-center text-gray-100 w-5/6 py-3 px-2 ">
									Gameweek 27:{" "}
									<span className="pl-3 font-normal">Sat 6 Mar 12:00</span>
								</h1>
							</div>

							<div className="flex  md:flex-row justify-center ml-16 mt-6 bg-[#E1CEFF]">
								<h1 className="font-medium text-sm text-center mx-auto text-gray-700 w-5/6 py-2 px-2">
									To change your captain use the menu which appears when
									clicking on the players's shirt
								</h1>
							</div>
						</div>

						<div
							className="  h-[30%]  ml-16 mt-5   px-2 py-3 lg:px-1  "
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
																		<circle
																			cx="10"
																			cy="10"
																			r="10"
																			fill="white"
																		/>
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
																		<circle
																			cx="10"
																			cy="10"
																			r="10"
																			fill="white"
																		/>
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
																		<circle
																			cx="10"
																			cy="10"
																			r="10"
																			fill="white"
																		/>
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
																		<circle
																			cx="10"
																			cy="10"
																			r="10"
																			fill="white"
																		/>
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
																		<circle
																			cx="10"
																			cy="10"
																			r="10"
																			fill="white"
																		/>
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
																		<circle
																			cx="10"
																			cy="10"
																			r="10"
																			fill="white"
																		/>
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
																		<circle
																			cx="10"
																			cy="10"
																			r="10"
																			fill="white"
																		/>
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
																		<circle
																			cx="10"
																			cy="10"
																			r="10"
																			fill="white"
																		/>
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
																		<circle
																			cx="10"
																			cy="10"
																			r="10"
																			fill="white"
																		/>
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
																		<circle
																			cx="10"
																			cy="10"
																			r="10"
																			fill="white"
																		/>
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
																		<circle
																			cx="10"
																			cy="10"
																			r="10"
																			fill="white"
																		/>
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
															<div class="-mx-4 sm:-mx-8 px-1 sm:px-8 py-4 overflow-x-auto">
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
																			<tr className="">
																				<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																					<div className=" w-full flex">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																						>
																							<span className=" align-middle  material-icons text-2xl text-red-500 ">
																								info_outline
																							</span>

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
																								<span className="ml-4">
																									FWD
																								</span>
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
																			<tr className="">
																				<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																					<div className=" w-full flex">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																						>
																							<span className=" align-middle  material-icons text-2xl text-red-500 ">
																								info_outline
																							</span>

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
																								<span className="ml-4">
																									FWD
																								</span>
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
																			<tr className="">
																				<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																					<div className=" w-full flex">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																						>
																							<span className=" align-middle  material-icons text-2xl text-[#347E25] ">
																								info_outline
																							</span>

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
																								<span className="ml-4">
																									FWD
																								</span>
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
																			<tr className="">
																				<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																					<div className=" w-full flex">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																						>
																							<span className=" align-middle  material-icons text-2xl text-[#347E25] ">
																								info_outline
																							</span>

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
																								<span className="ml-4">
																									FWD
																								</span>
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
																			<tr className="">
																				<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																					<div className=" w-full flex">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																						>
																							<span className=" align-middle  material-icons text-2xl text-[#347E25] ">
																								info_outline
																							</span>

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
																								<span className="ml-4">
																									FWD
																								</span>
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
																			<tr className="">
																				<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																					<div className=" w-full flex">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																						>
																							<span className=" align-middle  material-icons text-2xl text-[#347E25] ">
																								info_outline
																							</span>

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
																								<span className="ml-4">
																									FWD
																								</span>
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
																			<tr className="">
																				<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																					<div className=" w-full flex">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																						>
																							<span className=" align-middle  material-icons text-2xl text-[#513C9D] ">
																								info_outline
																							</span>

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
																								<span className="ml-4">
																									FWD
																								</span>
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
																			<tr className="">
																				<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																					<div className=" w-full flex">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																						>
																							<span className=" align-middle  material-icons text-2xl text-[#513C9D] ">
																								info_outline
																							</span>

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
																								<span className="ml-4">
																									FWD
																								</span>
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
																			<tr className="">
																				<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																					<div className=" w-full flex">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																						>
																							<span className=" align-middle  material-icons text-2xl text-[#513C9D] ">
																								info_outline
																							</span>

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
																								<span className="ml-4">
																									FWD
																								</span>
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
																			<tr className="">
																				<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																					<div className=" w-full flex">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																						>
																							<span className=" align-middle  material-icons text-2xl text-[#513C9D] ">
																								info_outline
																							</span>

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
																								<span className="ml-4">
																									FWD
																								</span>
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
																			<tr className="">
																				<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																					<div className=" w-full flex">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																						>
																							<span className=" align-middle  material-icons text-2xl text-red-500 ">
																								info_outline
																							</span>

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
																								<span className="ml-4">
																									FWD
																								</span>
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
																			<tr className="">
																				<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																					<div className=" w-full flex">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																						>
																							<span className=" align-middle  material-icons text-2xl text-red-500 ">
																								info_outline
																							</span>

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
																								<span className="ml-4">
																									FWD
																								</span>
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
																			<tr className="">
																				<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																					<div className=" w-full flex">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																						>
																							<span className=" align-middle  material-icons text-2xl text-red-500 ">
																								info_outline
																							</span>

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
																								<span className="ml-4">
																									FWD
																								</span>
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
																			<tr className="">
																				<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																					<div className=" w-full flex">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																						>
																							<span className=" align-middle  material-icons text-2xl text-red-500 ">
																								info_outline
																							</span>

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
																								<span className="ml-4">
																									FWD
																								</span>
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
																			<tr className="">
																				<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																					<div className=" w-full flex">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																						>
																							<span className=" align-middle  material-icons text-2xl text-[#347E25] ">
																								info_outline
																							</span>

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
																								<span className="ml-4">
																									FWD
																								</span>
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
																			<tr className="">
																				<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																					<div className=" w-full flex">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																						>
																							<span className=" align-middle  material-icons text-2xl text-[#347E25] ">
																								info_outline
																							</span>

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
																								<span className="ml-4">
																									FWD
																								</span>
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
																			<tr className="">
																				<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																					<div className=" w-full flex">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																						>
																							<span className=" align-middle  material-icons text-2xl text-[#347E25] ">
																								info_outline
																							</span>

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
																								<span className="ml-4">
																									FWD
																								</span>
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
																			<tr className="">
																				<td class="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
																					<div className=" w-full flex">
																						<p
																							tabindex="0"
																							className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
																						>
																							<span className=" align-middle  material-icons text-2xl text-[#347E25] ">
																								info_outline
																							</span>

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
																								<span className="ml-4">
																									FWD
																								</span>
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

						<div className="flex mt-12 px-20 py-10 ml-16 w-[93%] bg-gray-300">
							<div class="p-3 -mt-12 rounded   mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
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
								<p className="pt-5">GK</p>
							</div>

							<div class="p-3  -mt-12 rounded  mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
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
								<p className="pt-5">1</p>
							</div>

							<div class="p-3 -mt-12  rounded   mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
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
								<p className="pt-5">2</p>
							</div>

							<div class="p-3  -mt-12 rounded  mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
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
								<p className="pt-5">3</p>
							</div>
						</div>

						<div class="flex flex-col md:flex-row py-10 ml-10">
							<div class="w-full mx-2 flex-1 svelte-1l8159u">
								<h1 className="text-center text-md pb-4">Bench Boast</h1>
								<button
									class="text-base shadow-xl shadow-indigo-500/50 hover:scale-110 focus:outline-none flex justify-center px-20 py-4 rounded font-bold cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-[#378852] text-gray-200
                                 duration-200 ease-in-out 
                                 transition"
								>
									<div class="font-sans text-sm font-semibold px-10">PLAY</div>
								</button>
							</div>

							<div class="w-full mx-2 flex-1 svelte-1l8159u">
								<h1 className="text-center text-md pb-4">Triple Captain</h1>
								<button
									class="text-base shadow-xl shadow-indigo-500/50 hover:scale-110 focus:outline-none flex justify-center px-20 py-4 rounded font-bold cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-[#378852] text-gray-200
                                 duration-200 ease-in-out 
                                 transition"
								>
									<div class="font-sans text-sm font-semibold px-10">PLAY</div>
								</button>
							</div>
							<div class="w-full mx-2 flex-1 svelte-1l8159u">
								<h1 className="text-center text-md pb-4">Free Hit</h1>
								<button
									class="text-base shadow-xl shadow-indigo-500/50 hover:scale-110 focus:outline-none flex justify-center px-20 py-4 rounded font-bold cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-[#378852] text-gray-200
                                 duration-200 ease-in-out 
                                 transition"
								>
									<div class="font-sans text-sm font-semibold px-10">PLAY</div>
								</button>
							</div>
						</div>

						<div class="w-full mx-auto  py-5 flex-1 svelte-1l8159u">
							<button
								class="text-base shadow hover:scale-110 focus:outline-none flex mx-auto justify-center px-28 py-4 rounded font-bold cursor-pointer 
                                
										hover:bg-blue-500 
										bg-[#E2E2E2] text-gray-700
										duration-200 ease-in-out 
										transition"
							>
								<div class="font-sans text-sm font-normal px-10">
									Save Your Team
								</div>
							</button>
						</div>

                        <hr class="mt-10 ml-14 max-w-4xl rounded-lg border-b-2 border-[#dbdbdb] mx-auto " />

						<div className="  h-[43%] bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 ml-16 mt-10 mb-20  px-4 py-6 lg:px-2  ">
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

							<div className=" ">
								<p className="text-xs text-gray-800 font-normal text-center  py-4 bg-stone-300 mx-auto tracking-wider">
									Sunday 21 February 2021
								</p>

								<div className="w-full leading-normal ">
									<div className="px-5 py-3 border-b border-gray-300  text-sm  flex justify-center mx-auto">
										<div className="flex items-center">
											<div className="mr-3">
												<p className="text-gray-900 whitespace-no-wrap">
													Team 1
												</p>
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
									<div className="px-5 py-3 border-b border-gray-300  text-sm  flex justify-center mx-auto">
										<div className="flex items-center">
											<div className="mr-3">
												<p className="text-gray-900 whitespace-no-wrap">
													Team 1
												</p>
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

							<div className="pt-5 ">
								<p className="text-xs text-gray-800 font-normal text-center  py-4 bg-stone-300 mx-auto tracking-wider">
									Monday 22 February 2021
								</p>

								<div className="w-full leading-normal ">
									<div className="px-5 py-3 border-b border-gray-300  text-sm  flex justify-center mx-auto">
										<div className="flex items-center">
											<div className="mr-3">
												<p className="text-gray-900 whitespace-no-wrap">
													Team 1
												</p>
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
									<div className="px-5 py-3 border-b border-gray-300  text-sm  flex justify-center mx-auto">
										<div className="flex items-center">
											<div className="mr-3">
												<p className="text-gray-900 whitespace-no-wrap">
													Team 1
												</p>
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

							<div className="pt-5 ">
								<p className="text-xs text-gray-800 font-normal text-center  py-4 bg-stone-300 mx-auto tracking-wider">
									Sunday 27 February 2021
								</p>

								<div className="w-full leading-normal ">
									<div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
										<div className="flex items-center">
											<div className="mr-3">
												<p className="text-gray-900 whitespace-no-wrap">
													Team 1
												</p>
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
												<p className="text-gray-900 whitespace-no-wrap">
													Team 1
												</p>
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
					</div>

					<div class="container max-w-sm bg-violet-700  border-inherit rounded-xl shadow-lg shadow-indigo-500/50 md:w-3/5  mt-10 mb-20  px-4 py-6 lg:px-5 ml-5 -mr-16 ">
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
												>
													<span class=" align-middle  material-icons text-5xl text-green-500 ">
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

export default PickTeamHome;
