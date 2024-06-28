import { memo } from 'react';
import { Button } from '../Button/Button';
import classes from './ButtonSelect.module.scss';

type ButtonSelectOption = {
    label:string;
    value:string;
}
type ButtonSelectProps = {
    value:string;
    options:ButtonSelectOption[];
    onInput:(value:string)=> void;
}
export const ButtonSelect = memo(({
    value,
    options,
    onInput}:ButtonSelectProps) =>{

    return <div className={classes.ButtonSelectWrapper}>{
        options.map((option)=>{
            return <Button 
                key={option.value}
                className={classes.ButtonSelectOption + 
                           " " + 
                           (option.value===value && classes.Selected)}
                onClick={()=>onInput(option.value)}>{option.label}</Button>
        })
    }</div>
})