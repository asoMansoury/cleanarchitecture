import { memo } from 'react';
import classes from './TextAreadField.module.scss';
type  TextAreaFieldProps = {
    value:string;
    label?:string;
    name?:string;
    onInput: (value:string)=> void;
}
export const TextAreaField = memo(({value,label,name,onInput}:TextAreaFieldProps) =>{

    return <>
        {label? <label htmlFor={name}>{label}</label>:null}
        <textarea 
            className={classes.TextAreaField} 
            value={value} 
            onChange={event=>onInput(event.target.value)} 
        ></textarea>
    </>
})