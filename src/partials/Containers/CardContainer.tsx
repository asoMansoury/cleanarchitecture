import { PropsWithChildren} from "react";
import classes from './CardContainer.module.scss';

export const CartItemContainer = ({ children }: PropsWithChildren) => {


    return (
    <>
          <div className={classes.CardContainer}>
            {children}
          </div>
    </>
    );
};