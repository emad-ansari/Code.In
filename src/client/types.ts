export interface ProblemState {
	problems: Array<Problem>;
	pageSize: number;
	numberOfPages: number;
	error: any;
}
export interface SettingState {
	isOpen: boolean;
	theme: string;
	fontSize: number;
}
export interface DropDownType {
	isStatusMenuOpen: boolean;
	isDifficultyMenuOpen: boolean;
	isLanguageMenuOpen: boolean;
	isThemeMenuOpen: boolean;
}

export interface EditorState {
	language: string;
	isFullScreen: boolean;
	boilerPlateCode: string;
}

export interface Problem {
	problemId: number;
	problemTitle: string;
	problemDescription: string;
	difficultyLevel: string;
	problemStatus: string;
	problemNo: number;
}

export interface ApiResponse<T> {
	data: T;
	totalPages: number;
	message: string;
}

export interface FilterState {
	easy: boolean;
	medium: boolean;
	hard: boolean;
}

export interface getProblemParameter {
	pageNumber: number;
	difficultyLevel: string;
}
export interface DropDownItemProps {
	value: string;
	isFilterApply: boolean;
	filterProblems: (difficultyLevel: string) => void;
}

export interface CustomMuiMenuProps {
	labelName: string;
	labelValue: string;
	ITEMS_ARRAY: string[];
}

export interface SubmissionResult {
	status: string;
	testCasesPassed: number;
	userOutput?: string | "";
	expectedOutput?: string;
	compilationError?: string | "";
	failedTestCase?: string | "";

}

export const typeOptions: string[] = [
	"int",
	"int[]",
	"int[][]",
	"char",
	"char[]",
	"char[][]",
	"String",
	"String[]",
	"String[][]",
	"boolean",
	"boolean[]",
	"boolean[][]",
	"float",
	"float[]",
	"double",
	"double[]",
	"List<Integer>",
	"List<List<Integer>>",
	"List<String>",
	"List<List<String>>",
];
