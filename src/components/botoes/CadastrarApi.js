import React from 'react'
import styled from 'styled-components/native';
import { Text, StyleSheet } from 'react-native';

export const CadastrarApi = styled.TouchableOpacity`
    width: 280px;
    height: 50px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    border-radius: 20px;
    border-color: #EB9831;
    border-width: 1.2px;
    margin-bottom: 15px; 
`;  
export const TextoLoginApi = styled.Text`
    flex: 1;
    padding-left: 15px;
    justify-content: center;
    align-items: center;
    color: #565656
`;
export default({IconSvg, propsTextoBotao}) => {
    return(
        <CadastrarApi>
            <IconSvg
                width="22"
                height="22"
            />
            <Text style={styles.TextoLoginApi}>
                {propsTextoBotao}
            </Text>
        </CadastrarApi>
    )
}

const styles = StyleSheet.create({
    TextoLoginApi:{
        flex: 1,
        paddingLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#565656',
    }
})