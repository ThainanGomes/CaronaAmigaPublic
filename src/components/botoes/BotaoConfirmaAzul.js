import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default (props, {funcao}) => {
    return (
        <TouchableOpacity style={styles.botaoAzul}
            onPress={()=>  {funcao} }
        >
            <Text style={styles.textoBotaoAzul}>
                {props.propsTextoBotao}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botaoAzul:{
        width: 180,
        height: 55,
        marginTop: 20,
        borderRadius: 15,
        backgroundColor: '#247BA7',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    textoBotaoAzul:{
        color: '#fff'
    }

})