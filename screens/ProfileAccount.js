import { View, Text } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../components/PageContainer'
import { FONTS, COLORS } from '../constants'
import { AntDesign } from '@expo/vector-icons'
import Input from '../components/Input'
import Button from '../components/Button'
import PageTitle from '../components/PageTitle'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../constants/themeContext'
import { THEME } from '../constants/theme'

const ProfileAccount = ({ navigation }) => {

    const [inputValue1,setinputValue1] = useState("")


    const [inputValue2,setinputValue2] = useState("")

    const [nameList, setnameList] = useState([]);
    const [surnameList, setsurnameList] = useState([]);

        const addname = async () => {
        try {
            nameList.push(inputValue1);
            const output1 = JSON.stringify(nameList);
            console.log(output1);
            await AsyncStorage.setItem('itemList', output1);
           // setinputValue1('');
          //  alert("d is added");
        } catch (err) {
            console.log(err)
        }
    };

    const addsurname = async () => {
        try {
            surnameList.push(inputValue2);
            const output2 = JSON.stringify(surnameList);
            console.log(output2);
            await AsyncStorage.setItem('itemList', output2);
        } catch (err) {
            console.log(err)
        }
    };
    // const addname = async () => {
    //     try {
    //         nameList.push(inputValue1);
    //         const output1 = JSON.stringify(nameList);
    //         console.log(output1);
    //         await AsyncStorage.setItem('itemList', output1);
    //         setinputValue1('');
    //     } catch (err) {
    //         console.log(err)
    //     }
    // };

    // const addsurname = async () => {
    //     try {
    //         surnameList.push(inputValue2);
    //         const output2 = JSON.stringify(surnameList);
    //         console.log(output2);
    //         await AsyncStorage.setItem('itemList', output2);
    //         setinputValue2('');
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    const add_nav = () => {
        addname();
        addsurname();
       // addsurname();
        alert("Details added");
    navigation.navigate('BottomTabNavigation');
    }

    const getdata = async () => {
        try {
            const data = await AsyncStorage.getItem('itemList')
            const output = JSON.parse(data)
            setstorageDataList(output);
        } catch (err) {
            console.log(err);
        }
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
        <SafeAreaView style={{ flex: 1 }}>
            <themeContext.Provider value = {mode === true ? THEME.dark : THEME.light}>
            <PageContainer>
                <PageTitle
                    title="Your Profile"
                    onPress={() => navigation.navigate('Verification')}
                />
                <View style={{ flex: 1, alignItems: 'center',backgroundColor: theme.background }}>
                    <Text
                        style={{
                            ...FONTS.h3,
                            color: COLORS.primary,
                            marginTop: 10,
                        }}
                    >
                        SET UP YOUR PROFILE
                    </Text>
                    <View
                        style={{
                            width: 100,
                            height: 100,
                            backgroundColor: '#9EB2F2',
                            borderRadius: 50,
                            marginVertical: 48,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <AntDesign name="user" size={64} color={COLORS.black} />
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                            }}
                        >
                            <AntDesign
                                name="pluscircle"
                                size={24}
                                color={theme.color}
                            />
                        </View>
                    </View>

                    <View style={{ width: '100%', paddingHorizontal: 22 }}>
                        <Input
                            id="firstName"
                            value={inputValue1}
                            onChangeText={value => setinputValue1(value)}
                            placeholder="First Name (Required) "
                            />
                        <Input
                            id="lastName"
                            value={inputValue2}
                            onChangeText={value => setinputValue2(value)}
                            placeholder="Last Name (Optional) "
                        />

                        <Button
                            title="Save"
                            style={{
                                width: '100%',
                                paddingVertical: 12,
                                marginBottom: 48,
                            }}
                            onPress={() => 
                                //if (Input != true)
                                //    alert("oop")
                               // else
                                add_nav()
                            
                            }
                        />
                    </View>
                </View>
                </PageContainer>
                </themeContext.Provider>
        </SafeAreaView>
    )
}

export default ProfileAccount
