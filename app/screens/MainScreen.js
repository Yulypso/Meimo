import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text, StatusBar, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';


const MainScreen = () => {

  //retourne 1 tableau contenant l'état des Meimos [0] et mettre a jour mes Meimos
  const [Meimos, setMeimos] = useState([
    {id: 1, name:"Meimo 1" },
    {id: 2, name:"Meimo 2" },
    {id: 3, name:"Meimo 3" }
  ])

  return(
    <View style={styles.main_container}>

      <StatusBar barStyle='light-content' StatusBar backgroundColor="#454752"/>

      <SafeAreaView>
        <ScrollView>
          
          <View style={styles.first_container}>
            <View>
              <Text style={styles.Meimo}>Meimo 🐼</Text>
            </View>

            <View style={styles.button_settings}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/settings.png')}
                  style={styles.buttonImageSettings}
                  /*onPress = {openSettings}*/
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.textInput}>
            <TextInput 
                style={styles.insideText} 
                placeholder='Search a Meimo 🔍' 
                placeholderTextColor='#858A9E'
                /*onChangeText={(text) => textInputChanged(text)}
                onSubmitEditing={() => search_meimo()}*/
            />
          </View>
          
          <View style={styles.second_container}>
            <Text>Coucou</Text>
          </View>
  
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  main_container: {
    flex:1,
    backgroundColor: '#2F3138'
  },
  first_container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor: 'yellow'
  },
  second_container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: 'red',
  },


/* first_container*/
  Meimo: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'PingFang HK',
    color: 'white',
    paddingLeft: 10
  },
  button_settings: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonImageSettings: {
    flex: 1,
    height: 50,
    width: 50,
    resizeMode: 'contain'
  }, 

/* second_container*/
textInput: {
  flex: 1,
  marginTop: 5,
  marginBottom: 20
  //backgroundColor: 'yellow'
},
insideText: {
  flex: 1,
  marginLeft: 10,
  marginRight: 10,
  height: 50,
  borderWidth: 0,
  paddingLeft: 5,
  borderRadius: 10,
  color: 'white',
  backgroundColor: '#454752',
},
/* third_container */


});


export default MainScreen;
