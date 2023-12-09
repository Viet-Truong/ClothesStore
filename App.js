import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    Login,
    Register,
    Welcome,
    Home,
    VerifyEmail,
    ChangePassword,
    SendToken,
} from './screens';
import { AuthProvider } from './context/AuthContext';
import Chat from './screens/Chat';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Welcome'>
                    <Stack.Screen
                        name='Home'
                        component={Home}
                        options={{
                            headerShown: false,
                        }}
                    />
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
                        name='Chat'
                        component={Chat}
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
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    );
}
