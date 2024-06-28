import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import TodoContainer from './';
import { HttpClientAdapter } from '../../adapters/HttpClientAdapter';
import { TodoService } from '../../services/Todo.service';
import { IDrawerType } from '../../models/redux/IDrawerType';
import { renderWithProviders } from '../../hoc/renderWithProviders';
import { store } from '../../redux';

const initialState:IDrawerType ={
    isDrawerOpen:false,
    todoId:-1
}

test('renders Todo Contianer to ensure that this page is rendering correctly',async () => {
    const httpAdapter = new HttpClientAdapter({ baseUrl: process.env.REACT_APP_API_URL!.toString() },store);
    const todoService = new TodoService(httpAdapter);
    const {getByText}=renderWithProviders(<TodoContainer todoService={todoService} />,{
        preloadedState:{
            todo : initialState
        }
    });
    const linkElement = getByText(/Add/i);
    expect(linkElement).toBeInTheDocument();
  
});