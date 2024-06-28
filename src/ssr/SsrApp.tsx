import App from "../App"
import {StaticRouter} from 'react-router-dom/server'
export const SsrApp = (pathname:string) =>{
    return <>
        <StaticRouter location={pathname}>
            <App></App>
        </StaticRouter>
    </>
}