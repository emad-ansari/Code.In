import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ProblemState, Problem, ApiResponse, getProblemParameter, ServerProblem } from "../types";
import { client } from "../api/client";
import { RootState } from "../app/store";



export const problemSliceInitialState: ProblemState = {
	problems: [],
	pageSize: 10,
	numberOfPages: 1,	
	error: null,
};

export const getProblems = createAsyncThunk('/problem/getProblems', async({pageNumber, difficulty, status}: getProblemParameter, ThunkAPI) => {
	const store = ThunkAPI.getState() as RootState;
	const { pageSize } = store.problem;
	console.log('difficulty', difficulty);
	
	try {
		const res = await client.get<ApiResponse<ServerProblem[]>>(`/problem/filter-problem`, {
			params: {
				pageNumber,
				pageSize,
				difficulty,
				status
			}
		});
		const data  = res.data;

		return data;
	}
	catch(error: any){
		return ThunkAPI.rejectWithValue(error.message || "failed to fetch problems");
	}
})

export const problemSlice = createSlice({
	name: "problem",
	initialState: problemSliceInitialState,
	reducers: {
		setPageSize: (state, action: PayloadAction<number>) => {
			state.pageSize = action.payload;
		},
	
	},
	extraReducers: (builder) => {
		builder.addCase(getProblems.pending, (_, action) => {
			console.log(action.payload);
		}) 
		builder.addCase(getProblems.fulfilled, (state, action) => {
			const { message, data, totalPages} = action.payload;
			state.problems = data;
			console.log(message);
			state.numberOfPages = totalPages;
		}) 
		builder.addCase(getProblems.rejected, (_, action) => {
			console.log(action.payload);
		}) 
		
	}
});

export default problemSlice.reducer;
export const {
	setPageSize,
} = problemSlice.actions;
