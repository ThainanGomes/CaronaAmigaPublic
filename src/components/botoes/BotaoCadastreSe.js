import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default (props) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            style={styles.botaoInicial}
            onPress={() => navigation.navigate('CadastreSe')}
        >
            <Text style={styles.textoBotaoInicial}> 
                {props.propsTextoBotao}
            </Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    botaoInicial:{
        marginTop: 12,
        width: 200,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',

        shadowOffset: { height: 1, width: 1 },
        shadowColor: '#95a5a6',
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 10,
    },
    textoBotaoInicial:{
        color: '#EB9831',
        fontSize: 14
    },

})