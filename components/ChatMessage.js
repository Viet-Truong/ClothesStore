import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import CustomText from './CustomText';

const bubbleData = [
    {
        text: 'Chào bạn, bạn cần giúp đỡ gì?',
        iAmSender: false,
        time: '12:15 PM',
    },
    {
        text: 'Sản phẩm áo mã 373D1 còn hàng không ?',
        iAmSender: true,
        time: '12:20 PM',
    },
    {
        text: 'Hiện tại thì áo đó vẫn còn hàng và giá của áo đó là 290.000đ',
        iAmSender: false,
        time: '12:22 PM',
    },
    {
        text: 'Hiện tại thì đang còn size M và L nha!',
        iAmSender: false,
        time: '12:25 PM',
    },
];

const InputWrap = styled.View`
    height: 64px;
    width: 100%;
    border: 1px solid ${Colors?.input_border};
    border-radius: 164px;
    padding: 14px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const InputText = styled.TextInput`
    height: 33px;
    border-right-width: 1px;
    border-right-color: ${Colors?.input_border};
    font-size: 14px;
    font-weight: 400;
    width: 70%;
    margin-right: 14px;
    margin-left: 12px;
`;

const ChatContainer = styled.View`
    height: 90%;
    width: 100%;
    justify-content: flex-end;
`;

const BubbleContainer = styled.Pressable`
    align-items: ${({ iAmSender }) => (iAmSender ? 'flex-end' : 'flex-start')};
`;

const BubbleWrap = styled.View`
    padding-vertical: 10px;
    padding-horizontal: 20px;
    border-radius: 100px;
    background-color: ${({ iAmSender }) =>
        iAmSender ? Colors?.orange : Colors?.yellow};
    max-width: 80%;
    margin-bottom: 6px;
`;

const isSenderSame = ({ currentMessage, prevMessage }) => {
    return currentMessage.time === (prevMessage?.time || '');
};

const isNextSenderSame = ({ currentMessage, nextMessage }) => {
    return currentMessage.time === (nextMessage?.time || '');
};

const renderItem = ({ item, index }) => {
    const iAmSender = item?.iAmSender;
    const previousTimeIsSame = isSenderSame({
        currentMessage: item,
        prevMessage: bubbleData[index - 1],
    });

    const nextTimeIsSame = isNextSenderSame({
        currentMessage: item,
        nextMessage: bubbleData[index + 1],
    });

    return (
        <BubbleContainer iAmSender={iAmSender}>
            <BubbleWrap iAmSender={iAmSender}>
                <CustomText
                    align={iAmSender ? 'right' : 'left'}
                    fontSize={15}
                    style={{ lineHeight: 20 }}
                    fontWeight='400'
                >
                    {item?.text}
                </CustomText>
            </BubbleWrap>

            {previousTimeIsSame && (
                <CustomText
                    align={iAmSender ? 'right' : 'left'}
                    fontSize={12}
                    top={10}
                    bottom={5}
                    color={Colors?.timeColor}
                    fontWeight='400'
                >
                    {item?.time}
                </CustomText>
            )}

            {!previousTimeIsSame && !nextTimeIsSame && (
                <CustomText
                    align={iAmSender ? 'right' : 'left'}
                    fontSize={12}
                    top={10}
                    bottom={5}
                    color={Colors?.timeColor}
                    fontWeight='400'
                >
                    {item?.time}
                </CustomText>
            )}
        </BubbleContainer>
    );
};

const ChatMessage = () => {
    return (
        <ChatContainer>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={bubbleData}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${index} + ${Date.now()}`}
            />

            <InputWrap>
                <Ionicons name='add-circle' size={24} color={Colors.black} />
                <InputText placeholder='Type Message...' />
                <Ionicons name='send' size={24} color={Colors.black} />
            </InputWrap>
        </ChatContainer>
    );
};

export default ChatMessage;
