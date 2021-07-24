import React from 'react';
import { Container, LoadingIcon } from './style';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Font } from 'expo';
import CirculosSvg from '../../assets/Icons/Circulos/circulos.svg';
//import CurvasSvgBackGround from '../../assets/Icons/arteHello/obraprima.svg';

const imagemFundo = '../../assets/Icons/arteHello/obraprimapng.png'

export default () => {
    return (
        <Container>
            <View style={styles.parteSuperiorTexto}>
                <View style={styles.parteSuperiorCirculos}>  
                    <Text style={styles.texto}>
                        CARONA AMIGA
                    </Text>
                    <CirculosSvg /> 
                </View>
            </View>

            <View style={styles.corpoTela}>
                <ImageBackground source={require(imagemFundo)} resizeMode="cover" style={styles.image}>
                    <View style={styles.conteudoCorpo}>
                        <Text style={styles.textoConteudoCorpo}> 
                        Aqui você pode avaliar o condutor e o passageiro. Se não foi agradável para  você, a viagem, para o outro também não será!
                        </Text>
                        <LoadingIcon size="large"/>
                    </View>
                </ImageBackground>
            </View>
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
        marginTop: 80,
        color: '#565656'
    },

    /** Corpo da tela*/
    corpoTela:{
        flex: 1,
        width: '100%',
        marginTop: 20
    }, 
    image: {
        flex: 1,
        justifyContent: "center" 
    },
    textoConteudoCorpo:{
        color: '#fff',
        padding: 20,
        marginBottom: 20,
        fontSize: 20
    }
});