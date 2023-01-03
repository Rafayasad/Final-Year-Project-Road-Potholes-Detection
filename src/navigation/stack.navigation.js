// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { getLoginData } from '../redux/loginSlice';
import CategoryScreen from '../screens/category.screen';
import ForgetMpinScreen from '../screens/forgetMpin.screen';
import GetOtpScreen from '../screens/getOtp.screen';
import LanguageScreen from '../screens/language.screen';
import LocationScreen from '../screens/location.screen';
import LoginScreen from '../screens/login.screens';
import MyProfile from '../screens/myProfile.screen';
import RegisterScreen from '../screens/register.screen';
import SubmitOtpScreen from '../screens/submitOtp.screen';
import SubscriptionScreen from '../screens/subscription.screen';

const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Group
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: "#EBEBF6" }
                }}
            >
            </Stack.Group>
        </Stack.Navigator>
    )
}

function AppStack() {
    return (
        <Stack.Navigator>
            <Stack.Group
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: "#EBEBF6" }
                }}
            >
                <Stack.Screen name="Home" component={home} />
            </Stack.Group>
        </Stack.Navigator>
    )
}



export {
    AppStack,
    AuthStack
};