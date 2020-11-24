import React, {useState} from 'react';
import {StyleSheet, TextInput, SafeAreaView, Button, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, View, Text, StatusBar, FlatList,Image, TouchableOpacity} from 'react-native';

import PictureItem from '../components/PictureItem'
import data from '../data/data_meimo'

var d = new Date();
var fulldate = (d.getDate() < 10 ? '0' : '') + d.getDate().toString() + "/" + ((d.getMonth()+1) < 10 ? '0' : '') + (d.getMonth()+1).toString() + "/" + d.getFullYear().toString() + " " + (d.getHours() < 10 ? '0' : '') + d.getHours().toString() + ":" + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes().toString() + ":" + (d.getSeconds() < 10 ? '0' : '') + d.getSeconds().toString();
var name = '';
var overview = '';

const NewMeimoScreen = ({ route, navigation }) => {

  const { meimos } = route.params
  //TODO
  //const [UpDate, setMeimos] = useState(d);

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  const handleNameTextInputChange = text => {
    name = text;
    console.log(name);
  }

  const handleOverviewTextInputChange = text => {
    overview = text;
    console.log(overview);
  }

  //TODO
  /*const onSaveData = () => {
    console.log("ça marche")
  }*/

    return (

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.main_container}>
          <View style={styles.first_container}>
            <Text>{(d.getDate() < 10 ? '0' : '') + d.getDate()} {monthNames[d.getMonth()]} {d.getFullYear()} at {(d.getHours() < 10 ? '0' : '') + d.getHours()}:{(d.getMinutes() < 10 ? '0' : '') + d.getMinutes()}:{(d.getSeconds() < 10 ? '0' : '') + d.getSeconds()}</Text>
          </View>

          <View style={styles.second_container}>
            <TextInput style={styles.insideTextTitle} 
              placeholder='Title' 
              onChangeText={text => handleNameTextInputChange(text)}
              placeholderTextColor='#858A9E'>
                            
            </TextInput>

            <TextInput style={styles.insideText} 
              placeholder='Write your Meimo'
              multiline
              onChangeText={text => handleOverviewTextInputChange(text)}
              placeholderTextColor='#858A9E'>
            </TextInput>

            <SafeAreaView style={styles.pictureContainer}>
              
              <FlatList
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                data={meimos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <PictureItem meimo={item} /*fromHomeNavigate={fromHomeNavigate}*//>}
                //ItemSeparatorComponent={MeimoSeparator} 
                /*onEndReachedThreshold={0.5} //definition de la longueur avant le declenchement de l'event onEndReached
                onEndReached={() => {
                    if(this.page < this.totalPages) {
                        this._loadFilms()
                    }
                }}*/
              />
            </SafeAreaView>

          </View>

          <View style={styles.third_container}> 
            
          </View>
        </View>

      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
  main_container: {
    flex:1,
    backgroundColor: '#2F3138'
  },
  first_container: {
    flex:0.025,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    marginTop: Platform.OS === 'ios' ? "23%" : "3%"
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
    flex: 0.09,
    backgroundColor: 'green'
  },

  insideTextTitle: {
    flex: 0.1,
    marginTop: "3%",
    marginLeft: "3%",
    marginRight: "3%",
    height: 50,
    borderWidth: 0,
    paddingLeft: 5,
    borderRadius: 10,
    color: 'white',
    backgroundColor: 'red',
    fontFamily: 'PingFang HK',
    fontWeight: 'bold',
    fontSize: 30
  },
  insideText: {
    flex: 0.6,
    marginLeft: "3%",
    marginRight: "3%",
    height: 50,
    borderWidth: 0,
    paddingLeft: 5,
    borderRadius: 10,
    color: 'white',
    backgroundColor: 'blue',
    fontFamily: 'PingFang HK',
    fontSize: 14,
    textAlignVertical: 'top',
    textAlign: 'justify',
  },
  pictureContainer: {
    flex: 0.3,
    marginLeft: "3%",
    marginRight: "3%",
    borderRadius: 10,
    backgroundColor: 'yellow'
  },
})

export const saveData = () => { 
  d = new Date();
  fulldate = (d.getDate() < 10 ? '0' : '') + d.getDate().toString() + "/" + ((d.getMonth()+1) < 10 ? '0' : '') + (d.getMonth()+1).toString() + "/" + d.getFullYear().toString() + " " + (d.getHours() < 10 ? '0' : '') + d.getHours().toString() + ":" + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes().toString() + ":" + (d.getSeconds() < 10 ? '0' : '') + d.getSeconds().toString();
  console.log("saved " + fulldate); 
  //TODO : update Date to display on the screen
  //onSaveData;
}


export default NewMeimoScreen;