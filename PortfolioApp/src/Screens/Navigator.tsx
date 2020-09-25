import React, {useContext} from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Loading from '~/Components/Loading';
import PortfolioMain from '~/Components/PortfolioMain';
import Profile from '~/Screens/Profile';
import Project from '~/Screens/Project';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

interface ILoadingContext {
    isLoading: boolean;
}

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
    const { isLoading } = useContext<ILoadingContext>()
    if(isLoading === false) {
        return <Loading />
    }

}