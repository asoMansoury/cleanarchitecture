import { useEffect, useState } from "react";
import { CorrectionService } from "../../services/Correction.service";
import { useTranslation } from "react-i18next";
import classes from './MainMenu.module.scss';
import {AccountCard} from "../../components/AccountCard/AccountCard";
import { WithDependency } from "../../hoc/withDependencies";
import { dependencies } from "../../dependencies";
import ChevronIcon from "../Icons/ChevronIcon";
export type MainMenuTypeProps ={
    correctionService:CorrectionService
};


export const MainMenu =({correctionService}:MainMenuTypeProps)=>{
    const{t} =useTranslation(); 
    const {File,System,Concession,Theatre,Reports,DataReceipt,Help} = t("Header") as any;





    return <div className={classes.Main}>
                <AccountCard></AccountCard>
        </div>
}

export default  WithDependency({
    correctionService:dependencies.CorrectionService
  },MainMenu);