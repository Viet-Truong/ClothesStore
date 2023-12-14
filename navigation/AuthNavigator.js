import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Login,
    Register,
    Welcome,
    VerifyEmail,
    SendToken,
    ChangePassword,
    Cart,
    ProductDetail,
    AddProduct,
} from '../screens';
import BottomNavigator from '../navigation/BottomNavigator';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='AddProduct'>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='AddProduct'
                component={AddProduct}
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
            <Stack.Screen
                name='VerifyEmail'
                component={VerifyEmail}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='SendToken'
                component={SendToken}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='ChangePassword'
                component={ChangePassword}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='Cart'
                component={Cart}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='ProductDetail'
                component={ProductDetail}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
