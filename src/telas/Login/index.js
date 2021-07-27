import React from 'react'
import { Container } from './style'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'

//components
import SuperiorLogin from '../../components/superior/SuperiorLogin'

//Assets
import UserIcon from '../../assets/Icons/IconesGerais/person_black_24dp.svg'
import LockIcon from '../../assets/Icons/IconesGerais/lock.svg'
import InputLogin from '../../components/input/InputLogin'


export default () => {
    return (
        <Container>
            <SuperiorLogin
                propsTextoTitulo="CARONA AMIGA"
                propsTextoMenor="Faça o seu Login"
            />
            <View style={styles.conteudo}>
                <InputLogin IconSvg={UserIcon} />
            </View>

        </Container>
    )
}
const styles = StyleSheet.create({
    conteudo: {
        flex: 1,
        width: '100%',
        padding: 30,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FFFCF8',
        borderTopEndRadius: 50,
        borderTopStartRadius: 50
    } 
})