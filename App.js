import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import { AuthProvider } from './context/AuthContext';

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <AuthNavigator />
            </NavigationContainer>
        </AuthProvider>
    );
}
