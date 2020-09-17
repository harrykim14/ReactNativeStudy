import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const defaultContext: IUserContext = {
    isLoading: false,
    userInfo: undefined,
    login: (email:string, password: string) => {},
    getUserInfo: () =>{},
    logout: () => {},
};
// 컨텍스트의 타입은 @types index.d.ts에서 지정
// 인터페이스 형식으로 지정한 타입은 Props처럼 해당 인터페이스 내에 정의된 타입에 맞춰서 초기값을 지정

const UserContext = createContext(defaultContext);

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}
// JSX가 가지고 있는 Element를 children으로 받아 Props화

const UserContextProvider = ({children}: Props) =>{
    // @types/index.d.ts에 지정된 모든 Element를 가져와서 사용하기 때문에 IUserInfo를 사용할 수 있다
    const [userInfo, setUserInfo] = useState<IUserInfo | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const login = (email:string, password:string):void => {
        // Static void login(String email, String password){} 와 같은 것
        AsyncStorage.setItem('token', 'save your token')
        // AsyncStorage의 setItem은 Promise를 return하기 때문에 then, catch등을 이용할 수 있다
        .then(()=>{
            setUserInfo({
                name: 'dev-yakusza',
                email: 'dev.yakuza@gmail.com',
            });
            setIsLoading(true);
            // useState내에 있는 isLoding값을 true로 설정
        })
    };

    const getUserInfo = ():void => {
        AsyncStorage.getItem('token')
        .then(value =>{
            if(value){
                setUserInfo({
                    name: 'dev-yakuza',
                    email: 'dev.yakuza@gmail.com',
                })
            }
            setIsLoading(true);
        })
        .catch(()=>{
            setUserInfo(undefined);
            setIsLoading(true);
        })
    }
    
    const logout = ():void =>{
        AsyncStorage.removeItem('token');
        // AsyncStorage.setItem('token', 'save your token')로 저장한 토큰값을 삭제하여 로그아웃 처리
        setUserInfo(undefined);
    }

    useEffect(()=>{
        getUserInfo();
    }, []);

    return (
        <UserContext.Provider
        value={{
            isLoading,
            userInfo,
            login,
            getUserInfo,
            logout,
        }}>
            {children}
        </UserContext.Provider>
    );
}
export {UserContextProvider, UserContext};