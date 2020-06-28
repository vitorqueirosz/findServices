<<<<<<< HEAD
import React, { useState, ChangeEvent} from 'react';
=======
import React from 'react';
>>>>>>> 19bfc48d40c61414300bdedd1c3789b94c08fd2d

import logo from '../../uploads/logoService.svg';
import homeImage from '../../uploads/homeback.svg';
import { FiLogIn } from 'react-icons/fi';
<<<<<<< HEAD
import { useHistory } from 'react-router-dom';

import { Container, Content, SideContent, SideImage, CenterContent, Input } from './styles';
import api from '../../services/api';

const Home = () => {
    const history = useHistory();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setFormData({...formData, [name]: value});
    };

    async function handleSubmit() {
        const { email, password } = formData;

        const data = {
            email, password
        };

        console.log(data)

       await api.post('/sessions', data).then(response => {
            const { id } = response.data.users;

            history.push(`users/${id}`);
            localStorage.setItem('token', response.data.token);
            
        });
    }

=======
import { Link } from 'react-router-dom';

import { Container, Content, SideContent, SideImage, CenterContent } from './styles';

const Home = () => {
>>>>>>> 19bfc48d40c61414300bdedd1c3789b94c08fd2d
    return (
        <Container>

        <Content>

            <header>
                <img src={logo} alt="logoService"/>
                <span>FindServices</span>
            </header>
                 
            <CenterContent>  
                 <SideContent>
                     <div>
                        <h1>Seu marketplace de serviços gerais.</h1>
                        <span>Ajudamos pessoas a encontrarem serviços gerais de forma rapida.</span>
                     </div>

<<<<<<< HEAD
                    <Input>
                        <form action="" onSubmit={handleSubmit}>

                            <input 
                            type="text" 
                            placeholder="Digite seu e-mail" 
                            name="email"
                            id="password" 
                            onChange={handleInputChange}
                            />

                            <input 
                            type="password" 
                            placeholder="Digite sua senha"
                            id="password" 
                            name="password"
                            onChange={handleInputChange}
                            />

                        </form>
                    </Input>

                    
                    <button type="submit"
                     onClick={handleSubmit}
                    >
                        <span>
                            <FiLogIn size={25}/>
                        </span>
                        <strong>Entrar</strong>
                    </button>
                    
                    <aside>
                        <a href="/logon">Cadastre-se</a>
                        <a href="/">Esqueceu a senha?</a>
                    </aside>

=======
                    <Link to="/create-service">
                        <span>
                            <FiLogIn size={25}/>
                        </span>
                        <strong>Cadastre um novo serviço</strong>
                    </Link>
                    
>>>>>>> 19bfc48d40c61414300bdedd1c3789b94c08fd2d
                 </SideContent>

                 <SideImage>
                     <img src={homeImage} alt="homeImage"/>
                     
                 </SideImage>
                
                </CenterContent>

         </Content>


        </Container>
    );
};


export default Home;