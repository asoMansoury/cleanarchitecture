import { Button } from '../../../components/Button/Button';
import { CheckBoxField } from '../../../components/CheckBoxField/CheckBoxFile';
import { Todo } from '../../../models/containers/Todo';
import classes from './TodoItem.module.scss';
type TodoItemProps = {
    todo:Todo;
    onDeleteClicked:(id:number)=>void;
    onEditClicked:(id:number)=>void;
    onDoneClicked:(id:number,isDone:boolean)=>void;
}

export const TodoItem = (
    {todo,onDeleteClicked,onEditClicked,onDoneClicked}:TodoItemProps
    ) =>{
    return (<div className={classes.TodoItem + " flex"}>
        <div>
            <CheckBoxField value={todo.isDone} onInput={(value)=>onDoneClicked(todo.id,value)}></CheckBoxField>
        </div>
        <div className={`mr-auto mt-auto mb-auto ` + (todo.isDone && classes.TodoIsDon)}>{todo.task}</div>
        <div >
            <Button primary={true} transparent={true} onClick={()=>onEditClicked(todo.id)}>
             <i className="fa fa-pencil"></i>
            </Button>
        </div>
        <div>
            <Button primary={true} onClick={()=>onDeleteClicked(todo.id)}>
                <i className="fa fa-trash"></i>
            </Button>
        </div>
    </div>
    )
}