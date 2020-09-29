import React from 'react'
import { Image, ScrollView, ImageSourcePropType } from 'react-native';
import Styled from 'styled-components/native';

const ProfileContainer = Styled.View`
flex:1;`;

const ProfileImageContainer = Styled.TouchableHighlight`
padding: 16px;`;

const ProfileImage = Styled.Image`
border-radius: 3px;`;

interface Props {
    image: string;
    url: string;
    onPress: () => void;
}

const Profile = ({image, url, onPress}:Props) => {
    return(
        <ProfileContainer>
            <ProfileImageContainer>
                <ProfileImage
                source = {{uri: image}}
                style= {{ width: 150, height: 150}}/>
            </ProfileImageContainer>
        </ProfileContainer>
    )
}

export default Profile;
