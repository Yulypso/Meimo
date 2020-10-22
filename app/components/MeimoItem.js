import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

const MeimoItem = (props) => {
    //il faudrait pouvoir faire (props, {route , navigation})
   //// const meimo=props.meimo;
   const {meimo, fromHomeNavigateToDetail} = props;
    //const { navigate } = props.navigation;
    //console.log(fromHomeNavigateToDetail.toString() /* :'( */ ); 

    return (
        <View style={styles.content_container}>
            <TouchableOpacity 
                onPress={() => fromHomeNavigateToDetail(meimo)}
            >
                <View style={styles.header_container}>
                    <Text style={styles.meimo_nameText}>{meimo.name}</Text>
                    <Text style={styles.meimo_dateText}>{meimo.date}</Text>
                </View>
        
                {meimo.overview.length === 0 && <Text style={styles.meimo_descriptionText} numberOfLines={1}>No additionnal text</Text>}
                <Text style={styles.meimo_descriptionText} numberOfLines={1}>{meimo.overview}</Text>
            </TouchableOpacity>
        </View>
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
        marginBottom: "1%"
        //backgroundColor: 'yellow',
    },
    header_container: {
        flex:3,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
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
        flex: 3.5,
        fontSize: 15,
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
        fontSize: 15,
        fontFamily: 'PingFang HK',
        marginLeft: "2%",
        //backgroundColor: 'pink',
    }
})

export default MeimoItem