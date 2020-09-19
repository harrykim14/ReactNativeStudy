import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
padding: 8px;`;

const Icon = Styled.Image``;

interface Props {
    iconName:
    |'camera'
    |'live'
    |'send'
    |'dotMenu'
    |'favorite'
    |'comment'
    |'bookmark'
    |'menu';
    style?: object;
    onPress?: () => void;
}

const IconButton = ({ iconName, style, onPress }: Props) =>{
    const imageSource = {
        camera: require('~/Asset/Images/ic_camera.png'),
        live: require('~/Asset/Images/ic_list.png'),
        send: require('~/Asset/Images/ic_send.png'),
        dotMenu: require('~/Asset/Images/ic_dot_menu.png'),
        favorite: require('~/Asset/Images/Tabs/ic_favorite_outline.png'),
        comment: require('~/Asset/Images/ic_comment.png'),
        bookmark: require('~/Asset/Images/ic_bookmark.png'),
        menu: require('~/Asset/Images/ic_menu.png'),
    }

    return (
        <Container
        style={style}
        onPress ={() => {
            if (onPress && typeof onPress === 'function'){
                onPress();
            }
        }}>
            <Icon source ={imageSource[iconName]} />
        </Container>
    )
}

export default IconButton;