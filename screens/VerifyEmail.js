import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput } from 'react-native';

import COLORS from '../constants/colors';
import Button from '../components/Button';
import * as AuthService from '../api/authService';
import { AuthContext } from '../context/AuthContext';

export default function VerifyEmail({ navigation }) {
    const [token, setToken] = useState('');
    const { setAuth } = useContext(AuthContext);
    const handleVerifyEmail = () => {
        const res = AuthService.verifyToken(token);
        if (res.type === 'error') {
            alert('Token không hợp lệ!');
        } else {
            navigation.navigate('Home');
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
                            marginVertical: 12,
                            color: COLORS.black,
                        }}
                    >
                        Token
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
                            placeholder='Nhập token'
                            placeholderTextColor={COLORS.black}
                            keyboardType='default'
                            value={token}
                            onChangeText={(newText) => setToken(newText)}
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
                        onPress={handleVerifyEmail}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
