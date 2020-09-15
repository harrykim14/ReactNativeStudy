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

const Stack = createStackNavigator();

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