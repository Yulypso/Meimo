import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Alert, StatusBar, FlatList,Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Button} from 'react-native';

import MeimoItem from '../components/MeimoItem';
import MeimoSeparator from '../components/MeimoSeparator'
import MeimoSearch from '../components/MeimoSearch'

import Loader from '../components/loader';
import fakedata from '../data/data_meimo';


const HomeScreen = ({ navigation }) => {

  const [meimos, setMeimos] = useState([]);
  const [temporaryMeimos, setTemporaryMeimos] = useState([]);
  const [query, setQuery] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);


  const fetchData = async (isStart) => {
    setLoading(true);

      const response = await fetch(
        //'https://meimojsapirest.herokuapp.com/meimos'
        'http://localhost:5000/meimos'
      )
      .then(response => response.json()
      .then(data => {
        console.log(data)
        ,setMeimos(data)
        ,setTemporaryMeimos(data)
        ,((temporaryMeimos.length == 0 || meimos.length == 0 || data.length == 0) ? setIsEmpty(true) : setIsEmpty(false))
        ,setQuery(2) //change Query 1 time to call fetchData 2 times and rerender the screen. 
      }));
    
    setLoading(false);
  };

  useEffect(() => {

    console.log("fetched data: ");
    fetchData();
    
  }, [query]); //execute effect only if query has changed.


  if(!isEmpty) {
    //if(meimos.length > 1){

      console.log("meimos: "+meimos);
      //console.log(meimos);
      //console.log(meimos.length)
  
      //postData();

      //order meimos by date desc
      meimos.sort((a, b) => new Date(b.date) - new Date(a.date))
    //}
  }
  //retourne un tableau contenant l'état des Meimos [0] et mettre a jour mes Meimos [1]
/*
  date = new Date().getDate(); //Current Date
  month = new Date().getMonth() + 1; //Current Month
  year = new Date().getFullYear(); //Current Year
  hours = new Date().getHours(); //Current Hours
  min = new Date().getMinutes(); //Current Minutes
  sec = new Date().getSeconds(); //Current Seconds
  //{this.date}/{this.month}/{this.year} {this.hours}:{this.min}:{this.sec}*/

  const setSetIsEmpty = (item) => {
    setIsEmpty(item);
  }

  const handleLoadSearchMeimo = (a) => {
    const updatedMeimos = meimos.filter(i => i.name.toLowerCase().includes(a.meimoName.trim().toLowerCase())); 
    (a.meimoName.length == 0) ? /*fetchData()*/setMeimos(temporaryMeimos): (setMeimos(updatedMeimos));
  }

  /*const fromHomeUpdateMeimos = (meimo) => {
    setMeimos(meimos);
    //meimos[meimo.id].id=meimo.id;
    //meimos[meimo.id].name=meimo.name;
    //meimos[meimo.id].date=meimo.date;
    //meimos[meimo.id].overview=meimo.overview;
    console.log(meimos[0].name)
  }*/

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
                  onPress={() => navigation.navigate('Setting', {itemID: '1', itemName: "bamboo"})}
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
                renderItem={({item}) => <MeimoItem meimo={item} fromHomeNavigateToDetail={(item) => navigation.navigate("Detail", {meimo: item})}/>}
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
                  {!isEmpty && meimos.length > 1 && <Text style={styles.numberOfMeimoText}>{meimos.length} Meimos</Text>}
                  {!isEmpty && meimos.length <= 1 && <Text style={styles.numberOfMeimoText}>{meimos.length} Meimo</Text>}
                </View>

                <View style={styles.button_newMeimoContainer}>
                {isEmpty &&
                    <TouchableOpacity
                      onPress={() => (() => fetchData(), navigation.navigate('NewMeimo', {meimos:meimos, temporaryMeimos:temporaryMeimos, lastId: 0, 'setSetIsEmpty': (item) => setSetIsEmpty(item)}) )}
                    >   
                      <Image
                        source={require('../assets/Bamboo.png')}
                        style={styles.buttonImageNewMeimo}
                        />
                    </TouchableOpacity>}

                {!isEmpty &&
                    <TouchableOpacity
                      onPress={() => (() => fetchData(), navigation.navigate('NewMeimo', {meimos:meimos, temporaryMeimos:temporaryMeimos, lastId:Math.max.apply(Math, temporaryMeimos.map((o) => o.id.toString())), 'setSetIsEmpty': (item) => setSetIsEmpty(item)}) )}
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
    flex: 0.2,
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
