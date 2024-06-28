import {ReactNode,useEffect,useRef} from 'react';
import { useLocation, useNavigate } from 'react-router';
export type TimeoutProviderType ={
    children:ReactNode
}
export function TimeoutProvider({children}:TimeoutProviderType){
    const navigate = useNavigate();
    const location = useLocation();
    const timeoutRef = useRef<NodeJS.Timeout>();

    useEffect(()=>{
        const handleWindowEvents =() =>{
            clearTimeout(timeoutRef.current);

            timeoutRef.current = setTimeout(()=>{
                //Perform whatever logic you want in here, clear localStorage and log user out, show a popup modal or just navigate to another page
                navigate('/2024');
            },10000);
        };

        window.addEventListener('mousemove',handleWindowEvents);
        window.addEventListener('keydown',handleWindowEvents);
        window.addEventListener('click',handleWindowEvents);
        window.addEventListener('scroll',handleWindowEvents);

        handleWindowEvents();

        //cleanup function
        return ()=>{
            window.removeEventListener('mousemove', handleWindowEvents);
            window.removeEventListener('keydown', handleWindowEvents);
            window.removeEventListener('click', handleWindowEvents);
            window.removeEventListener('scroll', handleWindowEvents);
        };
    },[navigate,location.pathname]);

    return children;
}