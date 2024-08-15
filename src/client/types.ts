

export interface ProblemState {
	problems: Array<Problem>;
	selectedLanguage: string;
	pageSize: number;
	numberOfPages: number;
	error: any
}

export interface DropDownType {
	isStatusMenuOpen: boolean;
	isDifficultyMenuOpen: boolean;
	isLanguageMenuOpen: boolean
}

export interface Problem { 
	problemId: number;
	problemTitle: string;
	problemDescription: string;
	difficultyLevel: string;
	problemStatus: string;
	problemNo: number
}



export interface ApiResponse<T> {
	data: T,
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
	difficultyLevel: string
}
