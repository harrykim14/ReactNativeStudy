import React from 'react'
import { Image, ScrollView, ImageSourcePropType } from 'react-native';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';

import ProfileHeader from './ProfileHeader';
import ProfileBody from './ProfileBody';

const ProfileContainer = Styled.View`
flex:1;`;

const ProfileImageContainer = Styled.TouchableHighlight`
padding: 16px;`;

const ProfileImage = Styled.Image`
border-radius: 3px;`;

type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>;
interface Props {
    navigation: NavigationProp;
}

const Profile = ({navigation}:Props) => {
    return(
        <ProfileContainer>
            <ProfileImageContainer>
                <ProfileHeader
                image = './assets/profileimage.jpg'
                />
                <ProfileBody
                name = "Harry Kim"
                description = "Born at 19xx.xx.xx"
                />
            </ProfileImageContainer>
        </ProfileContainer>
    )
}

export default Profile;
