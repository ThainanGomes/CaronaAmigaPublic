import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components/native';

const CampoInput = styled.TextInput`
    flex:1;
    justify-content: center;
    align-items:center;
    font-size: 12px;
    color: #565656;   
    margin-left: 10px;
`;
export const InputCadastro = styled.View`
    width: 250px;
    height: 50px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    border-radius: 20px;
    border-color: #EB9831;
    border-width: 1.2px;
`;

export const ViewInputCadastreSe = styled.View`
    margin-bottom: 15px; 
`;

export default({TextoSecao,IconSvg, propsTextoInput}) => {
    return(
        <ViewInputCadastreSe>
            <Text style={styles.estiloTextoSecao}>{TextoSecao}</Text>
            <InputCadastro>
            
                <IconSvg 
                    width="22"
                    height="22"
                    fill="#565656"
                />
                <CampoInput>
                    <Text style={styles.textoInput}>
                        {propsTextoInput}
                    </Text> 
                </CampoInput>
            </InputCadastro>
        </ViewInputCadastreSe>
    
    )
}
const styles = StyleSheet.create({
    textoInput:{
        marginLeft: 40,
        color: '#565656'
    },
    estiloTextoSecao:{
        marginBottom: 5,
        color: '#565656',
    }
})
