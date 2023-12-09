import React from 'react';
import { useContext } from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';

import { AuthContext } from '../context/AuthContext';

export default function Home({ navigation }) {
    const { logout, auth } = useContext(AuthContext);
    const handleLogout = () => {
        logout();
        navigation.replace('Login');
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View>
                <Text>Name:{auth.data.fullname}</Text>
                <Text>Email: {auth.data.email}</Text>
            </View>
            <View
                style={{
                    marginVertical: 60,
                }}
            >
                <Button
                    title='Log out'
                    filled
                    onPress={() => handleLogout()}
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                />
            </View>
        </SafeAreaView>
    );
}
