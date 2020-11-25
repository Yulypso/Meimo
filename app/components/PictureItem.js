import React from 'react'
import {StyleSheet, View, SafeAreaView, Text, Image, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

import data from '../data/data_meimo'

const PictureItem = (props) => {
    //il faudrait pouvoir faire (props, {route , navigation})
   //// const meimo=props.meimo;
   const {meimoPictures/*, fromHomeNavigate*/} = props;
    //const { navigate } = props.navigation;
    //console.log(fromHomeNavigate.toString() /* :'( */ ); 
   // console.log(meimo.name);

   
    return (
        <SafeAreaView style={styles.content_container}>
            <TouchableOpacity 
                //onPress={() => fromHomeNavigate(picture)}
            >
                {<Image
                    source={meimoPictures.key} //TODO display list of Meimos pictures
                    style={styles.ImageSettings}
                />}
                <TextInput>
                    {/*console.log(meimo)*/}
                </TextInput>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    content_container: {
        margin: 5.1,
        marginTop: "5%",
        paddingStart: 1.6
        //backgroundColor: 'yellow',
    },


    ImageSettings: {
        height: 182,
        width: 110,
        borderWidth:2,
        borderColor:'black',
        resizeMode:'cover',
        borderRadius: 20
    }, 
})

export default PictureItem