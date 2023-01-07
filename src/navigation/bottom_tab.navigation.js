import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Home from '../screens/home.screen';
import Report from '../screens/reports.screen';
import Map from '../screens/mapView.screen';
import Recents from '../screens/recents.screen';

import IconHome from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color } from '../components/theme/colors';
import { Header } from '../components/modules/header';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    // headerShown: false,
                    tabBarStyle: {
                        position: "absolute",
                        opacity: .9,
                        bottom: 15,
                        left: 20,
                        right: 20,
                        elevation: 0,
                        backgroundColor: 'rgba(52, 52, 52, 0.9)',
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
                        header: () => <Header title={"HOME"} />,
                        // headerTitle,
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <>
                                    <IconHome name={focused ? "home" : "home-outline"} color={focused ? Color.primaryColor : Color.dangerColor} size={25} />
                                    <Text style={{ fontSize: 12, color: focused ? Color.primaryColor : Color.dangerColor }}>Home</Text>
                                </>
                            )
                        }
                    }}
                />
                <Tab.Screen name='Mapview'
                    component={Map}
                    options={{
                        headerShown:false,
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <>
                                    <IconHome name={focused ? "map-marker" : "map-marker-outline"} color={focused ? Color.primaryColor : Color.dangerColor} size={25} />
                                    <Text style={{ fontSize: 12, color: focused ? Color.primaryColor : Color.dangerColor }}>MapView</Text>
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
                                    <IconHome name={focused ? "home" : "home-outline"} color={focused ? Color.primaryColor : Color.dangerColor} size={25} />
                                    <Text style={{ fontSize: 12, color: focused ? Color.primaryColor : Color.dangerColor }}>Recents</Text>
                                </>
                            )
                        }
                    }}
                />
                <Tab.Screen name='Reports'
                    component={Report}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <>
                                    <IconHome name={focused ? "home" : "home-outline"} color={focused ? Color.primaryColor : Color.dangerColor} size={25} />
                                    <Text style={{ fontSize: 12, color: focused ? Color.primaryColor : Color.dangerColor }}>Reports</Text>
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