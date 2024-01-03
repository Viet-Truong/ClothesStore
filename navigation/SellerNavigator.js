import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import COLORS from '../constants/colors';
import Home from '../screens/Home';
import Message from '../screens/Message';
import User from '../screens/User';
import Category from '../screens/Category';
import { AuthContext } from '../context/AuthContext';
import Product from './../screens/Product';

const Tab = createBottomTabNavigator();

function SellerNavigator() {
    const { auth } = useContext(AuthContext);
    const role = auth.data.role;
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBarStyle,
            }}
        >
            <Tab.Screen
                name='HomeScreen'
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={
                                focused
                                    ? styles.viewIconActive
                                    : styles.viewIconNoneActive
                            }
                        >
                            <Icon
                                name={focused ? 'md-home' : 'md-home-outline'}
                                size={22}
                                color={
                                    focused ? COLORS.secondary : COLORS.black
                                }
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name='Product'
                component={Product}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={
                                focused
                                    ? styles.viewIconActive
                                    : styles.viewIconNoneActive
                            }
                        >
                            <Icon
                                name={
                                    focused
                                        ? 'add-outline'
                                        : 'add-circle-outline'
                                }
                                size={22}
                                color={
                                    focused ? COLORS.secondary : COLORS.black
                                }
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name='Category'
                component={Category}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={
                                focused
                                    ? styles.viewIconActive
                                    : styles.viewIconNoneActive
                            }
                        >
                            <Icon
                                name={focused ? 'list-circle' : 'list'}
                                size={22}
                                color={
                                    focused ? COLORS.secondary : COLORS.black
                                }
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name='Message'
                component={Message}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={
                                focused
                                    ? styles.viewIconActive
                                    : styles.viewIconNoneActive
                            }
                        >
                            <Icon
                                name={
                                    focused
                                        ? 'notifications'
                                        : 'notifications-outline'
                                }
                                size={22}
                                color={
                                    focused ? COLORS.secondary : COLORS.black
                                }
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name='User'
                component={User}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={
                                focused
                                    ? styles.viewIconActive
                                    : styles.viewIconNoneActive
                            }
                        >
                            <Icon
                                name={
                                    focused
                                        ? 'person-circle'
                                        : 'person-circle-outline'
                                }
                                size={22}
                                color={
                                    focused ? COLORS.secondary : COLORS.black
                                }
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: COLORS.white,
        borderRadius: 15,
        height: 50,
        paddingHorizontal: 20,
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

export default SellerNavigator;
