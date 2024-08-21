import { ProblemDescription } from "../components/ProblemDescription";
import { EditorSection } from "../components/EditorSection";
import { ProblemNavBar } from "../components/ProblemNavBar";
import Split from "react-split";
import { useSelector} from 'react-redux'
import { RootState } from "../app/store";


export const ProblemDescriptionPage = () => {
	const { isFullScreen } = useSelector((state: RootState) => state.dropdown);

	return (
		<>
			<ProblemNavBar isProbleDescriptioPage = {true}/> 
			<Split
				className={`flex flex-row bg-PRIMARY p-2 fixed top-0 bottom-0 left-0 right-0 ${
					isFullScreen ? "z-50 " : "mt-[64px]"
				}`}
				sizes={[45, 55]}
				gutterSize={8}
				minSize={0}
				gutterAlign = {'start'}
				
			>
				<ProblemDescription />
				<EditorSection  />
			</Split>
		</>
	);
};
