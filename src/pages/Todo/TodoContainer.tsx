import { useEffect, useState } from "react";
import classes from "./TodoContainer.module.scss";
import { TodoItem } from "./TodoItem/TodoItem";
import { AddTodoItem } from "./AddTodoItem/AddTodoItem";
import { Todo } from "../../models/containers/Todo";
import { TodoService } from "../../services/Todo.service";
import { ButtonSelect } from "../../components/ButtonSelect/ButtonSelect";
import {  openDrawerFunc, todoObj } from "../../redux/todo/TodoReducer";
import { useAppDispatch, useAppSelector } from "../../customHooks/reduxHooks";
import { CorrectionService } from "../../services/Correction.service";
import { CartItemContainer } from "../../partials/Containers/CardContainer";

type TodoContianerProps = {
    todoService:TodoService,
    correctionService:CorrectionService
}
export const TodoContainer = ({todoService,correctionService}:TodoContianerProps) =>{
    const todoDrawer = useAppSelector(todoObj);
    // const {appState,setAppState} = useAppState();

    const [todos,setTodos] = useState<Todo[]>([]);
    const [todoStateFilter,setTodoStateFilter] = useState<string>("all");
    const dispatch = useAppDispatch();

    const fetchTodos = () =>{
        return todoService.getAllTodo()
                        .then((todoes:Todo[])=>{
                            setTodos(todoes);
                        });
    }
    

    useEffect(()=>{
        if(todoDrawer.todoId === -1){
            fetchTodos();
        }
    },[])

    const onDoneClicked =(todoId:number,isDone:boolean) =>{
        todoService.updateTodo(todoId,{isDone:isDone}).then((()=>{
            fetchTodos()
        }));
    };

    const onAddClicked = (task:string)=>{
        correctionService.getTest()?.then((response)=>{
            console.log(response);
            todoService.addToddo(task).then((()=>{
                fetchTodos()
            }));
        });

    };


    const onDeleteClicked =(id:number)=>{
        todoService.deleteTodo(id).then((()=>{
            fetchTodos()
        }));
    }

    const onEditClicked= (id:number)=>{
        dispatch(openDrawerFunc(id));
    }

    const buttonSelectOptions = [
        {label:"All",value:"all"},
        {label:"Done",value:"true"},
        {label:"Not Done",value:"false"}
    ];

    const onSelectTodoStateFilter = (value:string) =>{
        setTodoStateFilter(value);
        todoService.getAllTodo({query:{isDone:value}}).then((todo:Todo[])=>{
            setTodos(todo);
        })
    }

    return (
        <CartItemContainer>
        <AddTodoItem  onAddClicked={onAddClicked}></AddTodoItem>
         <div className="mt-2">
            <ButtonSelect value={todoStateFilter} onInput={(value)=>onSelectTodoStateFilter(value)} options={buttonSelectOptions}></ButtonSelect>
         </div>
        {todos.map((item:Todo,index)=>(
                <TodoItem 
                    key={index} 
                    todo={item} 
                    onDoneClicked ={onDoneClicked}
                    onDeleteClicked={onDeleteClicked} 
                    onEditClicked={onEditClicked}></TodoItem>
                )
            )}
        </CartItemContainer>
    )
}