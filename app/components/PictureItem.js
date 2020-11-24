import React from 'react'
import {StyleSheet, View, SafeAreaView, Text, Image, TouchableOpacity} from 'react-native'

const PictureItem = (props) => {
    //il faudrait pouvoir faire (props, {route , navigation})
   //// const meimo=props.meimo;
   const {meimo/*, fromHomeNavigate*/} = props;
    //const { navigate } = props.navigation;
    //console.log(fromHomeNavigate.toString() /* :'( */ ); 
   // console.log(meimo.name);

   
    return (
        <SafeAreaView style={styles.content_container}>
            <TouchableOpacity 
                //onPress={() => fromHomeNavigate(picture)}
            >
                {<Image
                    source={meimo.pictures[1]} //TODO display list of Meimos pictures
                    style={styles.ImageSettings}
                />}
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
        borderWidth:1,
        borderColor:'#d35647',
        resizeMode:'cover',
    }, 
})

export default PictureItem