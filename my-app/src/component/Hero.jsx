import { React } from "react"

const Hero = () => {
	return (
		<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
			<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
				<section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
					<div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
						<p class="mb-4 font-semibold text-indigo-900 md:mb-6 md:text-lg xl:text-xl font-lucida">
							Nature Matter Most
						</p>

						<h1 class="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl font-lucida ">
							Better Nature
						</h1>

						<p class="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
							A healthy soil is strong, fertile, and full of life.
							We show you that everyone can help improve our
							soils. Higher quality of soil increases yields and
							protects the climate and environment. Whether you're
							in a small garden or on a large farm, you can
							increase humus content in your soil with
							betterSoil's four principles: soil treatment,
							compost, biochar, and agroforestry.
						</p>

						<div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
							<a
								href="#"
								class="px-8 py-4 text-xs uppercase tracking-wider font-medium text-black bg-white rounded-full shadow-md transition-transform duration-300 cursor-pointer focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-200 focus:ring-opacity-50 hover:bg-teal-500 hover:text-white transform hover:-translate-y-1 active:translate-y-0"
							>
								About Us
							</a>
						</div>
					</div>

					<div class="group h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-6/12 transition-transform transform-gpu hover:scale-110">
						<img
							src="https://images.unsplash.com/photo-1523810192022-5a0fb9aa7ff8?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							loading="lazy"
							alt="Photo by Fakurian Design"
							class="h-full w-full object-cover object-center group-hover:scale-100"
						/>
						Copy
					</div>
				</section>
				<div class="bg-white py-6 sm:py-8 lg:py-12">
					<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
						<div class="mb-10 md:mb-16">
							<h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl font-lucida">
								Embracing a Greener Future: The Essence of
								Environmentalism
							</h2>

							<p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
								Individual actions, no matter how small,
								collectively make a significant impact. Planting
								a tree, using reusable products, or supporting
								local eco-friendly businesses are simple yet
								effective ways to contribute to the
								environmental cause.
							</p>
						</div>

						<div class="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
							<div>
								<a
									href="#"
									class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
								>
									<img
										src="https://plus.unsplash.com/premium_photo-1675620963970-41055a7d6cfc?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										loading="lazy"
										alt="Photo by Austin Wade"
										class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
									/>
								</a>

								<div class="flex items-start justify-between gap-2 px-2">
									<div class="flex flex-col">
										<a
											href="#"
											class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
										>
											Go Green, Live Clean.
										</a>
										<span class="text-gray-500">
											Reduce, Reuse, Recycle: The Earth's
											Lifesaving Cycle
										</span>
									</div>
								</div>
							</div>

							<div>
								<a
									href="#"
									class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
								>
									<img
										src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										loading="lazy"
										alt="Photo by Nick Karvounis"
										class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
									/>
								</a>

								<div class="flex items-start justify-between gap-2 px-2">
									<div class="flex flex-col">
										<a
											href="#"
											class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
										>
											Protect Our Species, Preserve Our
											Planet.
										</a>
										<span class="text-gray-500">
											Eco-Friendly Living for a
											Sustainable Tomorrow.
										</span>
									</div>
								</div>
							</div>

							<div>
								<a
									href="#"
									class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
								>
									<img
										src="https://plus.unsplash.com/premium_photo-1661368421663-13b2d8115241?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										loading="lazy"
										alt="Photo by Austin Wade"
										class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
									/>
								</a>

								<div class="flex items-start justify-between gap-2 px-2">
									<div class="flex flex-col">
										<a
											href="#"
											class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
										>
											Be a Part of the Solution
										</a>
										<span class="text-gray-500">
											, Not the Pollution.
										</span>
									</div>
								</div>
							</div>

							<div>
								<a
									href="#"
									class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
								>
									<img
										src="https://plus.unsplash.com/premium_photo-1681140560806-928e8b9a9a20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										loading="lazy"
										alt="Photo by Vladimir Fedotov"
										class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
									/>
								</a>

								<div class="flex items-start justify-between gap-2 px-2">
									<div class="flex flex-col">
										<a
											href="#"
											class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
										>
											"Green Choices Today,
										</a>
										<span class="text-gray-500">
											Greener Earth Tomorrow.
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="bg-white py-6 sm:py-8 lg:py-12">
					<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
						<div class="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
							<div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
								<h2 class="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl font-lucida">
									Think Green, Act Green, Live Green.
								</h2>

								<p class="mb-8 max-w-md text-gray-400">
									Sustainability: Our Responsibility, Our
									Future."
								</p>

								<div class="mt-auto">
									<a
										href="#"
										class="px-8 py-4 text-xs uppercase tracking-wider font-medium text-black bg-white rounded-full shadow-md transition-transform duration-300 cursor-pointer focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-200 focus:ring-opacity-50 hover:bg-teal-500 hover:text-white transform hover:-translate-y-1 active:translate-y-0"
									>
										Save Now
									</a>
								</div>
							</div>

							<div class="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
								<img
									src="https://plus.unsplash.com/premium_photo-1664300309954-018fc8b245d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									loading="lazy"
									alt="Photo by Dom Hill"
									class="h-full w-full object-cover object-center"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
