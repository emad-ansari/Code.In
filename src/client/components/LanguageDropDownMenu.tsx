import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../app/store";
import { setSelectedLanguage } from "../features/problemSlice";

const LANGUAGES = ["Java", "C++", "Javascript", "Go", 'Rust'];


export const LanguageDropDownMenu = () => {
  const { openDropDownMenu } = useSelector((state: RootState) => state.problem);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`flex flex-col bg-[#2B2A2B] absolute bottom-0 left-0 right-[-20%] top-[110%] h-[195px] items-center rounded-lg py-2 z-10 shadow-md text-sm ${
        openDropDownMenu.isLanguageMenuOpen
          ? "transform translate-y-0 opacity-100"
          : "translate-y-[-50%] opacity-0"
      } ease-in-out duration-300`}
    >
      {LANGUAGES.map((mode, index) => {
        return (
          <span key = {index} className="text-white font-normal hover:bg-[#403c3c] flex  items-center px-2 py-2 w-[90%] rounded-md h-full" onClick = {() => dispatch(setSelectedLanguage(mode))}
          >
            {mode}
          </span>
        );
      })}
    </div>
  );
};
