import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/Home';
import CreateService from './pages/CreateService';


const Routes = () => {
    return (    
        <BrowserRouter>
            <Route exact  path="/" component={Home} />
            <Route  path="/create-service" component={CreateService} />
        </BrowserRouter>
    )   
};


export default Routes;