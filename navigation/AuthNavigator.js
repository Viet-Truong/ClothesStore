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
    Category,
} from '../screens';
import BottomNavigator from '../navigation/BottomNavigator';
import Product from '../screens/Product';

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
