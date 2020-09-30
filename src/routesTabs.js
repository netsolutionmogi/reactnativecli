import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const { Navigator, Screen } = createBottomTabNavigator();

import Home from '../src/Home';
import Sobre from '../src/Sobre';

function RoutesTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontSize: 13,
                    color: '#fff',
                    marginLeft: 16,
                    fontWeight: 'bold'

                },
                inactiveBackgroundColor: '#F44336',
                activeBackgroundColor: '#F44336',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d'
            }}
        >
            <Screen name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Icon name='home' size={20} color="#fff" />
                        );
                    }
                }}

            />
            <Screen name="Cadastro"
                component={Sobre}
                options={{
                    tabBarLabel: 'Cadastro',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Icon name='archive' size={20} color="#fff" />
                        );
                    }
                }}

            />
            <Screen name="Consultar"
                component={Home}
                options={{
                    tabBarLabel: 'Consultar',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Icon name='search' size={20} color="#fff" />
                        );
                    }
                }}

            />
        </Navigator>
    )
}

export default RoutesTabs;