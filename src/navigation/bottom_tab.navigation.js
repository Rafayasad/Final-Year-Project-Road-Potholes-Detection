import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Home from '../screens/home.screen';
import Reports from '../screens/reports.screen';
import Map from '../screens/mapView.screen';
import Recents from '../screens/recents.screen';

import IconHome from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        position: "absolute",
                        bottom: 25,
                        left: 20,
                        right: 20,
                        elevation: 0,
                        backgroundColor: "#O13237",
                        borderRadius: 15,
                        height: 66,
                        // width:396,
                        ...styles.shadow
                    }
                }}
            >
                <Tab.Screen
                    name='Home'
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <>
                                    <IconHome name={focused ? "home" : "home-outline"} color={focused ? "#E33224" : "#8F8F8F"} size={25} />
                                    <Text style={{ fontSize: 12, color: focused ? '#E33224' : "#8F8F8F" }}>Home</Text>
                                </>
                            )
                        }
                    }}
                />
                <Tab.Screen name='Mapview'
                    component={Map}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <>
                                    <IconHome name={focused ? "home" : "home-outline"} color={focused ? "#E33224" : "#8F8F8F"} size={25} />
                                    <Text style={{ fontSize: 12, color: focused ? '#E33224' : "#8F8F8F" }}>MapView</Text>
                                </>
                            )
                        }
                    }}
                />
                <Tab.Screen name='Recents'
                    component={Recents}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <>
                                    <IconHome name={focused ? "home" : "home-outline"} color={focused ? "#E33224" : "#8F8F8F"} size={25} />
                                    <Text style={{ fontSize: 12, color: focused ? '#E33224' : "#8F8F8F" }}>Recents</Text>
                                </>
                            )
                        }
                    }}
                />
                <Tab.Screen name='Reports'
                    component={Reports}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <>
                                    <IconHome name={focused ? "home" : "home-outline"} color={focused ? "#E33224" : "#8F8F8F"} size={25} />
                                    <Text style={{ fontSize: 12, color: focused ? '#E33224' : "#8F8F8F" }}>Reports</Text>
                                </>
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#7f5df0",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: .25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default Tabs;