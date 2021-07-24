import React from 'react'
import  styled  from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #EB9831;
`;
export const BotaoInformacao = styled.TouchableOpacity`
    height: 100px;
    width: 100px;
    background-color: #FFBF6F;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;

export const TextoBotaoInformacao = styled.Text`
    fontSize: 12px;
    color: #fff;
`;