import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../api/client";
import { RootState } from "../app/store";

export interface ProblemFormState {
	title: string;
	description: string;
	difficulty: string;
	functionName: string;
	parameters: string;
	returnType: string;
}
export const ProblemFormInitailState: ProblemFormState = {
	title: "",
	description: "",
	difficulty: "Easy",
	functionName: "",
	parameters: "",
	returnType: "",
};


export const createProblem = createAsyncThunk('/problem/createProblem', async(_, ThunkAPI) => {
    try{    
        const store = ThunkAPI.getState() as RootState;
        const { title, description, difficulty, functionName, parameters, returnType} = store.problemform;

        const res = await  client.post('/problem/create-problem', {
            title,
            description,
            difficulty, 
            functionName,
            parameters,
            returnType
        });
        return res.data;
    }
    catch(error: any){
        console.error("Error: ", (error as Error).message);
    }
})


export const problemFormSlice = createSlice({
	name: "problemForm",
	initialState: ProblemFormInitailState,
	reducers: {
		setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
		setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
		setDifficulty: (state, action: PayloadAction<string>) => {
            state.difficulty = action.payload;
        },
		setFunctionName: (state, action: PayloadAction<string>) => {
            state.functionName = action.payload;
        },
		setParameters: (state, action: PayloadAction<string>) => {
            state.parameters = action.payload;
        },
		setReturnType: (state, action: PayloadAction<string>) => {
            state.returnType = action.payload;
        },
	},
    extraReducers: (builder) => {
        builder.addCase(createProblem.pending, (_, action) => {
            console.log('status is pending', action.payload);

        }),
        builder.addCase(createProblem.fulfilled, (_, action) => {
            console.log('status is fulfilled', action.payload);
        }),
        builder.addCase(createProblem.rejected, (_, action) => {
            console.log('status is rejected', action.payload);

        })
    }
});

export default problemFormSlice.reducer;
export const {
	setTitle,
    setDescription,
	setDifficulty,
	setFunctionName,
	setParameters,
	setReturnType,
} = problemFormSlice.actions;