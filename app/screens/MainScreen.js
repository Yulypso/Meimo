import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, View, Text, StatusBar, FlatList,Image, TouchableOpacity} from 'react-native';

import MeimoItem from '../components/MeimoItem';
import MeimoSeparator from '../components/MeimoSeparator'
import MeimoSearch from '../components/MeimoSearch'

import data from '../data/meimo'

const MainScreen = () => {

  const [meimos, setMeimos] = useState(data);

  //retourne 1 tableau contenant l'état des Meimos [0] et mettre a jour mes Meimos

  date = new Date().getDate(); //Current Date
  month = new Date().getMonth() + 1; //Current Month
  year = new Date().getFullYear(); //Current Year
  hours = new Date().getHours(); //Current Hours
  min = new Date().getMinutes(); //Current Minutes
  sec = new Date().getSeconds(); //Current Seconds
  //{this.date}/{this.month}/{this.year} {this.hours}:{this.min}:{this.sec}

  const handleLoadSearchMeimo = (a) => {
    const updatedMeimos = meimos.filter(i => i.name.toLowerCase().includes(a.meimoName.toLowerCase())); 
    (a.meimoName.length == 0 || updatedMeimos.length == 0) ? setMeimos(data) : setMeimos(updatedMeimos);
  }

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
          
          <MeimoSearch onSearch={handleLoadSearchMeimo}/>
         

          <View style={styles.second_container}>
            <FlatList
              data={meimos}
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


/* third_container */


});


export default MainScreen;
