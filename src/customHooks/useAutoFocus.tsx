//This is another sample to write hooks for your project.
//This is a sample which you can use on your textfields to set auto focus.

import { useEffect, useRef } from "react";

export const useAutoFocus = () =>{
    const elementRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        elementRef.current?.focus();
    },[]);

    return elementRef;
}