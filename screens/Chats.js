import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
} from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../components/PageContainer'
import { MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons'
import { FONTS, COLORS} from '../constants'
import { contacts } from '../constants/data'

import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../constants/themeContext'
import { THEME } from '../constants/theme'

const Chats = ({ navigation }) => {
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

    const [search, setSearch] = useState('')
    const [filteredUsers, setFilteredUsers] = useState(contacts)

    const handleSearch = (text) => {
        setSearch(text)
        const filteredData = contacts.filter((user) =>
            user.userName.toLowerCase().includes(text.toLowerCase())
        )
        setFilteredUsers(filteredData)
    }
      const renderItem = ({ item, index }) => (
        <TouchableOpacity
            key={index}
            onPress={() =>
                navigation.navigate('PersonalChat', {
                    userName: item.userName,
                })
            }
            style={[
                {
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 22,
                    borderBottomColor: theme.tertiaryWhite,
                    borderBottomWidth: 1,
                    color: theme.color
                },
                index % 2 !== 0
                    ? {
                          backgroundColor: theme.tertiaryWhite,
                      }
                    : null,
                index % 2 == 0
                    ? {
                          backgroundColor: theme.background,
                      }
                    : null,
            ]}
        >
            <View
                style={{
                    paddingVertical: 15,
                    marginRight: 22,
                }}
            >
                {item.isOnline && item.isOnline == true && (
                    <View
                        style={{
                            height: 14,
                            width: 14,
                            borderRadius: 7,
                            backgroundColor: COLORS.green,
                            borderColor: COLORS.white,
                            borderWidth: 2,
                            position: 'absolute',
                            top: 14,
                            right: 2,
                            zIndex: 1000,
                        }}
                    ></View>
                )}

                <Image
                    source={item.userImg}
                    resizeMode="contain"
                    style={{
                        height: 50,
                        width: 50,
                        borderRadius: 25,
                    }}
                />
            </View>
            <View
                style={{
                    flexDirection: 'column',
                }}
            >
                <Text style={{ ...FONTS.h4, marginBottom: 4, color: theme.color }}>
                    {item.userName}
                </Text>
                <Text style={{ fontSize: 14, color: COLORS.secondaryGray, color: theme.color }}>
                    {item.lastSeen}
                </Text>
            </View>
        </TouchableOpacity>
    )
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <themeContext.Provider value = {mode === true ? THEME.dark : THEME.light}>
            <PageContainer>
                <View style={{ flex: 1, backgroundColor: theme.background }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginHorizontal: 22,
                            marginTop: 22,
                            backgroundColor: theme.background,
                        }}
                    >
                        <Text style={{ ...FONTS.h4, color: theme.color }}>Chats</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                onPress={() => console.log('Add contacts')}
                            >
                                <MaterialCommunityIcons
                                    name="message-badge-outline"
                                    size={20}
                                    color={theme.color}
                                />
                                </TouchableOpacity>
                            
                        </View>
                    </View>

                    <View
                        style={{
                            marginHorizontal: 22,
                            flexDirection: 'row',
                                alignItems: 'center',
                            backgroundColor: theme.background,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                marginRight: 4,
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    height: 50,
                                    width: 50,
                                    borderRadius: 25,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: theme.tertiaryWhite,//'#e6edff
                                    marginBottom: 4,
                                }}
                            >
                                <AntDesign
                                    name="plus"
                                    size={24}
                                    color={theme.color}
                                />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            horizontal={true}
                            data={contacts}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item, index }) => (
                                <View
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            paddingVertical: 15,
                                            marginRight: 22,
                                        }}
                                    >
                                        <Image
                                            source={item.userImg}
                                            resizeMode="contain"
                                            style={{
                                                height: 50,
                                                width: 50,
                                                borderRadius: 25,
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <Text style={{color: theme.color}}>
                                        {item.userName.substring(0, 5)}...
                                    </Text>
                                </View>
                            )}
                        />
                    </View>
                    <View
                        style={{
                            marginHorizontal: 22,
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: theme.tertiaryWhite,
                            height: 48,
                            marginVertical: 22,
                            paddingHorizontal: 12,
                            borderRadius: 20,
                        }}
                    >
                        <Ionicons
                            name="ios-search-outline"
                            size={24}
                            color={theme.color}
                        />

                        <TextInput
                            style={{
                                width: '100%',
                                height: '100%',
                                marginHorizontal: 12,
                                color: theme.color,
                            }}
                            value={search}
                            onChangeText={handleSearch}
                                placeholder="Search contact..."
                                placeholderTextColor={theme.color}
                        />
                    </View>

                    <View
                        style={{
                                paddingBottom: 100,
                        }}
                    >
                            <FlatList
                            data={filteredUsers}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                </View>
                </PageContainer>
                </themeContext.Provider>
        </SafeAreaView>
    )
}

export default Chats
