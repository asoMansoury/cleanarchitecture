import { useEffect, useState } from 'react';
import { TodoService } from '../../services/Todo.service';
import classes from './StatsContainer.module.scss';
import { Todo } from '../../models/containers/Todo';

type StatsContainerProps = {
    todoService:TodoService
}
export const StatsContainer = ({todoService}:StatsContainerProps) =>{
    const [todos,setTodos] = useState<Todo[]>([]);
    useEffect(()=>{
        todoService.getAllTodo().then((todo)=>{
            setTodos(todo)
        });
    },[]);

    const todosDone = todos.filter(({isDone})=>isDone);
    const todoNotDone = todos.filter(({isDone})=>!isDone);
    return (
        <>
            <h2>Status</h2>
            <div className={classes.StatsBoardContainer}>
                <div className={classes.StatsBoard}>
                    <div className={classes.BoardTitle}>To Do ({todosDone.length})</div>
                    <ul>
                        {
                            todosDone.map((todo,index)=>{
                            return <li key={index}>{todo.task}</li>
                            })
                        }
                        
                    </ul>
                </div>
                <div className={classes.StatsBoard}>
                    <div className={classes.BoardTitle}>Not Done ({todoNotDone.length})</div>
                    <ul>
                    {
                            todoNotDone.map((todo,index)=>{
                            return <li key={index}>{todo.task}</li>
                            })
                        }
                    </ul>
                </div>
            </div>

        </>
    )
}