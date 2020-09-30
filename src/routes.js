import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import RoutesTabs from './routesTabs';
import Home from '../src/Home';
import Sobre from '../src/Sobre';

function Routes() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="RoutesTabs" screenOptions={{ headerShown: false }}>
                <Screen name="Home" component={Home} />
                <Screen name="Sobre" component={Sobre} />
                <Screen name="RoutesTabs" component={RoutesTabs} />
            </Navigator>
        </NavigationContainer>
    )
}

export default Routes;