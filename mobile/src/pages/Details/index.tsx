import React, { useState, useEffect } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { SafeAreaView, View, Text, StyleSheet, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';
import { 
  Container, 
  ContentInside,
   Header, 
   ImageContainer, MiddleContent, Title, Adress, AdressTitle, AdressInfo, Services  } from './styles';
import * as MailComposer from 'expo-mail-composer';
import api from '../../services/api';

interface Params {
  point_id: number;
};

interface Data {
  type: {
    image: string;
    image_url: string;
    name: string;
    types: string;
    actuation: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
  }
  services: {
    id: number;
    image_url: string;
    title: string;
  }[]
};

const Details = () => {

  const navigation = useNavigation();
  
  const [data, setData] = useState<Data>({} as Data)

  const routes = useRoute();
  const routeParams = routes.params as Params;

  useEffect(() => {
    api.get(`typeService/${routeParams.point_id}`).then(response => {
        setData(response.data)
        {console.log(routeParams.point_id)}
    });
}, []);


  function handleGoBackToTypes() {
    navigation.goBack();
  };

  function handleWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=55${data.type.whatsapp}&text=Tenho interesse nos seus serviços, podemos conversar?`)
  };

  function handleComposeMail() {
    MailComposer.composeAsync({
      subject: 'Interesse no serviço fornecido',
      recipients: [data.type.email],
    });
  };

  if(!data.type) {
    return null;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
<ContentInside>
      <Header>
        <Icon  onPress={handleGoBackToTypes} name="arrow-left" size={25} color="#F38E31"/>
      </Header>

      <ImageContainer source={{ uri: data.type.image_url }}/>

      <MiddleContent>

        <Title>{data.type.name}</Title>

        <Adress>

          <AdressTitle>Endereço</AdressTitle>

          <AdressInfo>
            {data.type.uf}, {data.type.city}
          </AdressInfo>

        </Adress>

    {/* <ContentServices> */}
  <View style={styles.content}>
      <View style={styles.contentService}>

            <View>
              <Text style={styles.contentText}>Tipo de Serviço</Text>
            </View>
          <View style={styles.insideContent}>
            <Text style={styles.textContent}>
            {data.type.types}
            </Text>
          </View>
        </View>
        <View style={styles.contentService}>
            <View>
              <Text style={styles.contentText}>Atuação</Text>
            </View>
          <View style={styles.insideContent}>
            <Text style={styles.textContent}>
            {data.type.actuation}
            </Text>
      </View>


    </View>

 </View>   

       <Services>
            <View>
              <Text style={styles.contentText}>Área</Text>
            </View>
         <ScrollView horizontal>
          {data.services.map(service => (

          <TouchableOpacity style={styles.service} key={String(service.id) }>
          {/* <SvgUri width={42} height={42} uri={ `http://192.168.0.100:3333/uploads/${service.image_url}` }/> */}
            <Text  style={styles.services}>{service.title}</Text> 
          </TouchableOpacity>

          ))}
        </ScrollView>
        </Services>


  </MiddleContent>
</ContentInside>

       <View style={styles.BottomContent}>
            <RectButton
              style={styles.button}
              onPress={handleWhatsapp}
            >
              <FontAwesome name="whatsapp" size={20} color="#F38E31"/>
              <Text style={styles.buttonText}>Whatsapp</Text>
            </RectButton>

            <RectButton
              style={styles.button}
              onPress={handleComposeMail}
            >
              <Icon name="mail" size={20} color="#F38E31"/>
              <Text style={styles.buttonText}>E-mail</Text>
            </RectButton>

       </View>
       </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  BottomContent: {

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
      paddingBottom: 12,
      paddingHorizontal: 32,

      backgroundColor: '#F38E31'

  },
  content: {
    marginBottom: 12,
  },
  contentText: {
    color: '#6C6C80',
    fontWeight: 'bold'
  },
  contentService : {
    
  },
  insideContent: {
    backgroundColor: '#F38E31',
    padding: 8,
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 4,
  },
  textContent: {
    color: '#fff',
    fontWeight: 'bold',
  },
  service: {
    backgroundColor: '#fff',
      height: 40,
      width: 100,
      borderRadius: 8,
      // paddingHorizontal: 16,
      // paddingTop: 15,
      // paddingBottom: 8,
      
      marginRight: 8,
      marginTop: 8,
      
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#F38E31',
      borderWidth: 2,
      
      textAlign: 'center',
  },
  services: {
    fontFamily: 'Roboto_400Regular',
      fontSize: 12,
      lineHeight: 18,
      
      color: '#6C6C80',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 2
  },
  button: {
    width: '45%',
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {

    marginLeft: 8,
    color: '#F38E31',
    paddingBottom: 2,
    

  },

})
export default Details;