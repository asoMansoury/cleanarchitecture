import { memo } from 'react';
import classes from './SearchButtonBtn.module.scss';
import SearchIcon from '../../partials/Icons/SearchIcon';
type  SearchButtonProps = {
}
export const SearchButtonBtn = memo(({}:SearchButtonProps) =>{

    return <div className={classes.SearchButtonArea}>
            <div style={{color: '#9DACC1', fontSize: 18, fontFamily: 'Mark OT', fontWeight: '450', lineHeight: 22, wordWrap: 'break-word'}}>Search for lorem, lorem or lorem</div>
            <div style={{width: 28, height: 28, position: 'relative'}}>
                <SearchIcon></SearchIcon>
            </div>
        </div>
})