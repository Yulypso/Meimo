import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, View, Text, StatusBar, FlatList,Image, TouchableOpacity} from 'react-native';

import MeimoItem from '../components/MeimoItem';
import MeimoSeparator from '../components/MeimoSeparator'

const MainScreen = () => {

  //retourne 1 tableau contenant l'état des Meimos [0] et mettre a jour mes Meimos
  const [meimos, setMeimos] = useState([
    {id: 1, name:"Meimo 1" },
    {id: 2, name:"Meimo 2" },
    {id: 3, name:"Meimo 3" }
  ])

  date = new Date().getDate(); //Current Date
  month = new Date().getMonth() + 1; //Current Month
  year = new Date().getFullYear(); //Current Year
  hours = new Date().getHours(); //Current Hours
  min = new Date().getMinutes(); //Current Minutes
  sec = new Date().getSeconds(); //Current Seconds
  //{this.date}/{this.month}/{this.year} {this.hours}:{this.min}:{this.sec}

  return(
    <View style={styles.main_container}>

      <StatusBar barStyle='light-content' StatusBar backgroundColor="#454752"/>

          <View style={styles.first_container}>
            <View>
              <Text style={styles.Meimo}>
                M
                <Text style={styles.MeimoInner}>e</Text>
                im
                <Text style={styles.MeimoInner}>o </Text>
                🐼
              </Text>
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

          
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.textInput}>
              <TextInput 
                  style={styles.insideText} 
                  placeholder='Search a Meimo 🔍' 
                  placeholderTextColor='#858A9E'
                  /*onChangeText={(text) => textInputChanged(text)}
                  onSubmitEditing={() => search_meimo()}*/
              />
            </View>
          </TouchableWithoutFeedback>
         

          <View style={styles.second_container}>
            <FlatList
              data={[
                {id: 1, name:"Meimo 1", date: "20/04/1998 12:00:00", overview: "Salut les amis c'est mon meimo Salut les amis c'est mon meimo Salut les amis c'est mon meimo Salut les amis c'est mon meimo"},
                {id: 2, name:"Meimo 2", date: "20/04/1998 12:00:00", overview: "Salut les amis c'est mon meimo Salut les amis c'est mon meimo Salut les amis c'est mon meimo Salut les amis c'est mon meimo"},
                {id: 3, name:"Meimo 3", date: "20/04/1998 12:00:00", overview: "Salut les amis c'est mon meimo Salut les amis c'est mon meimo Salut les amis c'est mon meimo Salut les amis c'est mon meimo"},
                {id: 4, name:"Meimo 4", date: "20/04/1998 12:00:00", overview: ""}
              ]}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <MeimoItem meimo={item}/>}
              ItemSeparatorComponent={MeimoSeparator}
              /*onEndReachedThreshold={0.5} //definition de la longueur avant le declenchement de l'event onEndReached
              onEndReached={() => {
                  if(this.page < this.totalPages) {
                      this._loadFilms()
                  }
              }}*/
            />
          </View>

          <View style={styles.third_container}>

          </View>
  
    </View>
  )
}

const styles = StyleSheet.create({
  main_container: {
    flex:1,
    backgroundColor: '#2F3138'
  },
  first_container: {
    flex:0.08,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor: 'yellow',
    marginTop: Platform.OS === 'ios' ? "15%" : "3%"
  },
  second_container: {
    flex:0.83,
    flexDirection: 'column',
    backgroundColor: '#454752',
    borderRadius: 20,
    marginStart: "3%",
    marginEnd: "3%"
  },
  third_container: {
    flex: 0.09
  },

/* first_container*/
  Meimo: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'PingFang HK',
    color: 'white',
    paddingLeft: "3%"
  },
  MeimoInner: {
    color:'black',
    paddingLeft:30,
    paddingRight:30,
    textShadowColor:'#c5c5c5',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius:1,
  },
  button_settings: {
    flex: 0.2,
    marginEnd: "3%"
  },
  buttonImageSettings: {
    height: 50,
    width: 50,
    resizeMode: 'contain'
  }, 

/* second_container*/
textInput: {
  flex: 0.07,
  marginTop: "1%",
  marginBottom: "5%"
  //backgroundColor: 'yellow'
},
insideText: {
  flex: 1,
  marginLeft: "3%",
  marginRight: "3%",
  height: 50,
  borderWidth: 0,
  paddingLeft: 5,
  borderRadius: 10,
  color: 'white',
  backgroundColor: '#454752',
  fontFamily: 'PingFang HK',
  fontSize: 14
},
/* third_container */


});


export default MainScreen;
