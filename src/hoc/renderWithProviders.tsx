//a HOC to create a redux store for any components which use this HOC specially for test units.


import { Store} from "@reduxjs/toolkit";
import { RenderOptions } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import { render } from '@testing-library/react'
import { store as AppStore, RootState } from '../redux';
import { Provider } from "react-redux";

interface ExtendedRenderOptions extends Omit<RenderOptions,'queries'>{
    preloadedState?: Partial<RootState>,
    store?:Store
}



/**
 * 
 * @param { React.ReactElement } ui - The UI Component which we need to create and set a redux store to it
 * @param {ExtendedRenderOptions} Component - Set AppStore(Our written store) to store variable, preloadedState: used for changing the initialState for desired store
 * @returns {JSX.Element} - Wrapping passed UI Elements with props and redux which the UI need.
 * @example
 * const initialState:IDrawerType ={
    isDrawerOpen:false,
    todoId:-1
}

test('renders Todo Contianer to ensure that this page is rendering correctly',async () => {
    const httpAdapter = new HttpClientAdapter({ baseUrl: process.env.REACT_APP_API_URL!.toString() });
    const todoService = new TodoService(httpAdapter);
    const {getByText}=renderWithProviders(<TodoContainer todoService={todoService} />,{
        preloadedState:{
            todo : initialState
        }
    });
    const linkElement = getByText(/Add/i);
    expect(linkElement).toBeInTheDocument();
});
 */
export function renderWithProviders(
    ui:React.ReactElement,
    {
        // Automatically create a store instance if no store was passed in
        preloadedState ={},
        store = AppStore,
        ...renderOptions
    }:ExtendedRenderOptions = {}
){
    function Wrapper({children}:PropsWithChildren<{}>):JSX.Element{
        return <Provider store={store}>{children}</Provider>
    }

      // Return an object with the store and all of RTL's query functions
    return {store,...render(ui,{wrapper:Wrapper,...renderOptions})}
}