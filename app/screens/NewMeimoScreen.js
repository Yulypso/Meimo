import React, {useState} from 'react';
import {StyleSheet, LogBox, Alert, TextInput, SafeAreaView, Button, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, View, Text, StatusBar, FlatList,Image, TouchableOpacity} from 'react-native';

import PictureItem from '../components/PictureItem'
import fakedata from '../data/data_meimo'

const NewMeimoScreen = ({ route, navigation }) => {

  const { meimos, fetchData, temporaryMeimos, lastId, setSetIsEmpty, userEmail} = route.params;

  console.log("new meimo for : "+userEmail);

  const postData = (meimo) => {
    console.log("posted data : " + meimo.name);
    fetch(
      'https://meimojsapirest.herokuapp.com/meimos'
      //'http://localhost:5000/meimos'
      ,{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          meimo: meimo
      })
      //console.log("json data posted: " + data.length)),
    });
  }

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  
  //const [d, setupD] = useState(new Date());
  //lastId : to get the max ID among our meimos 
  console.log("lastId " + lastId)
  //console.log("size meimos: " + meimos.length)

  var d = new Date();
  var fulldate = "";
  var name = "Untitled";
  var overview = " ";

  const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

  const handleNameTextInputChange = (text) => {
    //array.name = text;
    name = text;
    console.log(name);
    //console.log("----meimos----");
    //console.log(meimos);
    //console.log("----meimos copy----");
    //console.log(data_meimo_copy);
  }

  const handleOverviewTextInputChange = (text) => {
    //array.overview = text;
    overview = text;
    console.log(overview);
  }

  /*const convertListToMap = (list) => {
    var map = {}
    list.forEach((item, index) => map[index] = item);

    //listmap = []
    //listmap.push(map)
    return map;
  }*/

  const addPicture = (array, id, key) => {
    //to use: 
    //addPicture(createdMeimo[0], 50, require('../assets/Panda.png'))
    array.pictures.push({id: id, key: key});
  }

  const saveData = () => { 
    d = new Date();
    fulldate = (d.getDate() < 10 ? '0' : '') + d.getDate().toString() + "/" + ((d.getMonth()+1) < 10 ? '0' : '') + (d.getMonth()+1).toString() + "/" + d.getFullYear().toString() + " " + (d.getHours() < 10 ? '0' : '') + d.getHours().toString() + ":" + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes().toString() + ":" + (d.getSeconds() < 10 ? '0' : '') + d.getSeconds().toString();
    Keyboard.dismiss(); 

    //meimos[meimo.id].pictures=meimo.pictures;
    Alert.alert("Meimo created!", "");
    console.log("saved: " + lastId+1 + " [" + new Date().toString() + "] : " + name + " : " + overview ); 
  
    temporaryMeimos.push(
      {
        id: lastId+1,
        useremail: userEmail,
        name: name,
        date: new Date().toString(),
        overview: overview,
        pictures: [
          {
            id: 1,
            key: require('../assets/Bamboo.png')
          }, 
          {
            id: 2,
            key: require('../assets/Panda.png')
          },
          {
            id: 3,
            key : require('../assets/Bamboo.png')
          },
          {
            id: 4,
            key : require('../assets/settings.png')
          }
        ]
      }
    );

    postData({
      id: lastId+1,
      useremail: userEmail,
      name: name,
      date: new Date().toString(),
      overview: overview
    })

    setSetIsEmpty(false);
    //fetchData();
    temp = lastId+1;
    navigation.navigate("Home", {abc: fetchData(temp)}); //push + {abc:123} = Render 1 fois, and 2 push = Render 2 times => use concat
    
    //setMeimos(meimos);         
    //setMeimos(data_meimo_copy);  //fonctionnel
    //console.log(meimos[meimo.id].name);
  }

    return (

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.main_container}>
          
          <View style={styles.ButtonsContainer}>
            <View style={styles.backButtonContainer}>
              <Button
                title="< Back"
                color="#0583F2"
                onPress= {() => {/*navigation.goBack();*/navigation.navigate("Home", {abc:123})}} //CA FONCTIONNE EN LUI DONNANT NIMP ?? 
              ></Button>
            </View>

            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>{(d.getDate() < 10 ? '0' : '') + d.getDate()} {monthNames[d.getMonth()]} {d.getFullYear()} at {(d.getHours() < 10 ? '0' : '') + d.getHours()}:{(d.getMinutes() < 10 ? '0' : '') + d.getMinutes()}:{(d.getSeconds() < 10 ? '0' : '') + d.getSeconds()}</Text>
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
                data={[
                  {
                    id: 1,
                    key: require('../assets/Bamboo.png')
                  }, 
                  {
                    id: 2,
                    key: require('../assets/Panda.png')
                  },
                  {
                    id: 3,
                    key : require('../assets/Bamboo.png')
                  },
                  {
                    id: 4,
                    key : require('../assets/settings.png')
                  }
                ]}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <PictureItem meimoPictures={item} /*fromHomeNavigate={fromHomeNavigate}*//>}
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
  second_container: {
    flex:0.855,
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
  backButtonContainer: {
    flex:0.3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    //backgroundColor: 'yellow',
    borderRadius: 999
  },
  dateContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'green',
    borderRadius: 999
  },
  saveButtonContainer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    //backgroundColor: 'yellow',
    borderRadius: 999
  },
})

export default NewMeimoScreen;