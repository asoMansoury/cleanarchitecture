import { ReactNode } from 'react';
import classes from './HeaderLink.module.scss';
import { Link } from 'react-router-dom';
import MoviesIcon from '../../Icons/MoviesIcon';


type HeaderLinkProps = {
    url:string,
    children:ReactNode,
    icon?:ReactNode
}



export const HeaderLink =({children,url,icon}:HeaderLinkProps) =>{
    return (<div className={classes.HeaderLinkParent}>
        {icon!=null?icon:null}
        <Link to={url}  className={classes.HeaderLink + " mr-2 ml-1"} >
            {children}
        </Link>
    </div>

    )
}