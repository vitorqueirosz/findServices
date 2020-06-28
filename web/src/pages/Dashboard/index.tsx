import React, { useState, useEffect } from 'react';

import { Container, Content, MainContent, Header } from './styles';
import { FiLogIn, FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import { useParams, useHistory } from 'react-router-dom';
import logo from '../../uploads/logoService.svg';

interface User {
    email: string;
    id: number;
    idade: number;
    name: string;
    password: string;
    profissao: string;
    whatsapp: string;
}

interface Services {
    id: number;
    actuation: string;
    city: string;
    image: string;
    name: string;
    types: string;
    uf: string;
    image_url: string;
}

const Dashboard = () => {
    const [user, setUser] = useState<User[]>([]);
    const [services, setServices] = useState<Services[]>([]);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {

        api.get(`/users/${id}`).then(response => {
            setUser([response.data.user])

            setServices(response.data.services)
            console.log(response.data)
            console.log(localStorage.token)

    })}, [id]);

    function handleEdit(id: number) {

        api.get(`/typeService/${id}`).then(response => {
    
            history.push(`/edit/${id}`)

        })
};

   async function handleDelete(id: number) {
        const filteredService = services.filter(item => item.id !== id)

        if(filteredService) {
            await api.delete(`typeService/${id}`)
        }

        await api.get(`/users/${id}`).then(response => {
            setUser([response.data.user])


        })

        setServices(services)
    };

    async function handleCreate() {
        
        history.push('/create-service');

    };

    function handleGoBack() {
        localStorage.removeItem('token');

        history.push('/')
    };

  return (
  
    <Container>
            <Header>
                <div>
                    <img src={logo} alt="logoService"/>
                    <span>FindService</span>
                </div>
                    
                <div>
                    <button onClick={handleGoBack}>
                            <FiArrowLeft size={20}/>Sair
                     </button>
                </div>
            </Header>
            
            {user.map(user => (
                <h1>Bem vindo, {user.name}</h1>
            ))}
    

            <Content>
            {user.map(user => (
                <>
                <header>
                <h1>Seus serviços</h1>
                </header>

                <MainContent>
                    {services.map(service => (

                    
                    <ul>
                        <li  key={String(service.id)} >
                                <img src={service.image_url} alt={service.name}/>
                        <span>{service.name}</span>

                            <div>
                                <h4>Endereço</h4>
                                    <p>{service.city}, {service.uf}</p>

                                <h4>Tipo de serviço</h4>
                                    <p>{service.types}</p>

                                <h4>Atuação</h4>
                                    <p>{service.actuation}</p>
                            </div>

                        <aside>
                            <button onClick={() => handleEdit(service.id)}>Editar</button>
                            <button type="reset"  onClick={() => handleDelete(service.id)}>Excluir</button>
                        </aside>
                        </li>

                    </ul>
                   ))} 
                </MainContent>
            </>
                ))}
            </Content>
            
                <button  onClick={handleCreate}><span><FiLogIn size={25}/></span><p>Cadastrar um novo servico</p></button>
    </Container>


  )
};

export default Dashboard;