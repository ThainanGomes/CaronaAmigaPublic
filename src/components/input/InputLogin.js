import React from 'react'
import styled from 'styled-components'
import { Text } from 'react-native';

const InputLogin = styled.View`
    width: 260px;
    height: 60px;

    flex-direction: row;
    align-items: center;
    padding-left: 15px;
    border-radius: 20px;
    border-color: #EB9831;
    border-width: 1.2px;
    margin-bottom: 15px;
`;
const CampoInput = styled.TextInput`
    flex:1;
    justify-content: center;
    align-items:center;
    font-size: 12px;
    color: #565656;   
    margin-left: 10px;
`;
export default ({IconSvg, placeholder, value, onChangeText, senha}) => {   
    return (
        <InputLogin>
            <IconSvg 
                width = "22"
                height = "22"
                fill = "#EB9831"
            />
            <CampoInput 
                placeholder={placeholder}
                placeholderTextColor="#EB9831" 
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={senha}
                />
        </InputLogin>
    )
}