import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TextInput, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon }  from '@expo/vector-icons';
import { Container, Main, MainText,MainDescription, Header, Logo, TextImage }  from './styles';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';
import { SvgUri } from 'react-native-svg';


interface IBGEUFResponse {
    sigla: string;
};

interface IBGECityResponse {
    nome: string;
};

const Home = () => {
    const [selectedUf, setSelectedUf] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [uf, setUf] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);
    const navigation = useNavigation();

    function handleNavigateToTypes() {
        navigation.navigate('Types', {
            uf: selectedUf,
            city: selectedCity
        });
    };

    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
            const initialUf = response.data.map(uf => uf.sigla);

            setUf(initialUf)
        });
    }, []);

    useEffect(() => {
        if(selectedUf === '0') {
            return;
        }

        axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response => {
            const city = response.data.map(city => city.nome)
            
            
            setCities(city)
        });

    }, [selectedUf]);

    
    return (
        <Container>
            <ImageBackground source={require('../../assets/home.png')}
            imageStyle={{ width: 335, height: 368}}
            style={{ flex: 1, padding: 32}}
        >
        <Main>
            <Header>
                <Logo source={require('../../assets/logo2.png')}/>
                {/* <SvgUri width={42} height={42} uri={require('../../assets/logosvg.svg')}/> */}
                    <TextImage>FindService</TextImage>
            </Header>

            <MainText>Seu marketplace de serviços gerais.</MainText>
            <MainDescription>Ajudamos pessoas a encontrarem serviços gerais de forma rapida.</MainDescription>
        
        </Main>

        <RNPickerSelect
            onValueChange={(value) => setSelectedUf(value)
            }

        
            items={
                
                    uf.map(uf => ({
                        label: uf,
                        value: uf,
                    }))
                }
        >
            <TextInput
            style={styles.input}
            maxLength={2} 
            autoCorrect={false} 
            autoCapitalize="characters"
            value={selectedUf} 
            onChangeText={setSelectedUf}
            placeholder="Selecione uma UF"
           
            />

        </RNPickerSelect>
          <RNPickerSelect
            onValueChange={(value) => setSelectedCity(value)
                
            }
            
            items={
                    cities.map(city => ({
                        label: city,
                        value: city,
                    }))
                }
               
        >
            <TextInput
            style={styles.input}
            value={selectedCity}
            autoCorrect={false} 
            autoCapitalize="characters"
            onChangeText={setSelectedUf}
            placeholder="Selecione uma Cidade"
            
            />
        </RNPickerSelect>

                <RectButton style={styles.button} onPress={handleNavigateToTypes}>
                    <View style={styles.buttonIcon}>
                        <Text> 
                            <Icon name="arrow-right" color="#FFF" size={24} />
                        </Text>
                    </View>
                    <Text style={styles.buttonText}>Entrar</Text>
                </RectButton>
            
            </ImageBackground>
            
        </Container>
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        height: 55,
        
     
        color: '#6a6a6a',
        marginBottom: 10,
        borderRadius: 8,
        paddingHorizontal: 24
    },
    button: {
        backgroundColor: '#183172',
        height: 60,
        marginTop: 8,
        borderRadius: 10,
        marginBottom: 0,
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonIcon: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
    flex: 1,
    paddingRight: 32,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#fff',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    }
})


export default Home;