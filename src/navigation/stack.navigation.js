// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import { Header } from '../components/modules/header';
import Report from '../screens/reports.screen';
import SelectScreen from '../screens/selectLocation';
import UploadScreen from '../screens/upload.screen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Tabs from './bottom_tab.navigation';

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
                <Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Homes" component={Tabs} />
                <Stack.Screen options={{ header: () => <Header title={"DETECT POTHOLES"} /> }} name="UploadScreen" component={UploadScreen} />
                <Stack.Screen options={{ header: () => <Header title={"DETECTION REPORT"} /> }} name="ReportScreen" component={Report} />
                <Stack.Screen options={{ header: () => <Header title={"SelectedScreen"} /> }} name="SelectedScreen" component={SelectScreen} />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export {AppStack, AuthStack};
