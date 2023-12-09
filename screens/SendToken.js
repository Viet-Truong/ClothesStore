import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';

import COLORS from '../constants/colors';
import Button from '../components/Button';

export default function SendToken({ navigation }) {
    const [email, setEmail] = useState('');
    const handleSendToken = () => {};
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
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
                            placeholder='Nhập email'
                            placeholderTextColor={COLORS.black}
                            keyboardType='address-email'
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
