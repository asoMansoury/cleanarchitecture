// This file contains a sample reducer used for opening and closing the drawer container.
// This reducer is provided as an example and can be removed from your project if not needed.

import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import { IDrawerType } from '../../models/redux/IDrawerType';
import { RootState } from '..';


const initialState:IDrawerType ={
    isDrawerOpen:false,
    todoId:-1
}

export const todoSlice = createSlice({
    name:'todoRedcuer',
    initialState,
    reducers:{
        closeDrawerFunc:(state=initialState,action:PayloadAction)=>{
            state.isDrawerOpen = false;
            state.todoId = -1;
        },
        openDrawerFunc:(state=initialState,action:PayloadAction<number>)=>{
            state.isDrawerOpen = true;
            state.todoId = action.payload;
        }
    }
});


export const todoObj = (state:RootState) => state.todo;
export const {closeDrawerFunc,openDrawerFunc} = todoSlice.actions;
export default todoSlice.reducer;