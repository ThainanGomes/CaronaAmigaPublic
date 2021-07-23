import React from 'react';
import { Container, LoadingIcon } from './style';
import { View, StyleSheet, Text } from 'react-native'

import CirculosSvg from '../../assets/Icons/Circulos/circulos.svg';
import CurvasSvg from '../../assets/Icons/arteHello/obraprima.svg';

export default () => {
    return (
        <Container>
            <View style={styles.parteSuperiorTexto}>
                <View style={styles.parteSuperiorCirculos}>  
                    <CirculosSvg />
                </View>
                <Text style={styles.texto}>
                    Carona Amiga App
                </Text>
            </View>
            <View style={styles.corpoTela}>
                <LoadingIcon size="large" color="#565656"/>
            </View>
            <CurvasSvg style={styles.arteBackGround}/>    
        </Container>
        
    )
}
const styles = StyleSheet.create({
    parteSuperiorCirculos:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    parteSuperiorTexto:{
        justifyContent: 'flex-start',
        width: "100%"
    },
    texto:{
        marginLeft: 25,
        fontSize: 30,   
        color: '#565656'
    },

    /** Corpo da tela*/
    corpoTela:{
        margin: 0
    },
    arteBackGround:{
       flex: 1
    }
});