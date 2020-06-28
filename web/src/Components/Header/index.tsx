import React from 'react';

import { HeaderTop } from './styles';
import { Link } from  'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../uploads/logoService.svg';

const Header = () => {
  return (

        <HeaderTop>
               <div>
                    <img src={logo} alt="logoService"/>
                    <span>FindService</span>
                </div>
                    
                    <Link to="/">
                            <FiArrowLeft size={25}/>Voltar para home
                     </Link>

                
         </HeaderTop>
  )
}

export default Header;