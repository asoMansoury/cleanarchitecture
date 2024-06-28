import { MouseEvent, memo, useEffect, useRef, useState } from 'react';
import classes from './CanvasField.module.scss';

type CanvasFieldProp = {
    name?:string;
    label?:string;
    value?:string;
    onInput:(value: string)=>void;
};

type Coordinates = {x:number;y:number};

export const CanvasField = memo(({name,label,value,onInput}:CanvasFieldProp) =>{
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing,setIsDrawing] = useState<boolean>(false);

    const [previousCoordinates,setPreviousCoordinates] = useState<Coordinates>({
        x:0,
        y:0
    });

    const canvasContext = canvasRef.current?.getContext("2d");

    useEffect(()=>{
        if(value){
            const image = new Image();

            image.onload =() =>{
                canvasContext?.drawImage(image,0,0);
            }
            image.src = value;
        }
    },[value,canvasContext])

    const enableDrawing = ()=>setIsDrawing(true);

    const endDrawing = ()=>{
        setPreviousCoordinates({
            x:0,
            y:0
        })
        setIsDrawing(false);
        onInput!(canvasRef.current?.toDataURL() || "");
    };

    const startDrawing = (event:MouseEvent<HTMLCanvasElement>)=>{
        if(!(isDrawing && canvasContext && canvasRef.current)){
            return;
        }

        const canvasEl = canvasRef.current;
        const {x:offsetX,y:offsetY} = canvasEl.getBoundingClientRect();
        
        //get canvas scale
        const scaleX = canvasEl.width / canvasEl.clientWidth;
        const scaleY = canvasEl.height / canvasEl.clientHeight;
        const updatedCoordinates = {
            x: (event.clientX  - offsetX) * scaleX,
            y: (event.clientY - offsetY) * scaleY
        };

        if(previousCoordinates.x ===0 && previousCoordinates.y === 0){
            setPreviousCoordinates(updatedCoordinates);
            return;
        }

        canvasContext.fillStyle = 'blue';
        canvasContext.lineWidth = 8;
        canvasContext.moveTo(previousCoordinates.x,previousCoordinates.y);
        canvasContext.lineTo(updatedCoordinates.x,updatedCoordinates.y);
        canvasContext.stroke();
        setPreviousCoordinates(updatedCoordinates);

    }

    return <>
        {label? <label htmlFor={name}>{label}</label>:null}
        <canvas 
            width="1024"
            height="768"
            onMouseDown={enableDrawing}
            onMouseMove={startDrawing}
            onMouseUp={endDrawing}
            onMouseLeave={endDrawing}
            ref={canvasRef}
            className={classes.CanvasField}
            ></canvas>
    </>
})