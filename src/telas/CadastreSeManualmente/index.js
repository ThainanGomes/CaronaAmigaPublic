import React from 'react'
import { Container } from './style'
import { Text, View, StyleSheet } from 'react-native'

//Components
import SuperiorLogin from '../../components/superior/SuperiorLogin'
import InputCadastro from '../../components/input/InputCadastro'
import BotaoConfirma from '../../components/botoes/BotaoConfirmaAzul'

//assets
import PersonIcon from '../../assets/Icons/IconesGerais/person_black_24dp.svg'
import CidadeICon from '../../assets/Icons/IconesGerais/location_on_black_24dp.svg'
import GpsIcon from '../../assets/Icons/IconesGerais/my_location_black_24dp.svg'
import EmailIcon from '../../assets/Icons/redesSociais/emailnocolor.svg'

export default() => {
    return(
        <Container>
            <SuperiorLogin 
                propsTextoTitulo="Cadastre-se"
                propsTextoMenor="Preencha as Informações"
            />
            <View style={styles.conteudo}>
                
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
                />
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
        
        paddingTop: 15,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

})