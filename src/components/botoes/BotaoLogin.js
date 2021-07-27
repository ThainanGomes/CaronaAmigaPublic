import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default (props) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            style={styles.botaoInicialLogin}
            onPress={() => navigation.navigate('Login')}
        >
            <Text style={styles.textoBotaoInicialLogin}> 
                {props.propsTextoBotao}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botaoInicialLogin:{
        width: 200,
        height: 60,
        backgroundColor: '#EB9831',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',

        shadowOffset: { height: 1, width: 1 },
        shadowColor: '#95a5a6',
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 10,
    },
    textoBotaoInicialLogin:{
        color: '#fff',
        fontSize: 14
    },

})