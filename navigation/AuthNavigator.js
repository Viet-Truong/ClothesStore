import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, Register, Welcome } from '../screens';
import BottomNavigator from '../navigation/BottomNavigator';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen
                    name='Welcome'
                    component={Welcome}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='Register'
                    component={Register}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='Home'
                    component={BottomNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
    );
}

export default AuthNavigator;