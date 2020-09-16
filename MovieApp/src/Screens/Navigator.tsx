import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// 내비게이션 컨테이너는 내비게이션을 다루기 위한 State, 링크 등을 관리함
// 항상 마지막은 NavigationContainer로 감싸서 제공할 것

import {UserContext} from '~/Context/User';
import Loading from '~/Screens/Loading';
import Login from '~/Screens/Login';
import MovieHome from '~/Screens/MovieHome';
import MovieDetail from '~/Screens/MovieDetail';
// 내비게이터에서 필요한 화면을 전부 정의

const Stack = createStackNavigator();
// StackNavigator 인스턴스 생성

const LoginNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name = "Login"
            component = {Login}
            options={{
                title: 'MOVIEAPP',
                headerTransparent:true,
                headerTintColor:'#E70915',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}
            />
        </Stack.Navigator>
    )
}
// 로그인 내비게이터에선 StackNavigator를 사용하여 Login 컴포넌트를 불러옴

const MovieNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name = "MovieHome"
            component={MovieHome}
            options={{
                title: 'MOVIEAPP',
                headerTintColor: '#E70915',
                headerStyle: {
                    backgroundColor: '#141414',
                    borderBottomWidth: 0,
                },
                headerTitleStyle:{
                    fontWeight: 'bold',
                }
            }}
            />
            <Stack.Screen
            name="MovieDetail"
            component={MovieDetail}
            options={{
                title: 'MOVIEAPP',
                headerTintColor: '#E70915',
                headerStyle: {
                    backgroundColor: '#141414',
                    borderBottomWidth: 0,
                },
                headerTitleStyle:{
                    fontWeight: 'bold',
                },
                headerBackTitleVisible: false,              
            }}
            />
        </Stack.Navigator>
    )
}
// 무비 내비게이터에선 StackNavigator를 사용하여 MovieHome, MovieDetail화면을 쌓아 보여줌

export default () => {
    const {isLoading, userInfo} = useContext<IUserContext>(UserContext);

    console.log(isLoading);
    console.log(userInfo);
    if(isLoading === false){
        return <Loading />
    }
    return (
        <NavigationContainer>
            {userInfo ? <MovieNavigator /> : <LoginNavigator />}
        </NavigationContainer>
    )
}
// Export 하는 과정에서 isLodaing이 true이고 userInfo가 undefined가 아니라면 MovieNavigator를, 아니면 LoginNavigator를 불러오도록 설정