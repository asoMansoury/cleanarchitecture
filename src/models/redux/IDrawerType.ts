//This interface type is used as a sample for our redux implementaion.
//Do not Use this interface

export interface IDrawerType{
    isDrawerOpen:boolean,
    todoId:number
}


export type ErrorType = 400 | 401 | 403 | 404|423|500|200;
export type HtmlElementTypes = HTMLElement;
export interface IErrorHandlerType{
    errorType:ErrorType,
    errorMessage:string
}

export interface IUserProfile{
    userImageSrc:string
}
