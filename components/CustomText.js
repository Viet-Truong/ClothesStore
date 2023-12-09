import React from 'react';
import Colors from '../constants/colors';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import Fonts from '../constants/Fonts';

const TextStyle = styled(Text)`
    font-size: ${({ fontSize }) => fontSize || 14}px;
    font-family: ${({ fontFamily }) => fontFamily || 'Graphik-Regular'};
    font-style: normal;
    font-weight: ${({ fontWeight }) => fontWeight || '400'};
    color: ${({ color }) => color};
    margin-top: ${({ top }) => top || 0}px;
    margin-right: ${({ right }) => right || 0}px;
    margin-left: ${({ left }) => left || 0}px;
    margin-bottom: ${({ bottom }) => bottom || 0}px;
    text-align: ${({ align }) => align || 'left'};
    text-transform: ${({ transform }) => transform || 'none'};
    max-width: ${({ maxWidth }) => maxWidth || 'auto'};
`;

const CustomText = ({
    fontSize = 14,
    fontFamily = Fonts.InterRegular,
    children,
    fontWeight,
    color = Colors.black,
    top,
    right,
    left,
    bottom,
    align,
    style,
    maxWidth,
    numberOfLines,
    transform,
}) => {
    return (
        <TextStyle
            top={top}
            right={right}
            left={left}
            fontWeight={fontWeight}
            color={color}
            bottom={bottom}
            fontSize={fontSize}
            customStyle={style}
            fontFamily={fontFamily}
            numberOfLines={numberOfLines}
            transform={transform}
            maxWidth={maxWidth}
            align={align}
        >
            {children}
        </TextStyle>
    );
};

export default CustomText;
