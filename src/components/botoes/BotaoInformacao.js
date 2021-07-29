import React from 'react'
import styled from 'styled-components'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const BotaoInformacao = styled.TouchableOpacity`
    height:100px;
    width: 100px;
    background-color: #FFBF6F;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

export default({textoBotao, IconSvg, funcaoBotao}) => {
    return(
        <BotaoInformacao style={styles.botaoInformacao}
            onPress={funcaoBotao}
        >
            <IconSvg 
                width = "50"
                height = "50"
                fill = "#fff"
            />
            <Text style={styles.textoBotaoInformacao}>{textoBotao}</Text>
        </BotaoInformacao>
    );
}

const styles = StyleSheet.create({
    botaoInformacao:{
        shadowOffset: { height: 1, width: 1 },
        shadowColor: '#95a5a6',
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 10,
    },
    textoBotaoInformacao:{
        marginTop: 10,  
        fontSize: 10,  
        color: '#fff',
        textAlign: 'center'
    }
});