import React from 'react';
import {StyleSheet, View, Text, Button, StatusBar, FlatList,Image, TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen'
import NewMeimoScreen from '../screens/NewMeimoScreen'


const Navigation = () => {

  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Village"
        screenOptions= {{
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerStyle: {
            backgroundColor: '#2F3138',
          },
          headerShown: true,
          title:'',
          headerTransparent:true
        }}
      >

        <Stack.Screen 
          name="Home" 
          component={NewMeimoScreen} 
          options={{ 
            //title: 'Panda Home',
          }}
        />
        <Stack.Screen 
          name="Village" 
          component={MainScreen} 
          options={{ 
            //title: 'Panda Village'
          }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

});

export default Navigation;
