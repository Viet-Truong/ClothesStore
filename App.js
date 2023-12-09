import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './screens/Chat';
import { Login, Register, Welcome, Home, VerifyEmail, SendToken, ChangePassword } from './screens';
import AuthNavigator from './navigation/AuthNavigator';
import { AuthProvider } from './context/AuthContext';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <AuthNavigator />
            </NavigationContainer>
        </AuthProvider>
    );
}
