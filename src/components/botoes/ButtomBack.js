import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import BackIcon from '../../assets/Icons/IconesGerais/back.svg'
import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            style={styles.ConteudoRow}
            onPress={() => navigation.navigate('Inicial')}>
            <BackIcon width="24" height="24" fill="#247BA7" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ConteudoRow: {
        flexDirection: 'row',
        paddingLeft: 30,
        paddingTop: 20
    },
})