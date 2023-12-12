import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    Image,
    Pressable,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

import COLORS from '../constants/colors';
import Button from '../components/Button';
import { AuthContext } from '../context/AuthContext';

const ROLE = ['Người mua hàng', 'Người bán hàng'];

export default function Register({ navigation }) {
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [role, setRole] = useState(ROLE[0]);
    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const { register } = useContext(AuthContext);

    const handleRegister = async (e) => {
        e.preventDefault();
        const res = await register(
            fullname,
            email,
            password,
            phone_number,
            role
        );
        if (res) {
            navigation.navigate('VerifyEmail');
        }
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView>
                <View style={{ flex: 1, marginHorizontal: 22 }}>
                    <View style={{ marginVertical: 16 }}>
                        <Text
                            style={{
                                fontSize: 22,
                                fontWeight: 'bold',
                                marginTop: 8,
                                color: COLORS.black,
                            }}
                        >
                            Tạo tài khoản ! 👋
                        </Text>
                    </View>

                    <View style={{ marginBottom: 4 }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 400,
                                marginVertical: 8,
                            }}
                        >
                            Họ và tên
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
                                placeholder='Nhập họ và tên của bạn'
                                placeholderTextColor={COLORS.black}
                                keyboardType='default'
                                value={fullname}
                                onChangeText={(newText) => setFullname(newText)}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ marginBottom: 4 }}>
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
                                placeholder='Nhập địa chỉ Email'
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

                    <View style={{ marginBottom: 4 }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 400,
                                marginVertical: 8,
                            }}
                        >
                            Số điện thoại
                        </Text>

                        <View
                            style={{
                                width: '100%',
                                height: 48,
                                borderColor: COLORS.black,
                                borderWidth: 1,
                                borderRadius: 8,
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingLeft: 22,
                            }}
                        >
                            <TextInput
                                placeholder='+84'
                                placeholderTextColor={COLORS.black}
                                keyboardType='numeric'
                                style={{
                                    width: '16%',
                                    borderRightWidth: 1,
                                    borderLeftColor: COLORS.grey,
                                    height: '100%',
                                }}
                            />

                            <TextInput
                                placeholder='Nhập số điện thoại của bạn'
                                placeholderTextColor={COLORS.black}
                                keyboardType='numeric'
                                value={phoneNumber}
                                onChangeText={(newText) =>
                                    setPhoneNumber(newText)
                                }
                                style={{
                                    width: '80%',
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ marginBottom: 4 }}>
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
                                onPress={() =>
                                    setIsPasswordShown(!isPasswordShown)
                                }
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

                    <View style={{ marginBottom: 4 }}>
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
                                flexDirection: 'row',
                                marginVertical: 6,
                            }}
                        >
                            <SelectDropdown
                                data={ROLE}
                                defaultButtonText={'Mục đích'}
                                onSelect={(selectedItem, index) => {
                                    setRole(selectedItem);
                                }}
                                buttonTextAfterSelection={(
                                    selectedItem,
                                    index
                                ) => {
                                    // text represented after item is selected
                                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                                    return selectedItem;
                                }}
                                rowTextForSelection={(item, index) => {
                                    // text represented for each item in dropdown
                                    // if data array is an array of objects then return item.property to represent item in dropdown
                                    return item;
                                }}
                                buttonStyle={styles.dropdown1BtnStyle}
                                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                renderDropdownIcon={(isOpened) => {
                                    return (
                                        <Entypo
                                            name={
                                                isOpened
                                                    ? 'chevron-down'
                                                    : 'chevron-up'
                                            }
                                            size={24}
                                            color='black'
                                        />
                                    );
                                }}
                                dropdownIconPosition={'right'}
                                dropdownStyle={styles.dropdown1DropdownStyle}
                                rowStyle={styles.dropdown1RowStyle}
                                rowTextStyle={styles.dropdown1RowTxtStyle}
                            />
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            marginVertical: 6,
                        }}
                    >
                        <Checkbox
                            style={{ marginRight: 8 }}
                            value={isChecked}
                            onValueChange={setIsChecked}
                            color={isChecked ? COLORS.primary : undefined}
                        />

                        <Text>Tôi đồng ý với các điều khoản và chính sách</Text>
                    </View>

                    <Button
                        title='Đăng kí'
                        filled
                        style={{
                            marginTop: 12,
                            marginBottom: 4,
                        }}
                        onPress={handleRegister}
                    />

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginVertical: 14,
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
                        <Text style={{ fontSize: 14 }}>Đăng kí với</Text>
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
                            marginVertical: 24,
                        }}
                    >
                        <Text style={{ fontSize: 16, color: COLORS.black }}>
                            Bạn đã có tài khoản?
                        </Text>
                        <Pressable onPress={() => navigation.navigate('Login')}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: COLORS.primary,
                                    fontWeight: 'bold',
                                    marginLeft: 3,
                                }}
                            >
                                Đăng nhập
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    dropdownsRow: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: '5%',
    },

    dropdown1BtnStyle: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.black,
    },
    dropdown1BtnTxtStyle: {
        color: COLORS.black,
        textAlign: 'left',
        fontSize: 13,
    },
    dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdown1RowStyle: {
        backgroundColor: '#EFEFEF',
        borderBottomColor: '#C5C5C5',
    },
    dropdown1RowTxtStyle: {
        color: COLORS.black,
        textAlign: 'left',
        fontSize: 12,
    },
    divider: { width: 12 },
    dropdown2BtnStyle: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
    },
    dropdown2BtnTxtStyle: { color: COLORS.black, textAlign: 'left' },
    dropdown2DropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdown2RowStyle: {
        backgroundColor: '#EFEFEF',
        borderBottomColor: '#C5C5C5',
    },
    dropdown2RowTxtStyle: { color: COLORS.black, textAlign: 'left' },
});
