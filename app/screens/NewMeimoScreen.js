import React, {useState} from 'react';
import {StyleSheet, Alert, TextInput, SafeAreaView, Button, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, View, Text, StatusBar, FlatList,Image, TouchableOpacity} from 'react-native';

import PictureItem from '../components/PictureItem'
import data from '../data/data_meimo'

//var d = new Date();
var fulldate = null;
var name = "";
var overview = "";

createdMeimo = [
  {
      id: 17,
      name: "a",
      date: "a",
      overview: "a",
      pictures: [
          require('../assets/Bamboo.png'),
          require('../assets/Panda.png'),
          require('../assets/Bamboo.png'),
          require('../assets/settings.png')
      ]
  }]

const NewMeimoScreen = ({ route, navigation }) => {

  //const { meimos } = route.params
  //TODO
  const [d, setupD] = useState(new Date());

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

  const saveData = () => { 
    setupD(new Date());
    fulldate = (d.getDate() < 10 ? '0' : '') + d.getDate().toString() + "/" + ((d.getMonth()+1) < 10 ? '0' : '') + (d.getMonth()+1).toString() + "/" + d.getFullYear().toString() + " " + (d.getHours() < 10 ? '0' : '') + d.getHours().toString() + ":" + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes().toString() + ":" + (d.getSeconds() < 10 ? '0' : '') + d.getSeconds().toString();
    Keyboard.dismiss(); 
    Alert.alert("Saved !","");
    console.log("saved [" + fulldate + "] : " + name + " : " + overview ); 
  }

    return (

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.main_container}>
          
          <View style={styles.ButtonsContainer}>
            <View style={styles.backButtonContainer}>
              <Button
                title="< Back"
                color="#0583F2"
                onPress= {() => navigation.goBack()}
              ></Button>
            </View>

            <View style={styles.saveButtonContainer}>
              <Button
                title="Save"
                color="#0583F2"
                onPress={saveData}
              ></Button>
            </View>

          </View>

          <View style={styles.bodyContainer}>
            
          <View style={styles.first_container}>
            <Text style={styles.dateText}>{(d.getDate() < 10 ? '0' : '') + d.getDate()} {monthNames[d.getMonth()]} {d.getFullYear()} at {(d.getHours() < 10 ? '0' : '') + d.getHours()}:{(d.getMinutes() < 10 ? '0' : '') + d.getMinutes()}:{(d.getSeconds() < 10 ? '0' : '') + d.getSeconds()}</Text>
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
                data={createdMeimo}
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
    //backgroundColor: 'yellow',
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
    //backgroundColor: 'green'
  },
  bodyContainer: {
    flex: 0.95
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
    backgroundColor: '#464646',
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
    backgroundColor: '#464646',
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
    //backgroundColor: 'yellow'
  },
  dateText : {
    color: 'white',
    fontWeight: 'bold'
  },

  ButtonsContainer: {
    flex:0.05,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '0%',
    marginTop: Platform.OS === 'ios' ? "12%" : "3%",
    //backgroundColor: 'red',
  },
  saveButtonContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    //backgroundColor: 'yellow',
    borderRadius: 999
  },
  backButtonContainer: {
    flex:0.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    //backgroundColor: 'yellow',
    borderRadius: 999
  }
})

export default NewMeimoScreen;