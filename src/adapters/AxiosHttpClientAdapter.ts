import { Store } from '@reduxjs/toolkit';
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { errorHandler } from '../redux/applicationreducers/ErrorHandlerReducer';
import { IErrorHandlerType } from '../models/redux/IDrawerType';
export class AxiosHttpClientAdapter{
    private readonly baseUrl;
    private readonly store:Store;
    private readonly http:AxiosInstance=axios.create();
    constructor({baseUrl}:{baseUrl:string},store:Store){
        this.baseUrl = baseUrl;
        this.store = store;
        if(this.http==null){
            this.http = axios.create({
                proxy:false,
                baseURL:this.baseUrl
            });
        }
    }
    

    async get<T>(url:string,params: {query:object}={query:{}},headers:{}):Promise<T>{
        try{
            const config = {
                headers
            };
            const query = Object.keys(params?.query || {})
                                .map((key)=> `${key}=${Object.getOwnPropertyDescriptor(params.query,key)?.value}`
                                )
                                .join("&");
            var result = (await this.http.get(this.baseUrl+url + "?"+query,config));
            return result.data as T;
        }catch(error:any){
            this.ErrrorHandilng(error);
            return null as T;
        }
    }
    
    ErrrorHandilng(error:any){
        if(error.code =="ERR_NETWORK"){
            var payload:IErrorHandlerType ={
                errorMessage: error.message,
                errorType:500
            }
            this.store.dispatch(errorHandler(payload))
        }else{
            var payload:IErrorHandlerType ={
                errorMessage: error.response.data.message,
                errorType:200
            }
            if(error.response.status==400){//This error occurs whenever the data passed to the api by the user is not valid
                //Implement error handling for this error(use redux preferably)
                payload.errorType = 400;
            }else if(error.response.status==401){//This error occurs whenever the user token is not valid
                //Implement error handling for this error(use redux preferably)
                payload.errorType = 401;
            }else if(error.response.status==403){//This error throws when user access to forbidden page(Forbidden error)
                //Implement error handling for this error(use redux preferably)
                payload.errorType = 403;
            }
            else if(error.response.status==404){//This error occurs whenever the data passed to the api by the user is not found
                //Implement error handling for this error(use redux preferably)
                payload.errorType = 404;
            }else if(error.response.status==423){//This error occurs whenever written into to the database has been locked by admin.
                //Implement error handling for this error(use redux preferably)
                payload.errorType = 423;
            }else if(error.response.status==500){//This error occurs whenever internal exception occured on backend side.
                // Redirect the user to the appropriate page and display a message information them that the application is under construction.
                //And say them wait for further updates.
                payload.errorType = 500;
            }
            this.store.dispatch(errorHandler(payload))
        }
    }

    async post<T>(url:string,data:T,headers:{}){
        try{
            var result = (await this.http.post(this.baseUrl+url,{
                headers:headers,
                body:JSON.stringify(data)
            }));
            return result.data;
        }catch(error:any){
            this.ErrrorHandilng(error);
            return null as T;
        }
    }


    async patch<T>(url:string,data:T,headers:{}){
        try{
            return (await this.http.patch(this.baseUrl+url,
                {body:JSON.stringify(data)},
                {
                    headers:headers
            })).data;
        }catch(error:any){
            this.ErrrorHandilng(error);
            return null as T;
        }
    }


    async delete<T>(url:string,data: T,headers:{}){
        try{
            return (await this.http.delete(this.baseUrl+url,{
                headers:headers,
            })).data
        }catch(error:any){
            this.ErrrorHandilng(error);
            return null as T;
        }
    }

}