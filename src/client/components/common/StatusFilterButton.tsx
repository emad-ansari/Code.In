import { Button } from "../common/Button";
import { StatusDropDownMenu } from "../common/StatusDropDownMenu";
import { ChevronDown } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/store";
import { setOpenDropDownMenu } from "../../features/dropDownSlice";
import { memo } from "react";

export const StatusFilterButton = memo(() => {
	const dispatch = useAppDispatch();
	const { isStatusMenuOpen } = useSelector(
		(state: RootState) => state.dropdown
	);
	const { isLogin } = useSelector((state: RootState) => state.user);

	return (
		<Button
			disabled={isLogin ? false : true}
			classname="relative flex flex-row itmes-center bg-darkGray gap-2 text-white z-50 rounded-md border border-[#334155]"
			onClick={(e: React.SyntheticEvent<EventTarget>) => {
				e.stopPropagation();
				dispatch(setOpenDropDownMenu({ menu: "status" }));
			}}
		>
			<span className="z-50">Status</span>
			<ChevronDown
				className={`text-2xl pt-1 z-50 ${
					isStatusMenuOpen
						? " transform duration-200  rotate-180 pt-1"
						: "transform duration-200  -rotate-0 pt-1"
				}`}
			/>
			<StatusDropDownMenu />
		</Button>
	);
});
