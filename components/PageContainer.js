import React, { useState, useEffect, useContext } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native'
import { COLORS} from '../constants'

import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../constants/themeContext'
import { THEME } from '../constants/theme'

const PageContainer = (props) => {

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
        <KeyboardAvoidingView
            behavior={Platform.OS == "android" ? 'padding' : ''}
            style={{
                height: '100%',
                width: '100%',
                backgroundColor: theme.pcolor,
                color: theme.color
            }}
        >
            {props.children}
            </KeyboardAvoidingView>
            </themeContext.Provider>
    )
}

export default PageContainer
