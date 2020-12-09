import React, {useState, createRef} from 'react';
import { StyleSheet, Button, Alert, TextInput, View, Text, Image, KeyboardAvoidingView, Keyboard, TouchableOpacity, ScrollView } from 'react-native';

import Loader from '../components/loader';

const RegisterScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  var userEmail='';
  var userPassword='';
  var userConfirmPassword='';

  const postData = (user) => {
    console.log("posted data : " + user.email);
    fetch(
      'https://meimojsapirest.herokuapp.com/users'
      //'http://localhost:5000/users'
      ,{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: user
        })
      })
  }

/*
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
        ,setQuery(valueQuery) //change Query 1 time to call fetchData 2 times and rerender the screen. 
      }));
*/



  const saveUser = () => {
    if(userPassword != '' && userConfirmPassword != '') {

      if(userEmail === '')
        Alert.alert("Email is empty!", "");
      else {
        if(userPassword === userConfirmPassword){
          postData({
            email: userEmail,
            password: userPassword,
          });
          Alert.alert("Registered!", "");
          console.log("handle Registered : " + userEmail + " " + userPassword + " " + userConfirmPassword);
          navigation.navigate("Home", {userEmail: userEmail});
        }
        else {
          Alert.alert("Password are not identical", "");
        }
      }
    }
    else {
      if(userEmail === '' && userPassword === '')
        Alert.alert("Email & Password are empty", "");
      else if(userPassword === '')
        Alert.alert("Password is empty", "");
      else if(userEmail === '')
        Alert.alert("Email is empty", "");
    }
    console.log('saved user');
  }


  const handleUserEmailTextInputChange = (text) => {
    userEmail = text;
  }

  const handleUserPasswordTextInputChange = (text) => {
    userPassword = text;
  }

  const handleUserConfirmPasswordTextInputChange = (text) => {
    userConfirmPassword = text;
  }
/*
  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {
      alert('Please fill Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userAge) {
      alert('Please fill Age');
      return;
    }
    if (!userAddress) {
      alert('Please fill Address');
      return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      user_name: userName,
      user_email: userEmail,
      user_age: userAge,
      user_address: userAddress,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('https://aboutreact.herokuapp.com/register.php', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type': 
          'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status == 1) {
          setIsRegistraionSuccess(true);
          console.log(
            'Registration Successful. Please Login to proceed'
          );
        } else {
          setErrortext('Registration Unsuccessful');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        <Text style={styles.successTextStyle}>
          Registration Successful
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }*/
  return (
    <View style={{flex: 1, backgroundColor: '#2F3138'}}>
       

        <View style={styles.headerContainer}>
            <View style={styles.ButtonsContainer}>
                <View style={styles.backButtonContainer}>
                <Button
                    title="< Back"
                    color="#0583F2"
                    onPress= {() => {/*navigation.goBack();*/navigation.navigate("Login", {abc:123})}} //CA FONCTIONNE EN LUI DONNANT NIMP ?? 
                ></Button>
                </View>
            </View>

            <View style={styles.first_container}>
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
            </View>
        </View>
        <View style={styles.registerContainer}>
            <Loader loading={loading} />
                
            <KeyboardAvoidingView enabled>

            <View style={styles.TextZoneStyle}>
                <TextInput
                style={styles.inputStyle}
                onChangeText={userEmail => handleUserEmailTextInputChange(userEmail)}
                placeholder="Email"
                placeholderTextColor="#8b9cb5"
                keyboardType="email-address"
                />
            </View>

            <View style={styles.TextZoneStyle}>
                <TextInput
                style={styles.inputStyle}
                onChangeText={userPassword => handleUserPasswordTextInputChange(userPassword)}
                placeholder="Password"
                placeholderTextColor="#8b9cb5"
                secureTextEntry={true}
                />
            </View>

            <View style={styles.TextZoneStyle}>
                <TextInput
                style={styles.inputStyle}
                onChangeText={userConfirmPassword => handleUserConfirmPasswordTextInputChange(userConfirmPassword)}
                placeholder="Confirm Password"
                placeholderTextColor="#8b9cb5"
                secureTextEntry={true}
                />
            </View>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {saveUser()}}
                activeOpacity={0.5}
            >
                <Text style={styles.buttonTextStyle}>
                    SIGN UP
                </Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TextZoneStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: '3%',
    marginLeft: '8%',
    marginRight: '8%',
    marginBottom: '3%'
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginTop: '80%',
    marginLeft: '8%',
    marginRight: '8%',
    marginBottom: '3%'
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  /*errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },*/
  headerContainer: {
    flex: 0.3,
    //backgroundColor: "red",
  },
  registerContainer: {
    flex: 0.7,
    //backgroundColor: "yellow",
  },
  imagePanda: {
    marginTop: 5,
    height: 70,
    width: 70,
    resizeMode: 'contain',
  },
  first_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'yellow',
  },
  Meimo: {
    fontSize: 60,
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

  ButtonsContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
});

export default RegisterScreen;