import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput } from 'react-native';

import COLORS from '../constants/colors';
import Button from '../components/Button';
import * as AuthService from '../api/authService';

export default function SendToken({ navigation }) {
    const [email, setEmail] = useState('');
    const handleSendToken = async () => {
        const res = await AuthService.sendToken(email);
        if (res.type === 'error') {
            alert('Email không hợp lệ');
        } else {
            navigation.navigate('ChangePassword');
        }
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text
                        style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            marginVertical: 22,
                            color: COLORS.black,
                        }}
                    >
                        Email
                    </Text>

                    <View
                        style={{
                            width: '100%',
                            height: 48,
                            borderColor: COLORS.black,
                            borderWidth: 1,
                            borderRadius: 8,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingLeft: 22,
                        }}
                    >
                        <TextInput
                            placeholder='Nhập email'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            value={email}
                            onChangeText={(newText) => setEmail(newText)}
                            style={{
                                width: '100%',
                            }}
                        />
                    </View>

                    <Button
                        title='Xác thực tài khoản'
                        filled
                        style={{
                            marginTop: 18,
                            marginBottom: 4,
                        }}
                        onPress={handleSendToken}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
