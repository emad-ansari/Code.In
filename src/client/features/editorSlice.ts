import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EditorState, CodeExecutionResponse, DefaultCodeApiResponse } from "../types";
import { api } from "../api/client";

export const editorSliceInitialState: EditorState = {
	isFullScreen: false,
	language: "java",
	boilerPlateCode: "",
	code: "",
	execution_result: {
		overallStatus: "",
		passed_testcases: -1,
		submissions: [],
	},
	error: null,
	loading: false
};


interface DefaultCodeProps {
	problemId: string;
	languageId: number;
	code?: string;
}
export const getDefaultCode = createAsyncThunk<DefaultCodeApiResponse, DefaultCodeProps>("/editor/getDefaultCode", async ({problemId, languageId}: DefaultCodeProps, thunkAPI ) => {
	console.log('problem id and language id : ', problemId, languageId);
	try {
		const res = await api.get('/problem/default-code', {
			params: {
				problemId,
				languageId
			}
		})
		console.log('default code: ', res.data);
		if (res.data.success && res.data.defaultCode){
			console.log('going to set the code as default code: ')			
			thunkAPI.dispatch(setCode(res.data.defaultCode));
		}
		
		return res.data;
	}
	catch(error: any){
		console.log(error.message);
	}
})


export const runCode = createAsyncThunk<CodeExecutionResponse, DefaultCodeProps>("/editor/runCode", async ({problemId, languageId, code}: DefaultCodeProps, thunkAPI) => {
	try {
		console.log('check run code ', problemId)
		console.log('user code: ',code)
		const res = await api.post('/problem/run-code', {
			data: {
				problemId,
				languageId,
				code: code
			}
		})
		return res.data;
	}
	catch(error: any){
		console.log(error.message);
		return thunkAPI.rejectWithValue(error.message);
	}
})

export const editorSlice = createSlice({
	name: "editor",
	initialState: editorSliceInitialState,
	reducers: {
		setLanguage: (state, action: PayloadAction<string>) => {
			state.language = action.payload;
		},
		toggleFullScreen: (state, action: PayloadAction<boolean>) => {
			state.isFullScreen = action.payload;
		},
		setCode: (state, action: PayloadAction<string>) => {
			state.code = action.payload;
		},
		
	},
	extraReducers: (builder) => {
		builder.addCase(getDefaultCode.pending , (_, action) => {
			console.log(action.payload);
		})
		builder.addCase(getDefaultCode.fulfilled , (state, action) => {
			const { success, message } = action.payload;
			console.log('message of deffault code: ', message)
			if ( success ){
				const defaultCode  = action.payload.defaultCode ? action.payload.defaultCode : "";
				state.boilerPlateCode = defaultCode;
			}
		})
		builder.addCase(getDefaultCode.rejected , (_, action) => {
			console.log(action.payload);
		})
		builder.addCase(runCode.pending , (state) => {
			state.loading = true;
		})
		builder.addCase(runCode.fulfilled , (state, action) => {
			const { success, data } = action.payload;
			if (success){
				state.execution_result = data;
				state.loading = false;
			}
		})
		builder.addCase(runCode.rejected , (state, action) => {
			state.loading = false;
			state.error = action.error.message
		})
	}
	
});

export default editorSlice.reducer;
export const { setLanguage, toggleFullScreen, setCode } = editorSlice.actions;
