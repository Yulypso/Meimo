import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, View, Text, StatusBar, FlatList,Image, TouchableOpacity} from 'react-native';

const NewMeimoScreen = ({ route, navigation }) => {
    const { itemID, itemName } = route.params
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Panda home</Text>
        <Button
          title="Go to PandaVillage"
          onPress={() => navigation.navigate('Village')}
        />
        <Text>itemID: {JSON.stringify(itemID).replace(/\"/g, "")} {JSON.stringify(itemName)}</Text>
      </View>
    );
}

export default NewMeimoScreen;