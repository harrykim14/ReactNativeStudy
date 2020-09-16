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
// Props에서는 

const UserContextProvider = ({children}: Props) =>{
    const [userInfo, setUserInfo] = useState<IUserInfo | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const login = (email:string, password:string):void => {
        AsyncStorage.setItem('token', 'save your token')
        .then(()=>{
            setUserInfo({
                name: 'dev-yakusza',
                email: 'dev.yakuza@gmail.com',
            });
            setIsLoading(true);
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