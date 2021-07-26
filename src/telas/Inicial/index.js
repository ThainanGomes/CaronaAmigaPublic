import React from 'react'
import { Container, IconSvg, ScrollLogin } from './style'
import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
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
                        style={styles.botaoInformacao}
                        onPress={()=>{}}    
                    >
                        <Text style={styles.textoBotaoInformacao}>Média de Preços</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.botaoInformacao}
                        onPress={()=>{}}
                    >
                        <Text style={styles.textoBotaoInformacao}>Regras para Viajar</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.scrollLogin}>
                    <TouchableOpacity 
                        IconSvg={IconPreco}
                        style={styles.botaoInicialLogin}
                    >
                        <Text style={styles.textoBotaoInicialLogin}> Login </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.botaoInicialCadastreSe}>
                        <Text style={styles.textoBotaoInicialCadastreSe}> Cadastre-se </Text>
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
        padding: 30,
        flexDirection: 'column',
        backgroundColor: '#FFFCF8',
        borderTopEndRadius: 50,
        borderTopStartRadius:50
    },
    botoesInformação:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
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
    },
    scrollLogin:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    },
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
    botaoInicialCadastreSe:{
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
    textoBotaoInicialCadastreSe:{
        color: '#EB9831',
        fontSize: 14
    }

});