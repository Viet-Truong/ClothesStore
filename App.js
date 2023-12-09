import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './screens/Chat';
import { Login, Register, Welcome, Home, VerifyEmail, SendToken, ChangePassword } from './screens';
import AuthNavigator from './navigation/AuthNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
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
            <NavigationContainer>
                <AuthNavigator />
            </NavigationContainer>
        </>
    );
}
