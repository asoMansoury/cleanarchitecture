//This service is implemented as a sample to be injected into your project.
//To see how this services is registered into our container you can go and see dependencies.ts file in root of project.
//you can either user or remove this sample for your future requirements.
import { AxiosHttpClientAdapter } from "../adapters/AxiosHttpClientAdapter";
import { HttpClientAdapter } from "../adapters/HttpClientAdapter";
import { Todo } from "../models/containers/Todo";
import {apiRequest, getToken} from "../msalConfiguration";

export class CorrectionService {
    private readonly http:AxiosHttpClientAdapter;
    constructor(httpAdapter:AxiosHttpClientAdapter){
        this.http = httpAdapter;
    }

   async getTest():Promise<any>{
        var headers = {
            'Authorization': `Bearer ${await getToken(apiRequest)}`,
            'Content-Type': 'application/json' // Optionally, set content type header
        }
        return  this.http.get<Todo>(`/api/Filter/GetSchedulesType`,{query:{roleName:'Admin'}},headers)
                         .then((response)=>console.log("correction Response",response));
    }

    //A sample for calling get methods with sending multiple params
   async getAllTodo(params?:{query:{isDone:string}}){
        var headers = {
            'Authorization': `Bearer ${await getToken(apiRequest)}`,
            'Content-Type': 'application/json' // Optionally, set content type header
        }
       return this.http.get<Todo[]>("/todos",params,headers);
    }

   async addToddo(task:string){
        var headers = {
            'Authorization': `Bearer ${await getToken(apiRequest)}`,
            'Content-Type': 'application/json' // Optionally, set content type header
        }
       return this.http.post<{todo:string}>("/todos",{todo:task},headers);
    }

   async deleteTodo(id:number){
        var headers = {
            'Authorization': `Bearer ${await getToken(apiRequest)}`,
            'Content-Type': 'application/json' // Optionally, set content type header
        }
        return this.http.delete<{id:number}>("/todos",{id:id},headers);
    }

   async updateTodo(id:number,task:Partial<Todo>){
        var headers = {
            'Authorization': `Bearer ${await getToken(apiRequest)}`,
            'Content-Type': 'application/json' // Optionally, set content type header
        }
        return this.http.patch<Partial<Todo>>("/todos/"+id,task,headers);
    }
}