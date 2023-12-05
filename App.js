import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, Register, Welcome, Home } from './screens';
import AuthNavigator from './navigation/AuthNavigator';


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <AuthNavigator/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
