import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Button from '../components/Button';
import COLORS from '../constants/colors';

export default function Welcome({ navigation }) {
    return (
        <LinearGradient
            style={{
                flex: 1,
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View
                style={{
                    flex: 1,
                    top: 600,
                    paddingHorizontal: 22,
                    width: '100%',
                }}
            >
                <Button
                    title='Join Now'
                    onPress={() => navigation.navigate('Register')}
                    style={{
                        marginTop: 22,
                        width: '100%',
                    }}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 12,
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            color: COLORS.white,
                        }}
                    >
                        Already have an account ?
                    </Text>
                    <Pressable onPress={() => navigation.navigate('Login')}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: COLORS.white,
                                fontWeight: 'bold',
                                marginLeft: 4,
                            }}
                        >
                            Login
                        </Text>
                    </Pressable>
                </View>
            </View>
        </LinearGradient>
    );
}