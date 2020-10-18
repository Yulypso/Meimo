import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


function MainScreen() {
  return(
    <View style={styles.main_container}>
      <Text>Hello Meimo !</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main_container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MainScreen;
