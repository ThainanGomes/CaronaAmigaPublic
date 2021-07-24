import React from 'react'
import { 
    Container,
    TelaSuperiorLogin,
    BotaoInformacao,
    ConteudoBotao,
    TextoBotaoInformacao
 } from './style'
import { Text, StyleSheet, View, Button, Touchable, TouchableOpacity } from 'react-native'
import IconPreco from '../../assets/Icons/IconesGerais/sacoDinheiro.svg'

import SuperiorLogin from '../../components/superior/SuperiorLogin'

export default () => {
    return (
        <Container>
            <SuperiorLogin 
                propsTextoTitulo="CARONA AMIGA" 
                propsTextoMenor="Faça Login ou Cadastre-se" 
            />

            <View style={styles.conteudo}>
                <View style={styles.botoesInformação}>
                <TouchableOpacity 
                    style={styles.botaoMedia}
                    onPress={()=>{}}
                >
                    <Text style={styles.textoBotao}>Média de Preços</Text>
                </TouchableOpacity>
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
        padding: 40,
        flexDirection: 'column',
        backgroundColor: '#FFFCF8',
        borderTopEndRadius: 50,
        borderTopStartRadius:50
    },
    botaoMedia:{
        height: 100,
        width: 100,
        backgroundColor: '#FFBF6F',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoBotao:{
        fontSize: 12,
        color: '#fff'
    }
});