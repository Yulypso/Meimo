import React, {useState} from 'react';
import {StyleSheet, TextInput, SafeAreaView, Button, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, View, Text, StatusBar, FlatList,Image, TouchableOpacity} from 'react-native';

import PictureItem from '../components/PictureItem'

const NewMeimoScreen = ({ route, navigation }) => {

  const { meimos } = route.params

  const d = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  date = d.getDate(); //Current Date
  month = d.getMonth() + 1; //Current Month
  year = d.getFullYear(); //Current Year
  hours = d.getHours(); //Current Hours
  min = d.getMinutes(); //Current Minutes
  sec = d.getSeconds(); //Current Seconds
  //{this.date}/{this.month}/{this.year} {this.hours}:{this.min}:{this.sec}*/

  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback 
    onPress={() => Keyboard.dismiss()}> {children}
    </TouchableWithoutFeedback>
  );

    return (

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.main_container}>
          <View style={styles.first_container}>
            <Text>{this.date} {monthNames[d.getMonth()]} {d.getFullYear()} at {d.getHours()}:{d.getMinutes()}</Text>  
          </View>

          <View style={styles.second_container}>
            <TextInput style={styles.insideTextTitle} 
              placeholder='Title' 
              placeholderTextColor='#858A9E'>
                            
            </TextInput>

            <TextInput style={styles.insideText} 
              placeholder='Write your Meimo'
              multiline
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

export default NewMeimoScreen;