import React, {useState} from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native'

const MeimoSearch = (props) => {

    const [searched_text, setSearched_text] = useState('');

    const handleSearchMeimo = () => {
        const meimoName = searched_text;
        props.onSearch({meimoName});
    }

    const handleTextInputChange = (text) => {
        setSearched_text(text) 
    }

    const handleChange = () => {
        searched_text.length === 0 ? handleSearchMeimo() : null;
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.textInput}>
                <TextInput 
                    style={styles.insideText} 
                    placeholder='Search a Meimo 🔍' 
                    placeholderTextColor='#858A9E'
                    onChangeText={(text) => handleTextInputChange(text)}
                    onSubmitEditing={handleSearchMeimo}
                    onChange={() => handleChange}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    textInput: {
    flex: 0.07,
    marginTop: "1%",
    marginBottom: "5%"
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