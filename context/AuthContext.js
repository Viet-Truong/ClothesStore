import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as AuthService from '../api/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState('');

    const login = async (email, password) => {
        const res = await AuthService.login({ email, password });
        if (res.type === 'success') {
            await AsyncStorage.setItem('auth', JSON.stringify(res.data));
            setAuth(res);
        } else {
            alert('Email hoặc mật khẩu sai');
        }
    };

    const logout = () => {
        setAuth(null);
        AsyncStorage.removeItem('auth');
        alert('Đã đăng xuất');
    };

    const isLoggedIn = async () => {
        if (auth.data !== null) {
            return true;
        }
        return false;
    };

    const register = async (name, email, password, phone_number, role) => {
        const res = await AuthService.register({
            email,
            password,
            name,
            phone_number,
            role,
        });
        if (res.type === 'success') {
            await AsyncStorage.setItem('auth', JSON.stringify(res.data));
            setAuth(res);
            return true;
        } else {
            alert('Email hoặc số điện thoại đã tồn tại');
            return false;
        }
    };

    return (
        <AuthContext.Provider
            value={{ auth, login, logout, isLoggedIn, register }}
        >
            {children}
        </AuthContext.Provider>
    );
};
