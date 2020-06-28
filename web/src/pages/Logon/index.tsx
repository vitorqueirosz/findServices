import React, { useState, ChangeEvent, FormEvent } from 'react';
import Header from '../../Components/Header';
import { FiLogIn } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Container, Content, MainContent,SideContent } from './styles';
import api from '../../services/api';
import logo from '../../uploads/logon.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Logon = () => {
    const [formData, SetFormData] = useState({
        name: '', 
        idade: '',
        email: '', 
        password: '', 
        profissao: '', 
        whatsapp: '', 
    });

    const history= useHistory();

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        // console.log(event.target)
        SetFormData({ ...formData, [name]: value });
    };

   async function handleSubmit(e: FormEvent) {
    e.preventDefault();

        const {
            name,
            idade,
            email,
            password,
            profissao,
            whatsapp,
        } = formData;

        const data = {
            name,
            idade,
            email,
            password,
            profissao,
            whatsapp,
        };

        await api.post('/users', data);

        const user = {
            email, password
        };

        await api.post('/sessions', user).then(response => {
            
            const { id } = response.data.users;

            localStorage.setItem('token', response.data.token);
            
            setTimeout(() => {
                history.push(`users/${id}`, id); 
                
            }, 1400);
            
        });

        toast.success('Usuario cadastrado com sucesso!', {autoClose: 1300});
        


    };

  return (
    <Container>
      <Header />
    
      <Content>
        <SideContent>
            <img src={logo} alt="logo"/>
        </SideContent>

            <MainContent>
               
                <h1>Faça parte dessa comunidade</h1>

                <form action="" onSubmit={handleSubmit}>

                    <div>
                        {/* <label htmlFor="name">Nome</label> */}
                        <input 
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Digite seu nome"
                        onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        {/* <label htmlFor="idade">Idade</label> */}
                        <input 
                        type="number"
                        name="idade"
                        id="idade"
                        placeholder="Digite sua idade"
                        onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        {/* <label htmlFor="email">E-mail</label> */}
                        <input 
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Digite sua e-mail"
                        onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        {/* <label htmlFor="password">Senha</label> */}
                        <input 
                        type="password"
                        
                        name="password"
                        id="password"
                        placeholder="Digite sua senha"
                        onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        {/* <label htmlFor="profissao">Profissao</label> */}
                        <input 
                        type="text"
                        
                        name="profissao"
                        id="profissao"
                        placeholder="Digite sua profissao"
                        onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        {/* <label htmlFor="whatsapp">Whatsapp</label> */}
                        <input 
                        type="text"
                        name="whatsapp"
                        id="whatsapp"
                        placeholder="Digite seu whatsapp"
                        onChange={handleInputChange}
                        />
                    </div>



                </form>


                    <button  type="submit"  onClick={handleSubmit}><span><FiLogIn size={25}/></span><p>Salvar informacoes</p></button>
            </MainContent>
    </Content>

    </Container>
  );
};

export default Logon;