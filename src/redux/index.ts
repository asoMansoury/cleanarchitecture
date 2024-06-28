import {configureStore} from '@reduxjs/toolkit';
import TodoReducer from './todo/TodoReducer';
import ErrorHandlerReducer from './applicationreducers/ErrorHandlerReducer';
import UserAuthorizedProfile from './applicationreducers/UserAuthorizedProfileReducer';


//Registering TodoReducer into our Configure Store.
//Check ./todo/TodoReducer.ts as a sample 
export const store = configureStore({
    reducer:{
        todo:TodoReducer,
        errorHandler:ErrorHandlerReducer,
        UserAuthorizedProfile:UserAuthorizedProfile
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch