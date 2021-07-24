import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import IconeCarona from '../../assets/logo/logoSvgInicial.svg'

export default function SuperiorLogin(props) {
    return (
        <View style={styles.parteSuperiorLogoTexto}>
            <View style={styles.parteSuperior}>
                <View style={styles.layoutTextos}>
                    <Text style={styles.texto}>
                        {props.propsTextoTitulo}
                    </Text>
                    <Text style={styles.textomenor}>
                        {props.propsTextoMenor}
                    </Text>
                </View>
                <IconeCarona />
            </View>
        </View>
    );
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
    }
});