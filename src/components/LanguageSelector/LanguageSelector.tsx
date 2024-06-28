import  { useEffect } from 'react';
import classes from './LanguageSelector.module.scss'
import { useTranslation } from 'react-i18next';
const languages = [
    {code:"en",lang:"English"},
    {code:"fr",lang:"French"}
];



 const LanguageSelector = () => {
    
    const {i18n,t} = useTranslation();


    const changeLanguage =(lng:string) =>{
        localStorage.setItem('language', lng);
        i18n.changeLanguage(lng);
    }
    
    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
          i18n.changeLanguage(storedLanguage);
        }
      }, [i18n,i18n.language]);

    return (
        <div className={classes.btnContainer}>
            {languages.map((lng)=>{
                return <button className={lng.code === i18n.language?classes.selected+" "+ classes.button:null +" "+ classes.button}  key ={lng.code} onClick={(e)=> changeLanguage(lng.code)}>{lng.lang}</button>
            })}
        </div>
    )
}

export default LanguageSelector;