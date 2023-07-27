import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useCallback,useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES, FONTS } from '../constants'
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'
import { GiftedChat, Send, Bubble } from 'react-native-gifted-chat'

import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../constants/themeContext'
import { THEME } from '../constants/theme'

const PersonalChat = ({ navigation }) => {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello!',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                   
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, messages)
        )
    }, [])

    // change button of send
    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View
                    style={{
                        height: 36,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 36,
                        borderRadius: 18,
                        backgroundColor: COLORS.primary,
                        marginRight: 5,
                        marginBottom: 5,
                    }}
                >
                    <FontAwesome name="send" size={12} color={COLORS.white} />
                </View>
            </Send>
        )
    }

    // customize sender messages
    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: COLORS.primary,
                    },
                }}
                textStyle={{
                    right: {
                        color: COLORS.white,
                    },
                }}
            />
        )
    }

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
        <SafeAreaView style={{ flex: 1, color: COLORS.secondaryWhite }}>
            <themeContext.Provider value = {mode === true ? THEME.dark : THEME.light}>
            <StatusBar style="light" backgroundColor={theme.background} />
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 22,
                    backgroundColor: theme.background,
                    height: 60,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: theme.background,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Contacts')}
                    >
                        <MaterialIcons
                            name="keyboard-arrow-left"
                            size={24}
                            color={theme.color}
                        />
                    </TouchableOpacity>
                    <Text style={{ ...FONTS.h4, marginLeft: 8, color: theme.color }}>
                        Sanjeevani P
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: theme.background,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => console.log('search')}
                        style={{
                            marginRight: 8,
                        }}
                    >
                        <MaterialIcons
                            name="search"
                            size={24}
                            color={theme.color}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => console.log('More options')}
                        style={{
                            marginRight: 8,
                        }}
                    >
                        <MaterialIcons
                            name="menu"
                            size={24}
                            color={theme.color}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <GiftedChat
                messages={messages}
                onSend={(messages) => onSend(messages)}
                user={{
                    _id: 1,
                }}
                renderBubble={renderBubble}
                alwaysShowSend
                renderSend={renderSend}
                scrollToBottom
                    textInputStyle={{
                    color: theme.color,
                    borderRadius: 22,
                    borderWidth: 1,
                    borderColor: theme.tertiaryWhite,
                    marginRight: 6,
                    paddingHorizontal: 12,
                    backgroundColor: theme.background
                    }}
                    style={{backgroundColor: theme.background}}
                />
                </themeContext.Provider>
        </SafeAreaView>
    )
}

export default PersonalChat
