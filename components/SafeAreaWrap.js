import { View, SafeAreaView } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import Colors from '../constants/colors';

const ImageBackgroundCard = styled.ImageBackground`
    flex: 1;
    background-color: ${({ bgColor }) => bgColor || Colors?.white};
    height: 200px;
`;

const CardSafeAreaWrap = ({
    children,
    style,
    bg = Colors.white,
    height = '100%',
    width = '100%',
    safeAreaBg = Colors.white,
    source = '',
}) => {
    return (
        <ImageBackgroundCard
            bgColor={safeAreaBg}
            source={source}
            resizeMode='cover'
        >
            <SafeAreaView
                style={{
                    flex: 1,
                }}
            >
                <View
                    style={{
                        backgroundColor: bg,
                        height,
                        width,
                        ...style,
                    }}
                >
                    {children}
                </View>
            </SafeAreaView>
        </ImageBackgroundCard>
    );
};

export default CardSafeAreaWrap;
