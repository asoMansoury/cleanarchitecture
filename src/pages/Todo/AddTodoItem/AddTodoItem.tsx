import { FormEventHandler, useState } from "react"
import { TextField } from "../../../components/TextField/TextField"
import { Button } from "../../../components/Button/Button"
import { useAutoFocus } from "../../../customHooks/useAutoFocus";
type AddTodoItemProps = {
    onAddClicked:(task:string)=>void;
}


export const AddTodoItem = ({onAddClicked}:AddTodoItemProps) =>{
    const [task,setTask] = useState<string>("");
    const inputFieldRef = useAutoFocus();

    const onFormSubmitted:FormEventHandler<HTMLFormElement> =(event) =>{
        event.preventDefault();
        const submitter = document.activeElement as HTMLElement;
        if (submitter && 'disabled' in submitter) {
            submitter.disabled = true;
        }
        onAddClicked(task);
        setTask("");
    }

    const OnTextChange=(value:string)=>{
        setTask(value); 
    }
    return (
        <form onSubmit={onFormSubmitted}>
        <div className="flex">
            <div className="flex-grow-1 mr-2">
                <TextField ref={inputFieldRef} value={task} onInput={OnTextChange}></TextField>
            </div>

            <div><Button type="submit" primary> Add</Button></div>
        </div>
    </form>
    )
}