import React from 'react'
import { 
    Container,
    TelaSuperiorLogin,
    BotaoInformacao,
    ConteudoBotao
 } from './style'
import { Text, StyleSheet, View, Button } from 'react-native'


import SuperiorLogin from '../../components/superior/SuperiorLogin'

export default () => {
    return (
        <Container>
            <SuperiorLogin propsTextoTitulo="CARONA AMIGA" propsTextoMenor="Faça Login ou Cadastre-se" />

            <View style={styles.conteudo}>
                <View style={styles.botoesInformação}>
                    
                </View>
            </View>

        </Container>
    )
}
const styles = StyleSheet.create({
    /** Scroll */
    conteudo:{
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        backgroundColor: '#FFFCF8',
        borderTopEndRadius: 50,
        borderTopStartRadius:50
    },

});