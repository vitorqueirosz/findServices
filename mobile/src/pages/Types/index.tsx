import React, { useState, useEffect } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon} from '@expo/vector-icons';
import { View, Text, StyleSheet, ScrollView, TextInput, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Location from 'expo-location';
import RNPickerSelect from 'react-native-picker-select';

import { 
  Container, 
  Header, 
  HeaderText, 
  SubText, 
  Main, 
  ImageMarker, 
  MarkerContainer, 
  MarkerImageText,
  ServicesContainer,
  ServiceButton,
  ServiceText,
  MidlleContent,
  
   } from './styles';

import { SvgUri } from 'react-native-svg';

import api from '../../services/api';

interface Services {
  id: number;
  title: string;
  image_url: string;

};

interface Types {
  id: number,
  name: string,
  image: string,
  image_url: string,
  latitude: number,
  longitude: number,

};
interface TypeSelected {
  types: string;
};

// interface Actuation {
//   actuation: string;
// };

interface Params {
  uf: string;
  city: string;

};


const Types = () => {

  const [services, setServices] = useState<Services[]>([]);
  const [types, setTypes] = useState<Types[]>([]);

  const [selectedTypes, setSelectedTypes] = useState();
  const [selectedActuation, setSelectedActuation] = useState();

  const [selectedServices, SetSelectedServices] = useState<number[]>([]);
  const [initialPosition, setInitialPosition ] = useState<[number, number]>([0,0]);
  const navigation = useNavigation();

  const route = useRoute();
  const routeParams = route.params as Params;

  useEffect(() => {
       
    async function loadPosition() {
        const { status } = await Location.requestPermissionsAsync();

        if(status !== 'granted') {
            Alert.alert('Ooooops....', 'Precisamos da sua permissao para marcar sua localizacao');
            return;
        }

        const location = await Location.getCurrentPositionAsync();

        const { latitude, longitude } = location.coords;

        console.log(latitude, longitude);

        setInitialPosition([
            latitude,
            longitude,
        ])
    }
    loadPosition();
}, []);


  useEffect(() => {
    api.get('typeService', {
      params: {
        types: selectedTypes,
        actuation: selectedActuation,
        city: routeParams.city,
        uf: routeParams.uf,
        services: selectedServices

      },
    }).then(response => {
      setTypes(response.data)
      {console.log(response.data)}
      {console.log(response.data.image_url)}
    })
  }, [selectedServices]);


  function handleNavigateBack() {
    navigation.goBack();
  };

  function handleNavigateToDetails(id: number) {
    navigation.navigate('Details', {
      point_id: id
    })
  };

  function handleSelectedServices(id: number) {
     const alreadySelected = selectedServices.findIndex(service => service === id);

     if (alreadySelected >= 0) {
      const filteredService = selectedServices.filter(service => service !== id);

       SetSelectedServices(filteredService)

     } else {

       SetSelectedServices([...selectedServices, id])
     };
  };

  useEffect(() => {
    api.get('services').then(response => {
        setServices(response.data)
    });
  });


  return (
    <Container>
        <Header>
          
            <Icon  onPress={handleNavigateBack} name="arrow-left" size={25} color="#F38E31"/>
            <HeaderText>Bem vindo!</HeaderText> 
            <SubText>Encontre no mapa pontos de serviços</SubText>
            
        </Header>

          <Main>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: -12.8755058,
                          longitude: -38.3060218,
                          latitudeDelta: 0.014,
                          longitudeDelta: 0.014,
              }}>
                {types.map(type => (
                    <Marker
                    style={styles.mapMarker}
                    key={String(type.id)}
                    onPress={() => handleNavigateToDetails(type.id)}
                    coordinate={{ 
                    latitude: type.latitude,
                    longitude: type.longitude,
                    
                    }}
                    >
                      
                    <MarkerContainer>
                      <ImageMarker 
                        source={{ uri: type.image_url }}
                        />
                      <MarkerImageText>{type.name}</MarkerImageText>
                    </MarkerContainer>
                  </Marker>
                ))}


            </MapView>


             <MidlleContent>
                    <RNPickerSelect
                      onValueChange={(value) => setSelectedTypes(value)
                      }

                  
                      items={[
                        { label: 'Limpeza', value: 'Limpeza'},
                        { label: 'Manutenção', value: 'Manutenção'},
                        { label: 'Lavagem', value: 'Lavagem'},
                        { label: 'Educacional', value: 'Educacional'},
                        { label: 'Pintura', value: 'Pintura'},
                      ]
                        
                      }
                  >
                      <TextInput
                      style={styles.input} 
                      autoCorrect={false} 
                      autoCapitalize="characters"
                      value={selectedTypes} 
                      placeholder="Selecione um tipo de servico"
                     />
                          
                  </RNPickerSelect> 
              

              
                     <RNPickerSelect
                          onValueChange={(value) => setSelectedActuation(value)
                          }

                      
                          items={[
                            { label: 'Domicílio', value: 'Domicílio'},
                            { label: 'Presencial', value: 'Presencial'},
                            { label: 'Online', value: 'Online'},
                          ]
                            
                          }
                      >
                          <TextInput
                          style={styles.input} 
                          autoCorrect={false} 
                          autoCapitalize="characters"
                          value={selectedActuation} 
                          // onChangeText={setSelectedActuation}
                          placeholder="Selecione um Local de Atuacao"
                          />
                        
                      </RNPickerSelect> 
             </MidlleContent>
            

            <ServicesContainer>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20}}
              >
                {services.map(service => (

                  <ServiceButton key={String(service.id)} style={[selectedServices.includes(service.id) ? styles.selectedService : {}]} onPress={() => handleSelectedServices(service.id)}>
                    <>
                     <SvgUri width={42} height={42} uri={service.image_url}/>
                    <ServiceText>{service.title}</ServiceText>
                  </>
                  </ServiceButton>   

                ))}
            </ScrollView>
              
            </ServicesContainer>
          </Main>
    </Container>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '50%',
    
  },
  mapMarker: {
    width: 90,
    height: 80,
  },
  selectedService: {
    borderWidth: 2,
    borderColor: '#F38E31'
  },
  input: {
    backgroundColor: '#fff',
    height: 55,
    
  
    color: '#6a6a6a',
    marginBottom: 10,
    borderRadius: 8,
    paddingHorizontal: 24
  }
})


export default Types;