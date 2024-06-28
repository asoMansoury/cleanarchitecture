import { useEffect, useState } from 'react';
import classes from './AccountCard.module.scss';
import { useMsal } from '@azure/msal-react';
import { AccountInfo } from '@azure/msal-browser';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { WithDependency } from '../../hoc/withDependencies';
import ChevronIcon from '../../partials/Icons/ChevronIcon';

export type AccountCardType = {

}
export const AccountCard =({}:AccountCardType)=>{
    const {instance} = useMsal();
    const [userProfile,setUserProfile] = useState<AccountInfo>();
    const userAuthorizedReducer = useSelector((state: RootState) => state.UserAuthorizedProfile);


    useEffect(()=>{
        if(instance.getActiveAccount()!=null && instance.getActiveAccount()!=undefined){
            setUserProfile(instance.getActiveAccount()!);
        }
    },[instance]);
    
    return <>
                <div className={classes.AccountContainer}>
                    <img className={classes.ProfileImage}  src={userAuthorizedReducer.userImageSrc} />
                    <div className={classes.ProfileTitleBanner}>
                     {
                        userProfile != undefined && (
                            <>
                                <div className={classes.ProfileName}>{userProfile.name}</div>
                                <div className={classes.UserTitle}>{userProfile.username}</div>
                            </>
                        )
                     }

                    </div>
                </div>
                <div className={classes.BannerLine} />
                <ChevronIcon></ChevronIcon>
            </>
}


export default  WithDependency({
},AccountCard);