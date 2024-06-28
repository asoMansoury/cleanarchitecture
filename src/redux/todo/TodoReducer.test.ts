import { IDrawerType } from '../../models/redux/IDrawerType';
import reducer, { closeDrawerFunc, openDrawerFunc } from './TodoReducer';
test('should return the initial state',()=>{
    expect(reducer(undefined, { type:"" })).toEqual(
        {     
            isDrawerOpen:false,
            todoId:-1
        }
      )
});

test("call openDrawerFunc and change todoId to 1, and isDrawerOpen:true",()=>{
    const previousState:IDrawerType ={
        isDrawerOpen:false,
        todoId:-1
    }
    expect(reducer(previousState,openDrawerFunc(1))).toEqual(        {     
        isDrawerOpen:true,
        todoId:1
    })
})


test("call closeDrawerFunc and change todoId to -11, and isDrawerOpen:false",()=>{
    const previousState:IDrawerType ={
        isDrawerOpen:false,
        todoId:-1
    }
    expect(reducer(previousState,closeDrawerFunc())).toEqual(        {     
        isDrawerOpen:false,
        todoId:-1
    })
})