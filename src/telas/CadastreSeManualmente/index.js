import React from 'react'
import { Container } from './style'
import { ScrollView, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

//Components
import SuperiorLogin from '../../components/superior/SuperiorLogin'
import InputCadastro from '../../components/input/InputCadastro'
import BotaoConfirma from '../../components/botoes/BotaoConfirmaAzul'
import ButtomBack from '../../components/botoes/ButtomBack';


//assets
import PersonIcon from '../../assets/Icons/IconesGerais/person_black_24dp.svg'
import CidadeICon from '../../assets/Icons/IconesGerais/location_on_black_24dp.svg'
import GpsIcon from '../../assets/Icons/IconesGerais/my_location_black_24dp.svg'
import EmailIcon from '../../assets/Icons/redesSociais/emailnocolor.svg'

export default() => {
    const navigation = useNavigation()

    return(
        <Container>
            <SuperiorLogin 
                propsTextoTitulo="Cadastre-se"
                propsTextoMenor="Preencha as Informações"
            />
            <View style={styles.conteudo}>
            
                <ButtomBack />  
                <ScrollView>
                    <View style={styles.conteudoColumn}>
                        <InputCadastro
                            TextoSecao="Nome Completo:"
                            IconSvg={PersonIcon}
                            propsTextoInput= "Digite seu nome aqui"
                        /> 
                        <InputCadastro
                            TextoSecao="Cidade:"
                            IconSvg={CidadeICon}
                            propsTextoInput= "Digite a cidade aqui"
                        />
                        <InputCadastro
                            TextoSecao="Endereço:"
                            IconSvg={GpsIcon}
                            propsTextoInput= "Digite a Rua aqui"
                        />
                        <InputCadastro
                            TextoSecao="Número da Residência:"
                            IconSvg={GpsIcon}
                            propsTextoInput= "Digite o número aqui"
                        />
                        <InputCadastro
                            TextoSecao="E-mail:"
                            IconSvg={EmailIcon}
                            propsTextoInput= "E-mail de recuperação"
                        />
                        <BotaoConfirma 
                            propsTextoBotao="Cadastrar-se"
                            //funcao={navigation.navigate('CadastreSeManualmente')}
                            //como fazer os botos componentizados funcionarem? 
                        />
                        </View>      
                </ScrollView>
            </View>
        </Container>
    )
}
const styles = StyleSheet.create({
    conteudo:{
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFCF8',
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
    },
    conteudoColumn:{
        paddingTop: 15,
        marginLeft: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }

})