import { ReactNode, memo } from 'react';
import classes from './CheckBoxField.module.scss';

type CheckBoxFieldProps = {
    value?:boolean,
    label?:string,
    name?:string;
    onInput?:(value:boolean) => void;
}
export const CheckBoxField =memo(({value,label,name,onInput}:CheckBoxFieldProps) =>{
    return <div className={classes.CheckBox}>
        <input name={name} type="checkbox" onChange={(event)=>onInput&&onInput(event.target.checked)}
            checked={value}
        ></input>
        {label? <label htmlFor={name} className='ml-1'>{label}</label>:null}
    </div>
})