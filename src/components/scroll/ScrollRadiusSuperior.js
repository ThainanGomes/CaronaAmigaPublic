import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

export default ()=>{
    return(
        /*Dúvida: como componentizar um background?
            Pensei em usar um 
            <ScrollRadiusSuperior
                Conteudo ;...
                
            />
            masn  consegui
        */
        
        <View style={styles.conteudo}>
            
        </View>
    )
}
const styles = StyleSheet.create({
    conteudo: {
        flex: 1,
        width: '100%',
        padding: 30,
        flexDirection: 'column',
        backgroundColor: '#FFFCF8',
        borderTopEndRadius: 50,
        borderTopStartRadius: 50
    },
})