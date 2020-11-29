import React from 'react'
import {StyleSheet, View, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native'

const MeimoSearch = (props) => {

    var searched_text=props.reset;

    const handleSearchMeimo = () => {
        const meimoName = searched_text;
        props.onSearch({meimoName});
    }
    
    const handleTextInputChange = text => {
        searched_text = text;
        const meimoName = searched_text;
        props.onSearch({meimoName});
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.textInput}>
                <TextInput 
                    style={styles.insideText} 
                    placeholder='Search a Meimo 🔍' 
                    placeholderTextColor='#858A9E'
                    onChangeText={text => handleTextInputChange(text)}
                    onSubmitEditing={() => handleSearchMeimo()}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    textInput: {
    flex: 0.07,
    marginTop: "3%",
    marginBottom: "4%"
    //backgroundColor: 'yellow'
    },
    insideText: {
        flex: 1,
        marginLeft: "3%",
        marginRight: "3%",
        height: 50,
        borderWidth: 0,
        paddingLeft: 5,
        borderRadius: 10,
        color: 'white',
        backgroundColor: '#454752',
        fontFamily: 'PingFang HK',
        fontSize: 14
    },
})

export default MeimoSearch