import { View, Text } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, FONTS } from '../constants'
import { Chats, Contacts, More } from '../screens'
import { FontAwesome, Feather, Ionicons } from '@expo/vector-icons'

import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../constants/themeContext'
import { THEME } from '../constants/theme'

const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {

    const theme = useContext(themeContext);
    //Darkmode
    const [mode, setMode] = useState(false);
    useEffect(() => {
        let eventListener = EventRegister.addEventListener("changeTheme", (data) => {
            setMode(data);
            console.log(data);
        });
        return () => {
            EventRegister.removeEventListener(eventListener);
        }
    })

    return (
        <themeContext.Provider value = {mode === true ? THEME.dark : THEME.light}>
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: theme.pcolor,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    elevation: 0,
                    height: 60,
                },
            }}
        >
            <Tab.Screen
                name="Contacts"
                component={Contacts}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {focused ? (
                                    <>
                                        <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: theme.color,
                                            }}
                                        >
                                            Contacts
                                        </Text>
                                        <FontAwesome
                                            name="circle"
                                            size={8}
                                            color={theme.color}
                                        />
                                    </>
                                ) : (
                                    <Feather
                                        name="users"
                                        size={24}
                                        color={theme.color}
                                    />
                                )}
                            </View>
                        )
                    },
                }}
            />

            <Tab.Screen
                name="Chats"
                component={Chats}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {focused ? (
                                    <>
                                        <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: theme.color,
                                            }}
                                        >
                                            Chats
                                        </Text>
                                        <FontAwesome
                                            name="circle"
                                            size={8}
                                            color={theme.color}
                                        />
                                    </>
                                ) : (
                                    <Ionicons
                                        name="chatbubble-outline"
                                        size={24}
                                        color={theme.color}
                                    />
                                )}
                            </View>
                        )
                    },
                }}
            />

            <Tab.Screen
                name="More"
                component={More}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {focused ? (
                                    <>
                                        <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: theme.color,
                                            }}
                                        >
                                            More
                                        </Text>
                                        <FontAwesome
                                            name="circle"
                                            size={8}
                                            color={theme.color}
                                        />
                                    </>
                                ) : (
                                    <Feather
                                        name="more-horizontal"
                                        size={24}
                                        color={theme.color}
                                    />
                                )}
                            </View>
                        )
                    },
                }}
            />
            </Tab.Navigator>
            </themeContext.Provider>
    )
}

export default BottomTabNavigation
