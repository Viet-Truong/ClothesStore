import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import COLORS from '../constants/colors';
import BuyerNavigator from './BuyerNavigator';
import SellerNavigator from './SellerNavigator';
import { AuthContext } from '../context/AuthContext';

const Tab = createBottomTabNavigator();

function BottomNavigator() {
    const { auth } = useContext(AuthContext);
    const role = auth.data.role;
    console.log(role);
    return role === 'Người bán hàng' ? (
        <SellerNavigator></SellerNavigator>
    ) : (
        <BuyerNavigator></BuyerNavigator>
    );
}

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: COLORS.white,
        borderRadius: 15,
        height: 50,
    },

    viewIconActive: {
        position: 'absolute',
        top: -22,
        backgroundColor: COLORS.white,
        borderRadius: 50 / 2,
        borderWidth: 3,
        width: 50,
        height: 50,
        borderColor: COLORS.secondary,
        alignItems: 'center',
        justifyContent: 'center',
    },

    viewIconNoneActive: {},
});

export default BottomNavigator;
