import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import COLORS from '../constants/colors';
import Button from '../components/Button';
import { Ionicons } from '@expo/vector-icons';
import * as AuthService from '../api/authService';

export default function ChangePassword({ navigation }) {
    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState();
    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const [isPasswordConfirmShown, setIsPasswordConfirmShown] = useState(true);

    const checkPassword = () => {
        return confirmPassword === password;
    };
    const handleChangePassword = async () => {
        if (checkPassword()) {
            const res = await AuthService.changePassword({ token, password });
            if (res.type === 'success') {
                alert('Thay đổi mật khẩu thành công');
                navigation.navigate('Login');
            } else {
                alert('Token không hợp lệ');
            }
        } else {
            alert('Mật khẩu không trùng khớp');
        }
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 16 }}>
                    <Text
                        style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            marginVertical: 12,
                            color: COLORS.black,
                        }}
                    >
                        Thay đổi mật khẩu
                    </Text>
                </View>

                <View style={{ marginBottom: 8 }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 400,
                            marginVertical: 8,
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
                            placeholder='Nhập token của bạn'
                            placeholderTextColor={COLORS.black}
                            keyboardType='default'
                            value={token}
                            onChangeText={(newText) => setToken(newText)}
                            style={{
                                width: '100%',
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 8 }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 400,
                            marginVertical: 8,
                        }}
                    >
                        Mật khẩu
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
                            placeholder='Nhập mật khẩu'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            value={password}
                            onChangeText={(newText) => setPassword(newText)}
                            style={{
                                width: '100%',
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: 'absolute',
                                right: 12,
                            }}
                        >
                            {isPasswordShown == true ? (
                                <Ionicons
                                    name='eye-off'
                                    size={24}
                                    color={COLORS.black}
                                />
                            ) : (
                                <Ionicons
                                    name='eye'
                                    size={24}
                                    color={COLORS.black}
                                />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>

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
                        placeholder='Nhập lại mật khẩu'
                        placeholderTextColor={COLORS.black}
                        secureTextEntry={isPasswordConfirmShown}
                        value={confirmPassword}
                        onChangeText={(newText) => setConfirmPassword(newText)}
                        style={{
                            width: '100%',
                        }}
                    />

                    <TouchableOpacity
                        onPress={() =>
                            setIsPasswordConfirmShown(!isPasswordConfirmShown)
                        }
                        style={{
                            position: 'absolute',
                            right: 12,
                        }}
                    >
                        {isPasswordConfirmShown == true ? (
                            <Ionicons
                                name='eye-off'
                                size={24}
                                color={COLORS.black}
                            />
                        ) : (
                            <Ionicons
                                name='eye'
                                size={24}
                                color={COLORS.black}
                            />
                        )}
                    </TouchableOpacity>
                </View>

                <Button
                    title='Thay đổi mật khẩu'
                    filled
                    style={{
                        marginTop: 12,
                        marginBottom: 4,
                    }}
                    onPress={handleChangePassword}
                />
            </View>
        </SafeAreaView>
    );
}
