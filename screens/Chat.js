import React from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import CardSafeAreaWrap from '../components/SafeAreaWrap';
import Colors from '../constants/colors';
import styled from 'styled-components/native';
import CustomText from '../components/CustomText';
import ChatMessage from './../components/ChatMessage';

const TextWrap = styled.View`
    padding-horizontal: 20px;
    padding-vertical: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const ProfileImage = styled.Image`
    height: 42px;
    width: 42px;
    border-radius: ${42 / 2}px;
    margin-right: 13px;
`;

const Row = styled.View`
    flex-direction: row;
    align-items: center;
`;

const ChatContainer = styled.View`
    height: 100%;
    width: 100%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: ${Colors?.white};
    padding: 20px;
`;

const ArrowContainer = styled.TouchableOpacity`
    height: 35px;
    width: 35px;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    position: relative;
    right: 12px;
`;

const Chat = ({ navigation }) => {
    return (
        <CardSafeAreaWrap
            source={''}
            bg={Colors?.black}
            safeAreaBg={Colors?.black}
        >
            <ImageBackground source={''} resizeMode='cover'>
                <StatusBar barStyle='light-content' />
                <TextWrap>
                    <Row>
                        <ProfileImage
                            source={{
                                uri: 'https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1183&q=80',
                            }}
                            resizeMode='cover'
                        />
                        <View>
                            <CustomText
                                fontSize={16}
                                fontWeight='700'
                                color={Colors?.white}
                            >
                                Shop
                            </CustomText>
                            <CustomText
                                fontSize={14}
                                top={2}
                                fontWeight='400'
                                color={Colors?.white}
                            >
                                Online
                            </CustomText>
                        </View>
                    </Row>
                </TextWrap>
            </ImageBackground>
            <ChatContainer>
                <ChatMessage />
            </ChatContainer>
        </CardSafeAreaWrap>
    );
};

export default Chat;
