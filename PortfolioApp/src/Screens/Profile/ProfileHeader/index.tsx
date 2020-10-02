import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
flex-direction: row;`;

const ProfileImageContainer = Styled.View`
padding: 16px;`;

const ProfileImage = Styled.Image`
border-radius: 5px;`;

interface Props {
    image: string;
}

const ProfileHeader = ({image}:Props) =>{
    return(
        <Container>
            <ProfileImageContainer>
                <ProfileImage
                source={{uri: image}}
                style= {{width: 150, height: 180}} />
            </ProfileImageContainer>
        </Container>
    )
}

export default ProfileHeader;