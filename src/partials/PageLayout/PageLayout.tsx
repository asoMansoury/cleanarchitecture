import { useSelector } from "react-redux";
import classes from "./PageLayout.module.scss";
import { PropsWithChildren, ReactNode, useEffect } from "react";
import { RootState } from "../../redux";
import { useNavigate } from "react-router";
import InternalErrorException from "../../pages/Errors/InternalErrorException";
import { AccountInfo } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import { CorrectionService } from "../../services/Correction.service";
import { AzurePortalService } from "../../services/AzureProtalService";
import { useAppDispatch } from "../../customHooks/reduxHooks";
import { SetUserProfile } from "../../redux/applicationreducers/UserAuthorizedProfileReducer";
import { WithDependency } from "../../hoc/withDependencies";
import { dependencies } from "../../dependencies";

export type PageLayoutProps = {
  children:ReactNode | undefined,
  azurePortalService:AzurePortalService
}
export const PageLayout = ({ children,azurePortalService }: PageLayoutProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const todoHandlerReducer = useSelector((state: RootState) => state.errorHandler);
  

  async function GetUserProfileImage(){
    var result = await azurePortalService.getProfileUser();
    dispatch(SetUserProfile({
      userImageSrc:result as string
    }))
  }

  useEffect(()=>{
    GetUserProfileImage();
  },[])

  useEffect(() => {
    if (todoHandlerReducer.errorType == 500) {
      navigate("/error");
    };

  }, [todoHandlerReducer.errorType])

  if (todoHandlerReducer.errorType != 500) {
    return (
    <>
          <div className={classes.main + " ml-auto mr-auto"}>
            {children}
          </div>
    </>
    );
  } else { return <InternalErrorException></InternalErrorException> }
};



export default  WithDependency({
  azurePortalService:dependencies.AzurePortalService
  },PageLayout);