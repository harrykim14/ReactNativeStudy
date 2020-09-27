import React, {useContext} from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {LoadingContext} from '~/Context/Loading';
import LoadingScreen from '~/Components/LoadingScreen';
import PortfolioMain from '~/Components/PortfolioMain';
import Profile from '~/Screens/Profile';
import Project from '~/Screens/Project';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainPage = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name = "Portfolio"
            component = {PortfolioMain}
            options ={{
                title: 'Portfolio',
                headerTintColor: '#87CEEB',
                headerStyle : {
                    backgroundColor : '#f4f4f4',
                    borderBottomWidth : 0,
                },
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
            />
            <Stack.Screen
            name = "Profile"
            component={Profile}
            options={{
                title: 'Profile',
                headerStyle : {
                    backgroundColor : '#f4f4f4',
                    borderBottomWidth : 0,
                },
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
            />
            <Stack.Screen
            name = "Project"
            component = {Project}
            options = {{
                title:'Project',
                headerStyle : {
                    backgroundColor : '#f4f4f4',
                    borderBottomWidth : 0,
                },
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
            />
        </Stack.Navigator>
    )
}


export default () => {
    const { isLoading } = useContext<ILoadingContext>(LoadingContext);
    
    return (
        <NavigationContainer>
        {isLoading ? <LoadingScreen/> : <MainPage/>}
        </NavigationContainer>
    )

}