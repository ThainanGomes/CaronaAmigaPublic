import React, {useState} from 'react'
import { Container } from './style'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

//components
import SuperiorLogin from '../../components/superior/SuperiorLogin'
import InputLogin from '../../components/input/InputLogin'
import BotaoConfirmaAzul from '../../components/botoes/BotaoConfirmaAzul'
import ButtomBack from '../../components/botoes/ButtomBack';
//Assets
import UserIcon from '../../assets/Icons/IconesGerais/person_black_24dp.svg'
import LockIcon from '../../assets/Icons/IconesGerais/lock.svg'

export default () => {
    const navigation = useNavigation();

    const [campoEmail, setCampoEmail] = useState('')
    const [campoSenha, setCampoSenha] = useState('')

    return (
        <Container>
            <SuperiorLogin
                propsTextoTitulo="CARONA AMIGA"
                propsTextoMenor="Faça o seu Login"
            />
            <View style={styles.conteudo}>
                <ButtomBack />
                    <View style={styles.ConteudoColumn}>
                        <InputLogin
                            IconSvg={UserIcon}
                            placeholder="Digite seu e-mail"
                            value={campoEmail}
                            onChangeText={texto => setCampoEmail(texto)}
                        />
                        <InputLogin
                            IconSvg={LockIcon}
                            placeholder="Digite sua senha"
                            value={campoSenha}
                            onChangeText={texto => setCampoSenha(texto)}
                            senha={true}
                        />
                        <BotaoConfirmaAzul
                            propsTextoBotao="Confirma"
                            onpress={() => { console.log('apertou o botao') }}
                        />
                        <View style={styles.textos}>
                            <TouchableOpacity>
                                <Text style={styles.styleTextos}>
                                    Esqueci a senha
                                </Text>
                            </TouchableOpacity>

                            <View style={styles.textosCadastro}>
                                <Text style={styles.styleTextos}>
                                    Ainda não possui Conta?
                                </Text>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('CadastreSe')}
                                >
                                    <Text style={styles.styleTextosBold}>Cadastre-se</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
            </View>
        </Container>
    )
}
const styles = StyleSheet.create({
    conteudo: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFCF8',
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
    },
    textosCadastro: {
        flexDirection: 'row',
        marginTop: 5
    },
    textos: {
        width: '100%',
        marginTop: 25,
        marginRight: 50,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    styleTextos: {
        color: '#EB9831',

    },
    styleTextosBold: {
        color: '#EB9831',
        fontWeight: 'bold',
        marginLeft: 5
    },
    //scroll ajustado
    ConteudoColumn:{
        flex: 1,
        paddingTop: 30,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})