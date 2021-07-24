import React from 'react'
import { Container } from './style'
import { Text, StyleSheet, View } from 'react-native'
import IconeCarona from '../../assets/logo/logoSvgInicial.svg'
export default () => {
    return (
        <Container>
            <View style={styles.parteSuperiorLogoTexto}>
                <View style={styles.parteSuperior}>
                    <View style={styles.layoutTextos}>
                        <Text style={styles.texto}>
                            CARONA AMIGA
                        </Text>
                        <Text style={styles.textomenor}>
                            Ajude com a sua avaliação
                        </Text>
                        </View>  
                    <IconeCarona /> 
                </View>
            </View>

            <View style={styles.conteudo}>
                <View style={styles.botoesInformação}>

                </View>
            </View>

        </Container>
    )
}
const styles = StyleSheet.create({
    parteSuperiorLogoTexto:{
        justifyContent: 'flex-start',
        width: "100%"
    },
    parteSuperior:{
        flexDirection: 'row',
        paddingTop: 4,
        justifyContent: 'flex-end',
        backgroundColor: '#EB9831',
        paddingBottom: 20
    },
    layoutTextos:{
        flex: 1,
        flexDirection: 'column'
    },
    texto:{
        margin: 10,
        fontSize: 25,   
        marginTop: 45,
        color: '#fff'
    },
    textomenor:{
        marginLeft: 25,
        fontSize: 15,
        color: '#fff'
    },
    /** Scroll */
    conteudo:{
        flex: 1,
        flexDirection: 'column'
    }
});