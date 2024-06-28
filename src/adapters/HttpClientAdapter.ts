//This is a generice adapter which you can use this adapter for calling your APIs.
//As a sample you can go services folder and check TodoService in src/services/Todo.service

import { Store } from "@reduxjs/toolkit";

export class HttpClientAdapter{
    private readonly baseUrl;
    private readonly store:Store;
    constructor({baseUrl}:{baseUrl:string},store:Store){
        this.baseUrl = baseUrl;
        this.store = store;
    }

    get<T>(url:string,params: {query:object}={query:{}},header?:{}):Promise<T>{

        const query = Object.keys(params?.query || {})
                            .map((key)=> `${key}=${Object.getOwnPropertyDescriptor(params.query,key)?.value}`
                            )
                            .join("&")
        return fetch(this.baseUrl+url + "?"+query,{
            method:'GET',
            headers:header
        })
        .then((response)=>response.json()).catch((error)=>{
            if(error.response.status===403){
                console.log(error.response);
            }
        })
    }

    post<T>(url:string,data:T){
        return fetch(this.baseUrl+url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        })
        .then((response)=>response.json())
    }

    patch<T>(url:string,data:T){
        return fetch(this.baseUrl+url,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        })
        .then((response)=>response.json())
    }


    delete<T>(url:string,data: T){
        
        return fetch(this.baseUrl+url,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        })
        .then((response)=>response.json())
    }

}