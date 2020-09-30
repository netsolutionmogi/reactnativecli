import React from 'react'
import { View, Text,Button } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

 function Sobre({navigation}) {
  return (
    <View>
      <Text>Sobre o App</Text>
      <Button
        title="Vai para Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default Sobre;