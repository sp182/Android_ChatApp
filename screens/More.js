import { View, Text, TouchableOpacity, Switch } from 'react-native'
import React, {useState, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS } from '../constants'
import {
    AntDesign,
    MaterialIcons,
    MaterialCommunityIcons,
    Ionicons,
    Entypo,
} from '@expo/vector-icons'

import { EventRegister } from "react-native-event-listeners";
import themeContext from '../constants/themeContext';

const More = ({ navigation }) => {
    const theme = useContext(themeContext);
    const [mode, setMode] = useState(false);
    const [notify, setNotify] = useState(false);
    /*const toggleSwitch = () => {
        setMode(value != value);
        EventRegister.emit("changeTheme", value);
    };*/
    return (
        <SafeAreaView style={{ flex: 1 , }}>
            <PageContainer style={{backgroundColor: theme.background}}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 22,
                        paddingVertical: 22,
                        backgroundColor: theme.background,
                    }}
                >
                    <Text style={{ ...FONTS.h4 , color: theme.color}}>More</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 22,
                         backgroundColor: theme.background,
                    }}
                >
                    <View
                        style={{
                            height: 60,
                            width: 60,
                            borderRadius: 30,
                          //  backgroundColor: COLORS.secondaryWhite,
                            backgroundColor: theme.background,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <AntDesign name="user" size={24} color={theme.color} />
                    </View>
                    <View
                        style={{
                            flexDirection: 'column',
                            paddingHorizontal: 22,
                        }}
                    >
                        <Text style={{ ...FONTS.h4, marginVertical: 6, color:theme.color }}>
                            Sanjeevani P
                        </Text>
                        <Text style={{ ...FONTS.body3, color: COLORS.gray }}>
                            {' '}
                            + 91 - 750 - 749 - 8037
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            console.log('pressed')
                        }}
                    >
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={theme.color}
                            onPress={() => navigation.navigate('ProfileAccount')}
                        />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        paddingTop: 32,
                        backgroundColor: theme.background
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 22,
                            paddingVertical: 12,
                            backgroundColor: theme.background,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: theme.background,
                            }}
                        >
                            <Ionicons
                                name="chatbubble-outline"
                                size={24}
                                color={theme.color}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12, color: theme.color }}>
                                {' '}
                                Chats
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={theme.color}
                            onPress={() => navigation.navigate('Chats')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 22,
                            paddingVertical: 2,
                            backgroundColor: theme.background,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: theme.background,
                            }}
                        >
                            <Entypo
                                name="light-down"
                                size={24}
                                color={theme.color}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12 ,color: theme.color}} >
                                {' '}
                                Appearance
                            </Text>
                            
                            <Switch
                                style = {{ marginLeft: "45%", transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                                value={mode}
                                onValueChange={(value) => {
                                setMode(value);
                                    EventRegister.emit("changeTheme", value);
                                }}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 22,
                            paddingVertical: 2,
                         //   backgroundColor: theme.background
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Ionicons
                                name="notifications-outline"
                                size={24}
                                color={theme.color}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12, color: theme.color }}>
                                Notifications
                            </Text>
                        </View>
                        <Switch
                                style = {{ marginLeft: "45%", transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                                value={notify}
                                onValueChange={(value) => {
                                setNotify(value);
                                    EventRegister.emit("changeNotify", value);
                                }}
                            />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <MaterialCommunityIcons
                                name="shield-lock-open-outline"
                                size={24}
                                color={theme.color}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12, color: theme.color }}>
                                Privacy
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={theme.color}
                            onPress={() => alert("PRIVACY POLICY\n\nWe want you to have the best possible journeys with us, including on our website, so we use cookies to understand how you travel through our website. If that flies with you then please click 'allow all cookies' below to allow the setting of cookies on your browser and, where applicable, on your end device. Otherwise you can continue browsing with 'necessary cookies only' or make a 'selection' of relevant categories.")}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <AntDesign
                                name="folder1"
                                size={24}
                                color={theme.color}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12, color: theme.color }}>
                                Data usage
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={theme.color}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Ionicons
                                name="help-circle-outline"
                                size={24}
                                color={theme.color}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12, color:theme.color }}>
                                Help
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={theme.color}
                            onPress={() => alert("Report a bug\n\nFrequent Questions\n\nContact Support\n\nMake a suggestion")}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <MaterialCommunityIcons
                                name="email-outline"
                                size={24}
                                color={theme.color}
                            />
                            <Text style={{ ...FONTS.h4, paddingLeft: 12 , color: theme.color}}>
                                Invite Your Friends
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={theme.color}
                        />
                    </TouchableOpacity>
                </View>
            </PageContainer>
            </SafeAreaView>
    )
}

export default More
