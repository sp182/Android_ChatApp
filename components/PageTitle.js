import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useContext, useEffect }  from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { SIZES, COLORS, FONTS } from '../constants'

import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../constants/themeContext'
import { THEME } from '../constants/theme'

const PageTitle = (props) => {

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
            <View style={{
                marginHorizontal: 22,
                marginVertical: 22,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: theme.pcolor}}>
            <TouchableOpacity
                onPress={props.onPress}
                style={{
                    marginRight: 12,
                }}
            >
                <MaterialIcons
                    name="keyboard-arrow-left"
                    size={SIZES.padding * 3}
                    color={theme.color}
                />
            </TouchableOpacity>
            {props.title && (
                <Text style={{ ...FONTS.h4, color: theme.color }}>
                    {props.title}
                </Text>
            )}
            </View>
            </themeContext.Provider>
    )
}
/**
 * 
 
const styles = StyleSheet.create({
    pageTitleContainer: {
        marginHorizontal: 22,
        marginVertical: 22,
        flexDirection: 'row',
        alignItems: 'center',
    },
    
})
*/
export default PageTitle
