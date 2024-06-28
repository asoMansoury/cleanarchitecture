import { SearchButtonBtn } from '../../components/SearchButton/SearchButonBtn';
import { WithDependency } from '../../hoc/withDependencies';
import CineplexIcon from '../Icons/CineplexIcon';
import SearchIcon from '../Icons/SearchIcon';
import classes from './Banner.module.scss';

export type BannerTypeProps = {

};

export const Banner = ({}:BannerTypeProps)=>{

    return <div className={classes.Banner}>
                <div style={{width: '30%', height: '100%', textAlign: 'center', color: 'white', fontSize: 40, fontFamily: 'Mark OT', fontWeight: '700', wordWrap: 'break-word'}}>DEV</div>
                <SearchButtonBtn></SearchButtonBtn>
                <div style={{width: 119, height: 32, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{width: '100%', height: '100%', position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <CineplexIcon></CineplexIcon>
                    </div>
                </div>
        </div>
};





export default  WithDependency
({},Banner);