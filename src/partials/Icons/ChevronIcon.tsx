import { useState } from 'react';
import classes from './Chevron.module.scss';

export default function ChevronIcon(){

    
    const [classeNames,setClasseNames] = useState([classes.ChevronIconStyle]);
    const [isToggled,setIsToggled] = useState(false);

    function ToggleChevrlotBtn(event:any){

        setIsToggled(!isToggled);
        if(isToggled===true)
            setClasseNames([classes.ChevronIconStyle,classes.ChevronIconStyleClosed]);
        else
            setClasseNames([classes.ChevronIconStyle]);

    }

    return (
            <div className={classes.ChevronIconParent}>
            <div className={classeNames.join(' ')} onClick={(event)=>ToggleChevrlotBtn(event)}>
                <div style={{width: 16, height: 16, position: 'relative'}}>
                    <div style={{width: 9.33, height: 5.33, left: 3.33, top: 5.33, position: 'absolute'}}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Icon / Chevron">
                        <path id="Union" d="M10.4714 4.47141C10.7317 4.21107 10.7317 3.78896 10.4714 3.52861C10.211 3.26826 9.78893 3.26826 9.52859 3.52861L5.52859 7.52861C5.26824 7.78895 5.26824 8.21106 5.52859 8.47141L9.52859 12.4714C9.78893 12.7318 10.211 12.7318 10.4714 12.4714C10.7317 12.2111 10.7317 11.789 10.4714 11.5286L6.9428 8.00001L10.4714 4.47141Z" fill="white"/>
                        </g>
                    </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}