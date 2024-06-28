//Do not use this hoc!!!
//This is a sample hoc to know whether Redux does work or not.


import { ComponentProps, ElementType } from "react"
import classes from './withSlideDrawer.module.scss';
import { useSelector } from "react-redux";
import { RootState } from "../redux";


export const withSlideDrawer = (Component:ElementType)=>{

    return function (props:ComponentProps<typeof Component>){
        const todoDrawer = useSelector((state: RootState) => state.todo);
        return todoDrawer.isDrawerOpen===true?<div className={classes.EditTodoContainer}>
            <Component {...props}></Component>
        </div>:null;
    }
}