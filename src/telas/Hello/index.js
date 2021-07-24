import React, {useEffect} from 'react';
import { Container, LoadingIcon } from './style';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import CirculosSvg from '../../assets/Icons/Circulos/circulos.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

//import CurvasSvgBackGround from '../../assets/Icons/arteHello/obraprima.svg';
const imagemFundo = '../../assets/Icons/arteHello/obraprimapng.png'

export default () => {

    const navigation = useNavigation();
      
    useEffect(() =>{
        const checkToken = async () =>{
            const token = await AsyncStorage.getItem('token');
            if(token){
                //validar token
            }else{
                navigation.navigate('Inicial')
            }
        }
        checkToken();
    }, []);

    return (
        <Container>
            <View style={styles.parteSuperiorTexto}>
                <View style={styles.parteSuperiorCirculos}>  
                    <Text style={styles.texto}>
                        CARONA AMIGA
                    </Text>
                    <CirculosSvg /> 
                </View>
            </View>

            <View style={styles.corpoTela}>
                <ImageBackground source={require(imagemFundo)} resizeMode="cover" style={styles.image}>
                    <View style={styles.conteudoCorpo}>
                        <Text style={styles.textoConteudoCorpo}> 
                        Aqui você pode avaliar o condutor e o passageiro. Se não foi agradável para  você, a viagem, para o outro também não será!
                        </Text>
                        <LoadingIcon size="large" color="#fff"/>
                    </View>
                </ImageBackground>
            </View>
        </Container>
        
    )
}
const styles = StyleSheet.create({
    parteSuperiorCirculos:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    parteSuperiorTexto:{
        justifyContent: 'flex-start',
        width: "100%"
    },
    texto:{
        marginRight: 15,
        fontSize: 30,   
        marginTop: 70,
        color: '#565656'
    },

    /** Corpo da tela*/
    corpoTela:{
        flex: 1,
        width: '100%',
        marginTop: 20
    }, 
    image: {
        flex: 1,
        justifyContent: "center" 
    },
    textoConteudoCorpo:{
        color: '#fff',
        padding: 20,
        marginBottom: 20,
        fontSize: 20
    }
});