import React, { Component } from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';

const MeimoItem = (props) => {
    //il faudrait pouvoir faire (props, {route , navigation})
   //// const meimo=props.meimo;
   const {meimo, fromHomeNavigateToDetail, deleteSelectedMeimo} = props;
    //const { navigate } = props.navigation;
    //console.log(fromHomeNavigateToDetail.toString() /* :'( */ ); 

    const renderRightActions = (progress, dragX) => {
        
        return (
          <TouchableOpacity onPress={() => deleteSelectedMeimo(meimo)} activeOpacity={0.6}>
            <View style={styles.deleteBox}>
              <Text style={styles.deleteText}>
                Delete
              </Text>
            </View>
          </TouchableOpacity>
        );
      };

    return (
        <Swipeable 
                renderRightActions={renderRightActions}
            >
            <View style={styles.content_container}>
            
                <TouchableOpacity 
                    onPress={() => fromHomeNavigateToDetail(meimo)}
                >
                    {/*console.log("meimo get in MeimoITEM: "+ meimo.name)*/}
                    <View style={styles.header_container}>
                        <Text style={styles.meimo_nameText} numberOfLines={1}>{meimo.name}</Text>
                        <Text style={styles.meimo_dateText}>{meimo.date}</Text>
                    </View>
            
                    {meimo.overview.length === 0 && <Text style={styles.meimo_descriptionText} numberOfLines={1}>No additionnal text</Text>}
                    <Text style={styles.meimo_descriptionText} numberOfLines={1}>{meimo.overview}</Text>
                </TouchableOpacity>
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create ({
    content_container: {
        flex:1,
        flexDirection: "column",
        margin: 5,
        textAlign: 'center',
        marginStart: "3%",
        marginEnd: "3%",
        marginTop: "1%",
        marginBottom: "1%",
        //backgroundColor: 'yellow',
    },
    header_container: {
        flex:3,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'green',
    },
    meimo_nameText: {
        flex: 3,
        fontSize: 20,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        marginLeft: "2%",
        color: 'white',
        fontFamily: 'PingFang HK',
    },
    meimo_dateText: {
        flex: 2,
        fontSize: 10,
        color: 'grey',
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: "2%",
        fontFamily: 'PingFang HK',
        //backgroundColor: 'red',
    },
    meimo_descriptionText: {
        fontStyle: 'normal',
        color: 'darkgrey',
        flex: 7,
        fontSize: 12,
        fontFamily: 'PingFang HK',
        marginLeft: "2%",
        //backgroundColor: 'pink',
    },
    deleteBox: {
        backgroundColor: '#DF1814',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        flex: 1,
        flexDirection: "column"
    },
    deleteText: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'normal',
    }
})

export default MeimoItem