import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { UserContext } from '~/Context/User';
import Loading from '~/Components/Loading';

import Profile from '~/Screens/Profile';
import Project from '~/Screens/Project';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MyProfile = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name = "Profile"
            component = {Profile}
            options={{ title: 'Profile'}} />
        </Stack.Navigator>
    )
}

