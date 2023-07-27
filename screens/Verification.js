import { View, Text } from 'react-native'
import React, { useRef, useContext, useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS } from '../constants'
import OTPTextInput from 'react-native-otp-textinput'
import Button from '../components/Button'
import PageTitle from '../components/PageTitle'

import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../constants/themeContext'
import { THEME } from '../constants/theme'

const Verification = ({ navigation }) => {

    const otpInput = useRef(null)

    const clearText = () => {
        otpInput.current.clear()
    }

    const setText = () => {
        otpInput.current.setValue('1234')
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
                <PageTitle onPress={() => navigation.navigate('PhoneNumber')} />
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        marginHorizontal: 22,
                       // backgroundColor: theme.background,
                    }}
                >
                    <Text
                        style={{ ...FONTS.h2, marginTop: 48, marginBottom: 22, color: theme.color }}
                    >
                        Enter Verification Code
                    </Text>
                    <Text style={{ ...FONTS.body3, textAlign: 'center', color: theme.color }}>
                        We have sent you an SMS with the code
                    </Text>
                    <Text style={{ ...FONTS.body3, textAlign: 'center', color: theme.color }}>
                        {' '}
                        to +91 *** *** ****
                    </Text>
                    <View style={{ marginVertical: 60 }}>
                        <OTPTextInput
                            textInputStyle={{
                                backgroundColor: theme.secondaryWhite,
                                borderColor: theme.secondaryWhite,
                                borderWidth: 1,
                                borderRadius: 60,
                                borderBottomWidth: 1,
                            }}
                            inputCount={4}
                            tintColor={COLORS.primary}
                        />
                    </View>
                    <View
                    style={{flexDirection:'row'}}>
                    <Button
                        title="Resend code"
                        disabled
                        onPress={() => {
                            if (OTPTextInput!=true) {
                                alert('Please Enter OTP');
                                return;
                            }
                            if (OTPTextInput==true) {
                                navigation.navigate('ProfileAccount')
                            }
                        }
                        }
                        style={{
                            width: '50%',
                            paddingVertical: 12,
                            marginBottom: 48,
                            marginRight: 10,
                        }}
                    />
                    <Button
                        title="Submit code"
                        enabled
                            onPress={() => {
                                    alert("Verified")
                                    navigation.navigate('ProfileAccount')
                            }}
                        style={{
                            width: '50%',
                            paddingVertical: 12,
                            marginBottom: 48,
                        }}
                        />
                        </View>
                </View>
                </PageContainer>
                </themeContext.Provider>
        </SafeAreaView>
    )
}

export default Verification
