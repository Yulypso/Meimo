import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, View, Text, StatusBar, FlatList,Image, TouchableOpacity} from 'react-native';

const DetailScreen = ({ route, navigation }) => {
    const { meimo } = route.params  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DetailScreen</Text>
        <Button
          title="Go to HomeScreen"
          onPress={() => navigation.navigate("Home")} 
        />
        <Text>meimo: {JSON.stringify(meimo.id).replace(/\"/g, "")} {JSON.stringify(meimo.name)}</Text>
      </View>
    );
}

export default DetailScreen;

//jpeux te montrer comemnt 'jai fait pour ça 
//je lui ai passé aussi des infos pour afficher itemID :1 "bamboo"