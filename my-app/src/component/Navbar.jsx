import React from "react"

const Navbar = () => {
	return (
		<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
			<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
				<header class="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
					<a
						href="/"
						class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl transition-transform transform-gpu hover:scale-110"
						aria-label="logo"
					>
						<div
							width="95"
							height="94"
							viewBox="0 0 95 94"
							class="h-auto w-6 text-indigo-500 "
							fill="currentColor"
						>
							<img
								src="https://www.svgrepo.com/show/427547/forest-green-plant.svg"
								alt=""
							/>
						</div>
						HealtyWorld
					</a>

					<nav class="hidden gap-12 lg:flex">
						<a
							href="#"
							class="text-lg font-semibold text-indigo-500 transition-transform transform-gpu hover:scale-110"
						>
							Home
						</a>
						<a
							href="#"
							class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 transition-transform transform-gpu hover:scale-110"
						>
							About Us
						</a>
						<a
							href="#"
							class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 transition-transform transform-gpu hover:scale-110"
						>
							Project
						</a>
						<a
							href="#"
							class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 transition-transform transform-gpu hover:scale-110"
						>
							Companies
						</a>
					</nav>

					<a
						href="#"
						class="px-8 py-4 text-xs uppercase tracking-wider font-medium text-black bg-white rounded-full shadow-md transition-transform duration-300 cursor-pointer focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-200 focus:ring-opacity-50 hover:bg-teal-500 hover:text-white transform hover:-translate-y-1 active:translate-y-0"
					>
						Donate Now
					</a>

					<button
						type="button"
						class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							/>
						</svg>
						Menu
					</button>
				</header>
			</div>
		</div>
	)
}

export default Navbar
