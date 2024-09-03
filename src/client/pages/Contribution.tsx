// import { Outlet } from "react-router-dom"
import { NavLink, Outlet } from "react-router-dom";

export const Contribution = () => {
	return (
		<main className="flex justify-center flex-col">
			<TabBar />
			<Outlet />
		</main>
	);
};

export const TabBar = () => {
	return (
		<div className="flex justify-center items-center fixed top-0 left-0 right-0 h-16 bg-PRIMARY">
			<div className="bg-darkGray h-11 px-5 flex items-center gap-3 rounded-full shadow-md border border-[#334155] ">
				<NavLink
					to="./problem"
					className={({ isActive }) =>
						`px-4 py-2 text-sm font-dmMono rounded-full transition-colors duration-300 ${
							isActive
								? "bg-cyan text-black"
								: " text-white bg-hover"
						}`
					}
				>
					Problem
				</NavLink>
				<NavLink
					to="./testcase"
					className={({ isActive }) =>
						`px-4 py-2 mx-2 text-sm font-dmMono rounded-full transition-colors duration-300 ${
							isActive
								? "bg-cyan text-black"
								: "bg-hover text-white"
						}`
					}
				>
					Test Case
				</NavLink>
			</div>
		</div>
	);
};