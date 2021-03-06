import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Dropzone from '../../Components/Dropzone';
import { Map, TileLayer, Marker} from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import Header from '../../Components/Header';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
    Container, 
    Content, 
    DataContent, 
    TopContent, 
    SelectContent, 
    BottomContent, 
    AdressContent,
    Services,
    SubmitButton } from './styles';

import api from '../../services/api';
import axios from 'axios';

interface Service {
    id: number;
    title: string;
    image_url: string;
}

interface IBGEUFResponse {
    sigla: string
};

interface IBGECityResponse {
    nome: string;
};

interface Data {
    id: string;
    image: string;
    name: string;
    types: string;
    actuation: string;
    email: string;
    whatsapp: string;
    longitude: number;
    latitude: number;
    city: string;
    uf: string;
    image_url: string;

    services: {
              title: string;
              image: string;
              id: number;
            }[];
    
};


const Edit = () => {
    const { id } = useParams();
    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);
    const [services, setServices] = useState<Service[]>([]);
    const [selectedServices, setSelectedServices] = useState<number[]>([]);

    const history = useHistory();

    const [selectedType, setSelectedType] = useState('');
    const [selectedActuation, setSelectedActuation] = useState('');

    const [selectedFile, setSelectedFile] = useState<File>();

    const [ufs, setUfs] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);

    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');

    const [data, setData] = useState<Data>({} as Data);
 
    const [formData, setFormData] = useState({
        name: '',
        types: '',
        actuation: '',
        email: '',
        whatsapp: ''
    });

    useEffect(() => {
        api.get(`typeService/${id}`).then(response => {

            setData(response.data)
            console.log(response.data)
            console.log(localStorage)

        })
    }, [id])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude  } = position.coords;

            setInitialPosition([latitude, longitude]);

        });
    }, []);

    useEffect(() => {
        api.get('/services').then(response => {
            setServices(response.data)
            console.log(response.data)
        })
    }, []);

    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
            const initialUfs = response.data.map(uf => uf.sigla);

            setUfs(initialUfs);
        });
    }, []);

    useEffect(() => {
        if (selectedUf === '0') {
            return;
        }

        axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
        .then(response => {
            const initialCity = response.data.map(city => city.nome);

            setCities(initialCity);
        });
    }, [selectedUf]);

    function handleSelectedUf(event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value;

        setSelectedUf(uf);
    };

    function handleSelectedCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = event.target.value;

        setSelectedCity(city);
    };
    function handleSelectedType(event: ChangeEvent<HTMLSelectElement>) {
        const type = event.target.value;

        setSelectedType(type);
    };

    function handleSelectedActuation(event: ChangeEvent<HTMLSelectElement>) {
        const actuation = event.target.value;

        setSelectedActuation(actuation);
    };

    function handleMapClick(event: LeafletMouseEvent) {
        setSelectedPosition([
            event.latlng.lat,
            event.latlng.lng, 
        ]);
    };
    
    function handleSelectedServices(id: number) {
        const amountService = selectedServices.findIndex(service => service === id);

        if(amountService >= 0) {
            const filteredService = selectedServices.filter(service => service !== id)

            setSelectedServices(filteredService);
        }else {
            setSelectedServices([...selectedServices, id]);
        };
    };

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const {name, value } = event.target;

        setData(data);
        console.log(data)
        
        setFormData({ ...formData,  [name]: value });
        setData({ ...data, ...formData, [name]: value })
        console.log(data.services)
    };

   async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const { 
            name,
            email,
            whatsapp } = formData;

        const types = selectedType;
        const actuation = selectedActuation;
        const uf = selectedUf;
        const city = selectedCity;
        const [latitude, longitude] = selectedPosition;
        const services = selectedServices;

        const data = new FormData();

        data.append('name', name);
        data.append('types', types);
        data.append('actuation', actuation);
        data.append('email', email);
        data.append('whatsapp', whatsapp);
        data.append('uf', uf);
        data.append('city', city);
        data.append('latitude', String(latitude));
        data.append('longitude', String(longitude));
        data.append('services', services.join(','));
        
        if(selectedFile) {
            data.append('image', selectedFile)
        };


        

        await api.put(`/typeService/${id}`, data);


       
    };

   async function handlePush() {

     toast.success("Cadastro realizado com sucesso!", {autoClose: 1400});

     setTimeout(() => {
            history.push('/')
        }, (1400));
    };

    return (
        <Container>
            <Header />

            <Content>
                <h1>Cadastre seu serviço</h1>
        
            <form action="" onSubmit={handleSubmit}>
                
                <Dropzone onFileUploaded={setSelectedFile}/>
                
                <DataContent>
                
                    <h2>DADOS</h2>
        <TopContent>
             
                        <label htmlFor="name">Nome da entidade</label>
                        <input 
                        type="text" 
                        name="name" 
                        id="name"
                        value={data.name}
                        onChange={handleInputChange}
                        />
                    </TopContent>

                    <SelectContent>

                        
                        <div>
                            <label htmlFor="types">Tipos de serviço</label>
                           
                                <select 
                                name="types" 
                                id="types"
                                onChange={handleSelectedType}
                                value={data.types}
                                >
                                    <option value="">Selecione um tipo</option>
                                    <option value="Limpeza">Limpeza</option>
                                    <option value="Manutenção">Manutenção</option>
                                    <option value="Lavagem">Lavagem</option>
                                    <option value="Educacional">Educacional</option>
                                    <option value="Pintura">Pintura</option>
                                </select>
                        </div>

                        <div className="rigthContent">
                            <label htmlFor="actuation">Atuação do serviço</label>
                            <select  
                            name="actuation" 
                            id="actuation"
                            onChange={handleSelectedActuation}
                            value={data.actuation}
                            >
                                    <option value="">Selecione uma forma de atuacao</option>
                                    <option value="Domicílio">Domicílio</option>
                                    <option value="Presencial">Presencial</option>
                                    <option value="Online">Online</option>
                                </select>
                        </div>
                    </SelectContent>
                    <BottomContent>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email"
                                onChange={handleInputChange}
                                value={data.email}
                            />
                        </div>

                        <div className="rigthContent">

                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input 
                                type="text" 
                                name="whatsapp" 
                                id="whatsapp"
                                onChange={handleInputChange}
                                value={data.whatsapp}
                            />

                        </div>
                    </BottomContent>

                </DataContent>

                
                <AdressContent>
                    <legend>
                        <h2>Endereco</h2>
                        <span>Selecione o endereço no mapa</span>
                    </legend>
 
                    <Map className="map" id="map" center={initialPosition} zoom={15} onclick={handleMapClick}>
                    <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker position={selectedPosition}/>
                    </Map>   
                            
                    <SelectContent>
                        <div>
                            <label htmlFor="uf">Estado (UF)</label>
                            <select 
                                name="uf" 
                                id="uf"
                                value={selectedUf === data.uf ? data.uf : selectedUf}
                                onChange={handleSelectedUf}
                            >
                                <option value="0">Selecione uma UF</option>
                                {ufs.map(uf => (
                                    <option key={uf} value={uf}>{uf}</option>
                                ))}
                            </select>
                        </div>

                        <div className="rigthContent">
                            <label htmlFor="city">Cidade</label>
                            <select 
                            name="city" 
                            id="city"
                            onChange={handleSelectedCity}
                            value={selectedCity}
                            >
                                <option value="0">Selecione uma Cidade</option>
                                {cities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                    </SelectContent>
                </AdressContent>

                <Services>
                    <div>
                        <h2>Serviços</h2>
                        <span>Selecione um ou mais serviços abaixo</span>
                    </div>
                    <ul>
                        {services.map(service => (
                        <li key={service.id}
                        onClick={() => handleSelectedServices(service.id)}

                        className={selectedServices.includes(service.id) ? 'selected' : ''}
                        >
                            <img src={service.image_url} alt={service.title}/>
                            <span>{service.title}</span>  
                        </li>
                        ))}

                    </ul>
                </Services>

                   <SubmitButton>
                       <div>
                       </div>
                            <button  onClick={handlePush} type="submit">Cadastrar ponto de serviço</button>
                   </SubmitButton>
            </form>         
         </Content>
        </Container>
    );
};


export default Edit;