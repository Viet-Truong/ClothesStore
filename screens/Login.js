import React, { useState, useEffect, useContext } from 'react';
import {
    View,
    Text,
    Image,
    Pressable,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import COLORS from '../constants/colors';
import Button from '../components/Button';
import { AuthContext } from '../context/AuthContext';

export default function Login({ navigation }) {
    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { auth, login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(email, password);
        if (auth) {
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
                            marginTop: 22,
                            color: COLORS.black,
                        }}
                    >
                        Welcome Back ! 👋
                    </Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 400,
                            marginVertical: 8,
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
                            placeholder='Nhập địa chỉ email'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            value={email}
                            onChangeText={(newText) => setEmail(newText)}
                            style={{
                                width: '100%',
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
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
                            onChangeText={(newPassword) =>
                                setPassword(newPassword)
                            }
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

                <Button
                    title='Đăng nhập'
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                    onPress={handleLogin}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 20,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10,
                        }}
                    />
                    <Text style={{ fontSize: 14 }}>Đăng nhập với</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10,
                        }}
                    />
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <TouchableOpacity
                        onPress={() => console.log('Pressed')}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10,
                        }}
                    >
                        <Image
                            source={require('../assets/facebook.png')}
                            style={{
                                height: 24,
                                width: 24,
                                marginRight: 8,
                            }}
                            resizeMode='contain'
                        />

                        <Text>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log('Pressed')}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10,
                        }}
                    >
                        <Image
                            source={require('../assets/google.png')}
                            style={{
                                height: 24,
                                width: 24,
                                marginRight: 8,
                            }}
                            resizeMode='contain'
                        />

                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginVertical: 22,
                    }}
                >
                    <Text style={{ fontSize: 16, color: COLORS.black }}>
                        Bạn chưa có tài khoản?
                    </Text>
                    <Pressable onPress={() => navigation.navigate('Register')}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: COLORS.primary,
                                fontWeight: 'bold',
                                marginLeft: 3,
                            }}
                        >
                            Đăng kí
                        </Text>
                    </Pressable>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginVertical: 5,
                    }}
                >
                    <Pressable onPress={() => navigation.navigate('SendToken')}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: COLORS.primary,
                                fontWeight: 'bold',
                                marginLeft: 3,
                            }}
                        >
                            Quên mật khẩu
                        </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}
