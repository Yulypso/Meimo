// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
import { StyleSheet, Button, TextInput, View, Text, ScrollView, Image, Keyboard, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import Loader from '../components/loader';

const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [loading, setLoading] = useState(false);

  /*const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    let dataToSend = {
          user_email: userEmail,
          user_password: userPassword
        };
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('https://aboutreact.herokuapp.com/login.php', {
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
          AsyncStorage.setItem(
            'user_id',
             responseJson.data[0].user_id
          );
          console.log(responseJson.data[0].user_id);
          navigation.replace('DrawerNavigationRoutes');
        } else {
          setErrortext('Please check your email id or password');
          console.log('Please check your email id or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };*/

  return (
    <View style={styles.mainBody}>
        <View style={styles.headerContainer}>
        <View style={styles.ButtonsContainer}></View>
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
                        onChangeText={(userEmail) => setUserEmail(userEmail)}
                        placeholder="Email" 
                        placeholderTextColor="#8b9cb5"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        returnKeyType="next"
                        onSubmitEditing={() => console.log("email entered")}
                        blurOnSubmit={false}
                    />
                </View>

                <View style={styles.TextZoneStyle}>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(userPassword) => setUserPassword(userPassword)}
                        placeholder="Password" 
                        placeholderTextColor="#8b9cb5"
                        keyboardType="default"
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                        secureTextEntry={true}
                        returnKeyType="next"
                    />
                </View>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={() => {console.log("SIGN IN : " + userEmail + " " + userPassword); 
                                    navigation.navigate('Home', {userEmail:userEmail}) //check password with database first
                                }}> 
                    <Text style={styles.buttonTextStyle}>
                        SIGN IN
                    </Text>
                </TouchableOpacity>

                <Text
                    style={styles.registerTextStyle}
                    onPress={() => navigation.navigate('Register', {abc:123})}>
                    New Here ? Sign up
                </Text>
            </KeyboardAvoidingView>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2F3138',
    alignContent: 'center',
  },
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
    marginTop: '65%',
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
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  /*errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
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
    backgroundColor: '#2F3138',
  },
});

export default LoginScreen;