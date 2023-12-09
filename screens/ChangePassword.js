import React from 'react';
import { View, Text } from 'react-native';

export default function ChangePassword({ navigation }) {
    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const handleChangePassword = () => {};
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
                            keyboardType='text'
                            value={token}
                            onChange={(newText) => setToken(newText)}
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
                            onChange={(newText) => setPassword(newText)}
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
