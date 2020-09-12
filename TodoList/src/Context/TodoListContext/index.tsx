import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface Props{
    children: JSX.Element | Array<JSX.Element>;
}
//createContext 메서드로 Context에 Array형 todoList와 사용할 메서드 addTodoList, removeTodoList를 정의
// 함수를 정의할 때엔 매개변수의 타입(todo: string)과 리턴형(void)을 명시
const TodoListContext = createContext<ITodoListContext>({
    todoList:[],
    addTodoList: (todo: string):void => {},
    removeTodoList: (index: number): void =>{},
});

const TodoListContextProvider = ({ children }: Props) => {
    const[todoList, setTodoList] = useState<Array<String>>([]);

    const addTodoList = (todo:string): void =>{
        const list = [...todoList, todo];
        setTodoList(list);
        AsyncStorage.setItem('todoList', JSON.stringify(list));
    }

    // static void addTodoList(String todo){
    // 
    //}

    const removeTodoList = (index:number): void =>{
        let list = [...todoList];
        list.splice(index,1);
        setTodoList(list);
        AsyncStorage.setItem('todoList', JSON.stringify(list));
    }

    const initData = async () =>{
        try{
            const list = await AsyncStorage.getItem('todoList');
            if(list !==null){
                setTodoList(JSON.parse(list));
            }
        } catch (e){
            console.log(e);
        }
    }

    useEffect(
        ()=>{ initData(); }, // 첫번째 매개변수
        []);                 // 두번째 매개변수
        
    // 첫번째 매개변수에 함수를 설정하여 useEffect의 역할을 정의
    // 두번째 매개변수에는 배열을 전달하는데 이 배열이 전달되면 클래스형 컴포넌트의 componentDidMount와 같은 역할을 수행한다
    // 이 useEffect는 딱 한번만 호출되는 것

    return (
        <TodoListContext.Provider 
        value ={{
            todoList,
            addTodoList,
            removeTodoList,
        }}>
            {children}
        </TodoListContext.Provider>
    )
}
export {TodoListContextProvider, TodoListContext};