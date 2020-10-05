import React from 'react'
import { Image, ScrollView, ImageSourcePropType } from 'react-native';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';

import ProfileHeader from './ProfileHeader';
import ProfileBody from './ProfileBody';


const ProfileContainer = Styled.View`
flex:1;`;

const ProfileMainContainer = Styled.TouchableHighlight`
padding: 16px;`;

const ProfileSubContainer = Styled.View`
padding : 4px 4px;`;

const ProfileDescriptionTitle = Styled.Text`
font-weight: bold;`;

const ProfileDescriptionContext = Styled.Text`
font-weight: 400;`;

type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>;
interface Props {
    navigation: NavigationProp;
}

const Profile = ({navigation}:Props) => {
    return(
        <ProfileContainer>
            <ProfileMainContainer>
                <ProfileHeader
                image = './assets/profileimage.jpg'
                />
                <ProfileBody
                name = "Harry Kim"
                description = "Born at 19xx.xx.xx"
                />
            </ProfileMainContainer>
            <ProfileSubContainer>
                <ProfileDescriptionTitle>
                    "항상 호기심을 가지고 새 기술에 적극적으로."
                </ProfileDescriptionTitle>
                <ProfileDescriptionContext>
                    대학교에서는 생물학을 전공하였으며, 대학원에서는 뇌공학을 공부하였습니다. 건강문제로 대학원을 수료한 이후 더 넓은 세상을 바라보고자 개발자의 길을 택하였습니다. 첫 언어로 선택한 Java이후로 JavaScript에 흥미를 느껴 지금은 Node.js와 ReactJS, React-native등에 몰두하고 있습니다.
                </ProfileDescriptionContext>
            </ProfileSubContainer>
            <ProfileSubContainer>
                <ProfileDescriptionTitle>
                    Skills
                </ProfileDescriptionTitle>
                <ProfileDescriptionContext>
                    Java : 상
                    JavaScript : 상
                    HTML/CSS : 상
                    Node.js : 중
                    ReactJS : 중
                    ReactNative : 하
                </ProfileDescriptionContext>
            </ProfileSubContainer>
        </ProfileContainer>
    )
}

export default Profile;
