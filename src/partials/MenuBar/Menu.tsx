import { useTranslation } from "react-i18next";
import { HeaderLink } from "../Header/HeaderLink/HeaderLink"
import classes from './Menu.module.scss'
import FileIcon from "../Icons/FileIcon";
import SystemIcon from "../Icons/SystemIcon";
import ConcessionIcon from "../Icons/ConcessionIcon";
import TheatreIcon from "../Icons/TheatreIcon";
import ReportsIcon from "../Icons/ReportsIcon";
import DataReceiptIcon from "../Icons/DataReceiptIcon";
import HelpIcon from "../Icons/HelpIcon";
interface MenuProps{

}
export const Menu = ({}:MenuProps) =>{
    const{t} =useTranslation(); 
    const {File,System,Concession,Theatre,Reports,DataReceipt,Help} = t("Header") as any;
    return<>
       <div className={classes.Menu}>
          <HeaderLink url="/" icon={<FileIcon></FileIcon>}>{File}</HeaderLink>
          <HeaderLink url="/system " icon={<SystemIcon></SystemIcon>}>{System}</HeaderLink>
          <HeaderLink url="/about" icon={<ConcessionIcon></ConcessionIcon>}>{Concession}</HeaderLink>
          <HeaderLink url="/about" icon={<TheatreIcon></TheatreIcon>}>{Theatre}</HeaderLink>
          <HeaderLink url="/about" icon={<ReportsIcon></ReportsIcon>}>{Reports}</HeaderLink>
          <HeaderLink url="/about" icon={<DataReceiptIcon></DataReceiptIcon>}>{DataReceipt}</HeaderLink>
          <HeaderLink url="/about" icon={<HelpIcon></HelpIcon>}>{Help}</HeaderLink>
        </div>
    </>
}