import classes from './Header.module.scss'
import LanguageSelector from '../../components/LanguageSelector/LanguageSelector';
import SearchIcon from '../Icons/SearchIcon';
import AccountIcon from '../Icons/AccountIcon';
import CineplexIcon from '../Icons/CineplexIcon';


export const Header = ()=>{


return <header className={classes.StoreNav}>
        <nav>
          <CineplexIcon></CineplexIcon>
        </nav>
        <nav className={classes.HeaderRight}>
          <SearchIcon></SearchIcon>
          <LanguageSelector></LanguageSelector>
          <AccountIcon></AccountIcon>
        </nav>
  </header>
}



export default Header;