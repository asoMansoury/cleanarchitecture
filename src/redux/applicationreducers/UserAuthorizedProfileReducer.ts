import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {  IUserProfile} from "../../models/redux/IDrawerType";
import { RootState } from "..";


const initialState:IUserProfile={
    userImageSrc:""
}


export const UserAuthorizedProfile = createSlice({
    name:"userProfileReducer",
    initialState,
    reducers:{
        SetUserProfile(state=initialState,action:PayloadAction<IUserProfile>){
            state.userImageSrc = action.payload.userImageSrc
        },

    }
}) ;


export const {SetUserProfile} = UserAuthorizedProfile.actions;
export default UserAuthorizedProfile.reducer;