import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
flex-direction: row;`;

const ProfileImageContainer = Styled.View`
padding: 16px;`;

const ProfileImage = Styled.Image`
border-radius: 5px;`;

const ProfileContent = Styled.View`
flex: 1;
padding: 16px;
justify-content: space-around;`;

const DiscriptionContainer = Styled.View`
flex-direction: row;`;

const ProfileItem = Styled.View`
flex: 1;
align-items: center;`;

const DescriptionTitle = Styled.Text`
font-weight: 700;`;

const DescriptionText = Styled.Text`
font-weight: 300;`;

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
            <ProfileContent>
                <DiscriptionContainer>
                    <ProfileItem>
                        <DescriptionTitle>이름</DescriptionTitle>
                        <DescriptionText>ㄱㅎㅊ</DescriptionText>
                    </ProfileItem>
                </DiscriptionContainer>
            </ProfileContent>
        </Container>
    )
}