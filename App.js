import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { NavigationContainer , DarkTheme} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
    Walkthrough,
    Verification,
    ProfileAccount,
    PhoneNumber,
    PersonalChat,
    More,
    Chats,
    Contacts
} from './screens'
import { useCallback , useState , useEffect } from 'react'
import BottomTabNavigation from './navigation/BottomTabNavigation'

import { EventRegister } from 'react-native-event-listeners';
import themeContext from './constants/themeContext';
import { THEME } from './constants/theme';

SplashScreen.preventAutoHideAsync()

const Stack = createNativeStackNavigator()

export default function App() {
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
    // load fonts
    const [fontsLoaded] = useFonts({
        black: require('./assets/fonts/Mulish-Black.ttf'),
        regular: require('./assets/fonts/Mulish-Regular.ttf'),
        bold: require('./assets/fonts/Mulish-Bold.ttf'),
        medium: require('./assets/fonts/Mulish-Medium.ttf'),
        mediumItalic: require('./assets/fonts/Mulish-MediumItalic.ttf'),
        semiBold: require('./assets/fonts/Mulish-SemiBold.ttf'),
        semiBoldItalic: require('./assets/fonts/Mulish-SemiBoldItalic.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return null
    }

    return (
        <SafeAreaProvider onLayout={onLayoutRootView}>
            <themeContext.Provider value = {mode === true ? THEME.dark : THEME.light}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName="Walkthrough"
                >
                    <Stack.Screen
                        name="BottomTabNavigation"
                        component={BottomTabNavigation}
                    />
                    <Stack.Screen name="Walkthrough" component={Walkthrough} />
                    <Stack.Screen
                        name="Verification"
                        component={Verification}
                    />
                    <Stack.Screen
                        name="ProfileAccount"
                        component={ProfileAccount}
                    />
                    <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
                    <Stack.Screen
                        name="PersonalChat"
                        component={PersonalChat}
                    />
                        <Stack.Screen name="More" component={More} />
                        <Stack.Screen name="Chats" component={Chats} />
                        <Stack.Screen name="Contacts" component={Contacts} />
                </Stack.Navigator>
                </NavigationContainer>
                </themeContext.Provider>
        </SafeAreaProvider>
    )
}
