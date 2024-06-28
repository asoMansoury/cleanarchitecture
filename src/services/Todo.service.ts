//This service is implemented as a sample to be injected into your project.
//To see how this services is registered into our container you can go and see dependencies.ts file in root of project.
//you can either user or remove this sample for your future requirements.

import { AxiosHttpClientAdapter } from "../adapters/AxiosHttpClientAdapter";
import { HttpClientAdapter } from "../adapters/HttpClientAdapter";
import { Todo } from "../models/containers/Todo";

export class TodoService {
     private readonly http:HttpClientAdapter;
    constructor(httpAdapter:HttpClientAdapter){
        this.http = httpAdapter;
    }

    // private readonly http:AxiosHttpClientAdapter;
    // constructor(httpAdapter:AxiosHttpClientAdapter){
    //     this.http = httpAdapter;
    // }

    //A sample for calling get methods 
    getTodo(id:number){
        return this.http.get<Todo>(`/todos/${id}`);
    }

    //A sample for calling get methods with sending multiple params
    getAllTodo(params?:{query:{isDone:string}}){
       return this.http.get<Todo[]>("/todos",params);
    }

    addToddo(task:string){
       return this.http.post<{todo:string}>("/todos",{todo:task});
    }

    deleteTodo(id:number){
        return this.http.delete<{id:number}>("/todos",{id:id});
    }

    updateTodo(id:number,task:Partial<Todo>){
        return this.http.patch<Partial<Todo>>("/todos/"+id,task);
    }
}