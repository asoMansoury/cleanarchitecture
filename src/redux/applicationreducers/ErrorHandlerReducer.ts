import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { IErrorHandlerType ,ErrorType} from "../../models/redux/IDrawerType";
import { RootState } from "..";


const initialState:IErrorHandlerType={
    errorType:200,
    errorMessage:""
}


export const errorHandlerReducer = createSlice({
    name:"errorHandlerReducer",
    initialState,
    reducers:{
        errorHandler(state=initialState,action:PayloadAction<IErrorHandlerType>){
            state.errorType = action.payload.errorType;
            state.errorMessage = action.payload.errorMessage;
        },

    }
}) ;


export const {errorHandler} = errorHandlerReducer.actions;
export default errorHandlerReducer.reducer;