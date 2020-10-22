import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, View, Text, StatusBar, FlatList,Image, TouchableOpacity} from 'react-native';

const SettingScreen = ({ route, navigation }) => {
    const { itemID, itemName } = route.params
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SettingScreen</Text>
        <Button
          title="Go to HomeScreen"
          onPress={() => navigation.navigate("Home")} 
        />
        <Text>itemID: {JSON.stringify(itemID).replace(/\"/g, "")} {JSON.stringify(itemName)}</Text>
      </View>
    );
}

export default SettingScreen;