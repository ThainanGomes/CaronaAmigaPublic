import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//components
import SuperiorLogin from '../../components/superior/SuperiorLogin'
import { Container } from './style';
import CadastrarApi from '../../components/botoes/CadastrarApi'
import BotaoConfirmaAzul from '../../components/botoes/BotaoConfirmaAzul';
import ButtomBack from '../../components/botoes/ButtomBack';

//Assets
import FacebookICon from '../../assets/Icons/redesSociais/facebook_black_24dp.svg'
import EmailIcon from '../../assets/Icons/redesSociais/email_black_24dp.svg'
import GoogleIcon from '../../assets/Icons/redesSociais/icons8-google-logo.svg'
import BackIcon from '../../assets/Icons/IconesGerais/back.svg'

export default () => {
    const navigation = useNavigation();

    return (
        <Container>
            <SuperiorLogin
                propsTextoTitulo="CARONA AMIGA"
                propsTextoMenor="Faça o seu cadastro"
            />
            <View style={styles.conteudo}>
                <ButtomBack />

                <View style={styles.ConteudoColumn}> 
                    <CadastrarApi IconSvg={FacebookICon}
                        propsTextoBotao="Entrar com Facebook" />

                    <CadastrarApi IconSvg={EmailIcon}
                        propsTextoBotao="Entrar com Email" />

                    <CadastrarApi IconSvg={GoogleIcon}
                        propsTextoBotao="Entrar com o Google" />

                    <BotaoConfirmaAzul
                        propsTextoBotao="Cadastrar-se"
                        onPress={()=> navigation.navigate('Inicial')}
                    />
                </View>
            </View>
        </Container>
    );
}
const styles = StyleSheet.create({
    conteudo: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFCF8',
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
    },
    ConteudoRow: {
        flexDirection: 'row',
        paddingLeft: 30,
        paddingTop: 20
    },
    ConteudoColumn:{
        flex: 1,
        paddingTop: 30,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        
    }
})