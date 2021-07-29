import React from 'react';
import { Container } from './style';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


//Components
import SuperiorLogin from '../../components/superior/SuperiorLogin';
import BotaoInformacao from '../../components/botoes/BotaoInformacao';
import BotaoLogin from '../../components/botoes/BotaoLogin';
import BotaoCadastreSe from '../../components/botoes/BotaoCadastreSe';

//assets
import IconPreco from '../../assets/Icons/IconesGerais/sacoDinheiro.svg';
import IconCarro from '../../assets/Icons/IconesGerais/carro (regras p viajar).svg'

export default () => {

    const navigation = useNavigation();
    return (
        <Container>
            <SuperiorLogin
                propsTextoTitulo="CARONA AMIGA" 
                propsTextoMenor="Faça Login ou Cadastre-se" 
            />
            <View style={styles.conteudo}>
                <View style={styles.botoesInformação}>
                    
                    <BotaoInformacao 
                        textoBotao="Média de Precos"
                        IconSvg={IconPreco}
                        funcaoBotao={() => navigation.navigate('Login')}
                    />
                    <BotaoInformacao 
                        textoBotao="Regras para Viajar"
                        IconSvg={IconCarro}
                    />
                </View>
                <View style={styles.scrollLogin}>
                    <BotaoLogin 
                        propsTextoBotao="Login"
                    />
                    <BotaoCadastreSe 
                        propsTextoBotao="Cadastre-se"
                    />
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
    }
});