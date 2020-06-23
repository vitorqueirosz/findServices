import React from 'react';

import logo from '../../uploads/logoService.svg';
import homeImage from '../../uploads/homeback.svg';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Content, SideContent, SideImage, CenterContent } from './styles';

const Home = () => {
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

                    <Link to="/create-service">
                        <span>
                            <FiLogIn size={25}/>
                        </span>
                        <strong>Cadastre um novo serviço</strong>
                    </Link>
                    
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