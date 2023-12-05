import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, Register, Welcome, Home , Cart } from './screens';

import AuthNavigator from './navigation/AuthNavigator';


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
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
                    component={Home}
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
            </Stack.Navigator>
            <AuthNavigator/>
        </NavigationContainer>
    );s
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
