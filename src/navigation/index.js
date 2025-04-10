import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./bottom_tab.navigation";
import { AppStack } from "./stack.navigation";

export default function MainNavigation() {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    )
}