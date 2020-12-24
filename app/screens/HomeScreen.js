import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Alert, StatusBar, FlatList,Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Button} from 'react-native';

import MeimoItem from '../components/MeimoItem';
import MeimoSeparator from '../components/MeimoSeparator'
import MeimoSearch from '../components/MeimoSearch'

import Loader from '../components/loader';
import fakedata from '../data/data_meimo';


const HomeScreen = ({ route, navigation }) => {

  const { userEmail } = route.params;

  const [meimos, setMeimos] = useState(userEmail === 'root'?fakedata:[]);
  const [temporaryMeimos, setTemporaryMeimos] = useState(userEmail === 'root'?fakedata:[]);
  const [query, setQuery] = useState(-2);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const fetchData = async (valueQuery) => {
    setLoading(true);

    if(query == -2)
      valueQuery = -1;

      const response = await fetch(
        'https://meimojsapirest.herokuapp.com/meimos/'+userEmail
        //'http://localhost:5000/meimos/'+userEmail
      )
      .then(response => response.json()
      .then(data => {
        console.log(data)
        ,setMeimos(data)
        ,setTemporaryMeimos(data)
        ,((temporaryMeimos.length == 0 || meimos.length == 0 || data.length == 0) ? setIsEmpty(true) : setIsEmpty(false))
        ,setQuery(valueQuery) //change Query 1 time to call fetchData 2 times and rerender the screen. 
      }));
    
    setLoading(false);
  };

  const saveDelete = (meimo) => {
    console.log("deleted data : " + meimo.name);
    fetch(
      'https://meimojsapirest.herokuapp.com/meimo/delete'
      //'http://localhost:5000/meimo/delete'
      ,{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          meimo: meimo
      })
    }).then(response => {
      if(response.ok) {
        Alert.alert("Deleted!", "");
      }else {
        console.log("Server Error")
        Alert.alert("Server Error","")
      }
    })
  }

  useEffect(() => {

    console.log("fetched data: ");
    userEmail === 'root'?'':fetchData();
    
    console.log("get route: Logged in as: "+ userEmail);

  }, [query, userEmail]); //execute effect only if query has changed.


  if(!isEmpty) {
      console.log("meimos: "+meimos);
      //order meimos by date desc
      meimos.sort((a, b) => new Date(b.date) - new Date(a.date))
  }

  const setSetIsEmpty = (item) => {
    setIsEmpty(item);
  }

  const handleLoadSearchMeimo = (a) => {
    const updatedMeimos = temporaryMeimos.filter(i => i.name.toLowerCase().includes(a.meimoName.trim().toLowerCase())); 
    (a.meimoName.length == 0) ? /*fetchData()*/setMeimos(temporaryMeimos): (setMeimos(updatedMeimos));
  }

  const deleteSelectedMeimo = (meimo) => {
    meimosMinus = meimos.slice();
    meimosTempMinus = temporaryMeimos.slice();
    deletedMeimo = meimosMinus.splice(meimosMinus.indexOf(meimo), 1);
    deletedMeimoTemp = meimosTempMinus.splice(meimosTempMinus.indexOf(meimo), 1);
    
    setMeimos(meimosMinus);
    setTemporaryMeimos(meimosTempMinus);

    saveDelete(meimo);
  }

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.main_container}>
        <StatusBar barStyle='light-content' StatusBar backgroundColor="#454752"/>
            <View style={styles.first_container}>
            <Loader loading={loading} />
              <View>
                <Text style={styles.Meimo}>
                  M 
                  <Text style={styles.MeimoInner}>e</Text>
                  im
                  <Text style={styles.MeimoInner}>o </Text>
                </Text>
              </View>

              <View style={styles.pandaContainer}>
                <Image
                  source={require('../assets/Panda.png')}
                  style={styles.imagePanda}
                  /*onPress = {openSettings}*/
                />
              </View>
              

              <View style={styles.button_settings}>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert("Disconnected", "");
                    navigation.navigate('Login', {a:123})}
                  }
                >
                  <Image
                    source={require('../assets/settings.png')}
                    style={styles.buttonImageSettings}
                  />
                </TouchableOpacity>
              </View>
            </View>
            
            <MeimoSearch onSearch={handleLoadSearchMeimo} reset=''/>

            <View style={styles.second_container}>
              <FlatList
                data={meimos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <MeimoItem meimo={item} fromHomeNavigateToDetail={(item) => navigation.navigate("Detail", {meimo: item})} deleteSelectedMeimo={() => deleteSelectedMeimo(item)}/>}
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
            <View style={styles.content_thirdContainer}>

                <View style={styles.numberOfMeimoContainer}>
                  {!isEmpty && temporaryMeimos.length > 1 && <Text style={styles.numberOfMeimoText}>{temporaryMeimos.length} Meimos</Text>}
                  {!isEmpty && temporaryMeimos.length <= 1 && <Text style={styles.numberOfMeimoText}>{temporaryMeimos.length} Meimo</Text>}
                </View>

                <View style={styles.button_newMeimoContainer}>
                {isEmpty && userEmail === 'root' &&
                    <TouchableOpacity
                      onPress={() => (navigation.navigate('NewMeimo', {meimos:meimos, 'fetchData':(valueQuery) => fetchData(valueQuery), temporaryMeimos:temporaryMeimos, lastId: 5, 'setSetIsEmpty': (item) => setSetIsEmpty(item), userEmail:userEmail}) )}
                    >   
                      <Image
                        source={require('../assets/Bamboo.png')}
                        style={styles.buttonImageNewMeimo}
                        />
                    </TouchableOpacity>}

                {isEmpty && userEmail !== 'root' &&
                    <TouchableOpacity
                      onPress={() => (navigation.navigate('NewMeimo', {meimos:meimos, 'fetchData':(valueQuery) => fetchData(valueQuery), temporaryMeimos:temporaryMeimos, lastId: 0, 'setSetIsEmpty': (item) => setSetIsEmpty(item), userEmail:userEmail}) )}
                    >   
                      <Image
                        source={require('../assets/Bamboo.png')}
                        style={styles.buttonImageNewMeimo}
                        />
                    </TouchableOpacity>}

                {!isEmpty &&
                    <TouchableOpacity
                      onPress={() => (navigation.navigate('NewMeimo', {meimos:meimos, 'fetchData':(valueQuery) => fetchData(valueQuery), temporaryMeimos:temporaryMeimos, lastId:Math.max.apply(Math, temporaryMeimos.map((o) => o.id.toString())), 'setSetIsEmpty': (item) => setSetIsEmpty(item), userEmail:userEmail}) )}
                    >   
                      <Image
                        source={require('../assets/Bamboo.png')}
                        style={styles.buttonImageNewMeimo}
                        />
                    </TouchableOpacity>}

                
                  
                </View>
                
              </View>
            </View>
      </View>
    </TouchableWithoutFeedback>
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
    flex: 0.09,
  },

/* first_container*/
  Meimo: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'PingFang HK',
    color: 'white',
    paddingLeft: "3%",
    //backgroundColor: 'blue'
  },
  MeimoInner: {
    color:'black',
    paddingLeft:30,
    paddingRight:30,
    textShadowColor:'#c5c5c5',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius:1,
  },
  pandaContainer: {
    flex: 1,
    marginLeft: -10,
  },
  imagePanda: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
  },
  button_settings: {
    flex: 0.3,
    marginEnd: "3%",
    //backgroundColor: 'red'
  },
  buttonImageSettings: {
    height: 50,
    width: 50,
    resizeMode: 'contain'
  }, 


  /* third_container */
  content_thirdContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: 'yellow',
  },
  button_newMeimoContainer: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-end',
    marginEnd: '3%',
    //backgroundColor:'red'
  },
  buttonImageNewMeimo: {
    height: 45,
    width: 45,
    
    resizeMode: 'contain',
    //backgroundColor: 'blue'
  }, 
  numberOfMeimoContainer: {
    flex: 0.85,
    marginLeft: '15%',
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor:'green'
  },
  numberOfMeimoText: {
    flex: 1,
    textAlign: 'center',
    //backgroundColor:'green',
    fontFamily: 'PingFang HK',
    color: 'white'
  }
});


export default HomeScreen;
