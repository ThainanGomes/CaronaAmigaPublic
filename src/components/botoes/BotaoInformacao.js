import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function BotaoInformacao(props) {
    return(
        <TouchableOpacity 
            style={styles.botaoInformacao}
            onPress={()=>{}}
        >
            <Text style={styles.textoBotaoInformacao}>{props.textoBotao}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    botaoInformacao:{
        height: 100,
        width: 100,
        backgroundColor: '#FFBF6F',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,

        shadowOffset: { height: 1, width: 1 },
        shadowColor: '#95a5a6',
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 10,
    },
    textoBotaoInformacao:{
        fontSize: 9.5,  
        color: '#fff',
        textAlign: 'center'
    }
});