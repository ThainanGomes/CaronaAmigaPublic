import React from 'react'
import { View, StyleSheet, SafeAreaView, Text, } from 'react-native'
import styled from 'styled-components'

const InputLogin = styled.View`
    width: 200;
    height: 60;
    margin-top: 80px;
    
    flex-direction: row;
    align-items: center;
    padding-left: 15px;
    border-radius: 20;
    border-color: #EB9831;
    border-width: 1.2;

`;
export default ({IconSvg}) => {   
    return (
        <InputLogin>
            <IconSvg 
                width = "22"
                height = "22"
                fill = "#EB9831"
            />
            <Input />
        </InputLogin>
    )
}