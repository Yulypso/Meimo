import React, {useState} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native' 

const SearchMeimoItem = (props) => {

    const [newMeimo, setNewMeimo] = useState("");

    const handleChange = event => {
        setNewMeimo(event.currentTarget.value);
    };

    const handleLoadMeimo = event => {
        event.preventDefault();

        const id = new Date().getTime();
        const name = newMeimo;
        
        setNewMeimo("");
    }

    return (
        <View style={styles.main_container}>
                <View style={styles.header_container}>
                    <Text style={styles.title_text}>{film.title}</Text>
                    <Text style={styles.vote_text}>{film.vote_average}</Text>
                </View>
        </View>
    )
    
}

const styles = StyleSheet.create ({
    main_container: {
        height: 190,
        flexDirection: "row"
    },
    header_container: {
        flex:3,
        flexDirection: "row"
    },
    title_text: {
        flex: 3,
        fontSize: 20,
        fontWeight: 'bold',
        flexWrap: 'wrap', //permet d'afficher le texte a la ligne si trop long
        paddingRight: 5
    },
    vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    }
})

export default SearchMeimoItem